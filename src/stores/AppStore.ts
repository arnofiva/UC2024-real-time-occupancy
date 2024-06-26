import Graphic from "@arcgis/core/Graphic";
import WebScene from "@arcgis/core/WebScene";
import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import { Point } from "@arcgis/core/geometry";
import { distance } from "@arcgis/core/geometry/geometryEngine";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneView from "@arcgis/core/views/SceneView";
import StreamLayerView from "@arcgis/core/views/layers/StreamLayerView";
import { createClientSideFeatureLayer, createClientSideStreamLayer, csvPoints, queryFeatures } from "../layers";
import { StreamPlayer } from "../stream";
import UserStore from "./UserStore";
import { FireRenderNode } from "./FireRenderNode";

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

  @property()
  private player: StreamPlayer;

  private _fires: FireRenderNode = null!;

  constructor(props: AppStoreProperties) {
    super(props);

    const view = props.view;

    view.when(async () => {
      this._fires = new FireRenderNode({ view });
      await this.map.loadAll();

      const layer = this.map.allLayers.find(({ title }) => title === "Lee building - occupancy") as FeatureLayer;

      const streamPlayer = await createStreamLayer(layer);

      streamPlayer.start();
      this.player = streamPlayer;

      const stream = streamPlayer.receptor;

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

    layer.visible = false;
    streamLV.layer.visible = false;
    this.map.add(roomsClientSide);

    streamLV.on("data-received", async (e) => {
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
    });

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

          this.view.goTo(slide.viewpoint, {
            // speedFactor: 0.2
          });
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
