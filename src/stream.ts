import Graphic from "@arcgis/core/Graphic";
import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import StreamLayer from "@arcgis/core/layers/StreamLayer";

const SPEED_FACTOR = 15;

type StreamPlayerProperties = Pick<StreamPlayer, "timeField" | "features">;

@subclass()
class StreamPlayer extends Accessor {
  @property({ constructOnly: true })
  timeField: string;

  @property({ constructOnly: true })
  features: Graphic[];

  @property()
  receptor: StreamLayer;

  @property()
  get running() {
    return this.timeoutId !== null;
  }

  @property()
  now = 0;

  @property()
  private timeoutId: number | null = null;

  constructor(props: StreamPlayerProperties) {
    super(props);
  }

  start() {
    this.stop();

    let index = 0;
    const startNowMS = Date.now();
    let firstStartTimeMS: number | null = null;

    const step = () => {
      const now = Date.now();
      this.now = now;

      if (index < this.features.length) {
        const next = this.features[index];
        const startTimeMS = next.getAttribute(this.timeField) as number;

        if (!firstStartTimeMS) {
          firstStartTimeMS = startTimeMS;
        }

        const startTimeDiffMS = (startTimeMS - firstStartTimeMS) / SPEED_FACTOR;

        const nowDiffMS = now - startNowMS;

        const timeToNext = startTimeDiffMS - nowDiffMS;

        if (timeToNext < 0) {
          const receptor = this.receptor;
          if (receptor) {
            receptor.sendMessageToClient({
              type: "features",
              features: [next],
            });
          }
          const objectId = next.getObjectId();
          // console.log(`[${index}] event`, startTimeDiffMS, { next, objectId });
          index++;

          this.timeoutId = setTimeout(step);
        } else {
          // console.log(`[${index}] idle for ${timeToNext / 1000}s`);
          this.timeoutId = setTimeout(step, Math.min(timeToNext, 1000));
        }
      } else {
        this.timeoutId = setTimeout(step, 1000);
      }
    };

    this.timeoutId = setTimeout(step);
  }

  stop() {
    const timeoutId = this.timeoutId;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    this.timeoutId = null;
  }

  destroy(): void {
    console.log("Destroyed...");
  }
}

export default StreamPlayer;
