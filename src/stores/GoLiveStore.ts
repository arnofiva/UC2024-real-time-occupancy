import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { SpatialReference } from "@arcgis/core/geometry";
import Point from "@arcgis/core/geometry/Point";
import SceneView from "@arcgis/core/views/SceneView";
import StreamPlayer from "../stream";
import { FireRenderNode } from "./FireRenderNode";

type GoLiveStoreProperties = Pick<GoLiveStore, "view" | "player" | "fires">;

const FIRES = [
  { x: 951365.8973956496, y: 6004011.668414182, z: 479.09999995213 },
  { x: 951374.4766566188, y: 6003981.308372535, z: 483.0999998310581 },
  { x: 951355.2847383054, y: 6003972.055664253, z: 475.0999994268641 },
];

@subclass()
class GoLiveStore extends Accessor {
  @property({ constructOnly: true })
  view: SceneView;

  @property({ constructOnly: true })
  player: StreamPlayer;

  @property({ constructOnly: true })
  fires: FireRenderNode;

  @property()
  isStarting = false;

  start() {
    if (!this.isStarting) {
      this.isStarting = true;

      const firestarter = () => {
        const fire = FIRES.shift();
        if (fire) {
          this.fires.addFire(
            new Point({
              spatialReference: SpatialReference.WebMercator,
              ...fire,
            }),
          );
          setTimeout(firestarter, 200 + Math.random() * 1000);
        } else {
          setTimeout(() => {
            this.player.start();
            this.isStarting = false;
          }, 800);
        }
      };

      setTimeout(firestarter, 200);
    }
  }
}

export default GoLiveStore;
