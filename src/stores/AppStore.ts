import Graphic from "@arcgis/core/Graphic";
import WebScene from "@arcgis/core/WebScene";
import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { Point } from "@arcgis/core/geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView";
import StreamLayerView from "@arcgis/core/views/layers/StreamLayerView";
import { createClientSideFeatureLayer, createClientSideStreamLayer, csvPoints, queryFeatures } from "../layers";
import StreamPlayer from "../stream";
import { FireRenderNode } from "./FireRenderNode";
import GoLiveStore from "./GoLiveStore";
import UserStore from "./UserStore";

type AppStoreProperties = Pick<AppStore, "view">;

type Fire = {
  element: HTMLDivElement;
  point: Point;
};

async function createStreamLayer(layer: FeatureLayer) {
  // return streamLayer;
  const features = await queryFeatures(csvPoints, ["start_time"]);

  const player = new StreamPlayer({
    timeField: "start_time",
    features,
  });

  player.receptor = createClientSideStreamLayer(layer);

  return player;
}

@subclass("arcgis-core-template.AppStore")
class AppStore extends Accessor {
  @property({ aliasOf: "view.map" })
  map: WebScene;

  @property({ constructOnly: true })
  view: SceneView;

  @property({ constructOnly: true })
  userStore = new UserStore();

  @property({})
  goLiveStore: GoLiveStore;

  @property()
  player: StreamPlayer;

  @property()
  private _fires: FireRenderNode = null!;

  constructor(props: AppStoreProperties) {
    super(props);

    const view = props.view;

    view.when(async () => {
      this._fires = new FireRenderNode({ view });
      this._addEventHandlers();
      await this.map.loadAll();

      document.title = this.map.portalItem.title;

      const layer = this.map.allLayers.find(({ title }) => title === "Lee building - occupancy") as FeatureLayer;

      const player = await createStreamLayer(layer);
      this.goLiveStore = new GoLiveStore({ view, player, fires: this._fires });

      this.player = player;

      const stream = player.receptor;

      this.map.add(stream);

      this.view.whenLayerView(stream).then((lv) => this.addStream(lv));
    });
  }

  private async addStream(streamLV: StreamLayerView) {
    const layer = this.map.allLayers.find(({ title }) => title === "Lee building - occupancy") as FeatureLayer;

    const features = await queryFeatures(layer);

    const roomsClientSide = createClientSideFeatureLayer(layer, features);

    const nameToRoomMap = new Map<string, Graphic>();
    features.forEach((f) => {
      nameToRoomMap.set(f.attributes["NAME"], f);
    });

    const updateRoom = async (e: __esri.StreamLayerViewDataReceivedEvent | Graphic) => {
      const name = e.attributes["NAME"];

      const graphic = nameToRoomMap.get(name);

      if (graphic) {
        graphic.attributes = {
          ...graphic.attributes,
          ...e.attributes,
        };

        await roomsClientSide.applyEdits({
          updateFeatures: [graphic],
        });
      } else {
        console.log("No room found for " + name);
      }
    };

    await Promise.all(
      features.map(async (f) => {
        const name = f.attributes["NAME"];
        const query = csvPoints.createQuery();
        query.returnGeometry = false;
        query.where = `NAME = '${name}'`;
        query.num = 1;
        query.orderByFields = ["start_time"];
        const { features } = await csvPoints.queryFeatures(query);

        if (features.length) {
          await updateRoom(features[0]);
        }
      }),
    );

    layer.visible = false;
    streamLV.layer.visible = false;
    this.map.add(roomsClientSide);

    this.map.presentation.slides
      .map((s) => s.visibleLayers)
      .forEach((visibleLayers) => {
        visibleLayers.forEach((visibleLayer) => {
          if (visibleLayer.id === layer.id) {
            visibleLayer.id = roomsClientSide.id;
          }
        });
      });

    streamLV.on("data-received", updateRoom);
  }

  private _addEventHandlers(): void {
    const slides = this.map.presentation.slides;

    let shift = false;

    window.onkeydown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        shift = true;
        this.view.popupEnabled = false;
      } else {
        const index = Number.parseInt(e.key);

        if (0 < index && index <= slides.length) {
          const slide = slides.getItemAt(index - 1);

          slide.applyTo(this.view);

          // this.view.goTo(slide.viewpoint, {
          //   speedFactor: 0.2
          // });
        }
      }
    };

    window.onkeyup = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        shift = false;
        this.view.popupEnabled = true;
      }
    };

    this.view.on("immediate-click", async (e) => {
      if (shift) {
        const hitTest = await this.view.hitTest(e);
        const result = hitTest.results.find((result) => result.type === "graphic");
        if (result) {
          this._fires.addFire(result.mapPoint);
        } else if (hitTest.ground.mapPoint) {
          this._fires.addFire(hitTest.ground.mapPoint);
        }
      }
    });
  }
}

export default AppStore;
