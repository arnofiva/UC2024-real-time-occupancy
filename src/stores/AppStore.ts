import Graphic from "@arcgis/core/Graphic";
import WebScene from "@arcgis/core/WebScene";
import Accessor from "@arcgis/core/core/Accessor";
import {
  property,
  subclass,
} from "@arcgis/core/core/accessorSupport/decorators";
import { watch } from "@arcgis/core/core/reactiveUtils";
import { Point } from "@arcgis/core/geometry";
import { distance } from "@arcgis/core/geometry/geometryEngine";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
import SceneView from "@arcgis/core/views/SceneView";
import StreamLayerView from "@arcgis/core/views/layers/StreamLayerView";
import UserStore from "./UserStore";

type AppStoreProperties = Pick<AppStore, "view">;

type Fire = {
  element: HTMLDivElement;
  point: Point;
};

@subclass("arcgis-core-template.AppStore")
class AppStore extends Accessor {
  @property({ aliasOf: "view.map" })
  map: WebScene;

  @property({ constructOnly: true })
  view: SceneView;

  @property({ constructOnly: true })
  userStore = new UserStore();

  private fires = [] as Fire[];

  constructor(props: AppStoreProperties) {
    super(props);

    const view = props.view;

    view.when(async () => {
      const streamLayer = new StreamLayer({
        url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ETH_Lee_EM_activefeed_WM/StreamServer",
      });

      await this.map.loadAll();

      this.map.add(streamLayer);

      this.view.whenLayerView(streamLayer).then((lv) => this.addStream(lv));
    });

    view.addHandles(
      watch(
        () => view.camera,
        () => {
          this.updateFires();
        },
      ),
    );
  }

  private async addStream(streamLV: StreamLayerView) {
    const layer = this.map.allLayers.find(
      ({ title }) => title === "Lee building - occupancy",
    ) as FeatureLayer;

    const geometryType = layer.geometryType;
    if (geometryType === "mesh" || geometryType === "multipatch") {
      throw new Error("Mesh and multipatch not supported");
    }

    const query = layer.createQuery();
    query.returnGeometry = true;
    query.returnZ = true;
    const features = (await layer.queryFeatures(query)).features;

    const roomsClientSide = new FeatureLayer({
      title: `${layer.title} (client-side)`,
      fields: layer.fields,
      objectIdField: layer.objectIdField,
      elevationInfo: layer.elevationInfo,
      hasZ: layer.hasZ,
      spatialReference: layer.spatialReference,
      geometryType,
      popupTemplate: layer.popupTemplate,
      source: features,
      renderer: layer.renderer,
      definitionExpression: "0 < people",
      // opacity: layer.opacity
    });

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
        const result = hitTest.results.find(
          (result) => result.type === "graphic",
        );
        if (result) {
          this.addFires(result.mapPoint);
        } else if (hitTest.ground.mapPoint) {
          this.addFires(hitTest.ground.mapPoint);
        }
      }
    });
  }

  private addFires(point: Point) {
    this.addFire(point);
    this.addFire(point);
    this.updateFires();
  }

  private addFire(point: Point) {
    const element = document.createElement("div");
    element.classList.add("fire");
    this.fires.push({
      element,
      point,
    });
    document.body.appendChild(element);
  }

  updateFires = () => {
    this.fires.forEach((fire, idx) => {
      const screenPoint = this.view.toScreen(fire.point);
      if (screenPoint) {
        const d = distance(this.view.camera.position, fire.point);

        const size = Math.min(100, 6000 / d);

        fire.element.style.height = `${size}px`;
        fire.element.style.width = `${size}px`;

        fire.element.style.top = `${screenPoint.y - size + 65}px`;
        fire.element.style.left = `${screenPoint.x - size / 2}px`;
      }
      const rotate = -this.view.camera.heading - 90 * (idx % 2);
      const tilt = -(this.view.camera.tilt - 90);
      fire.element.style.transform = `rotateX(${tilt}deg) rotateY(${rotate}deg)`;
    });
  };
}

export default AppStore;
