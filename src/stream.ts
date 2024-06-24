import Graphic from "@arcgis/core/Graphic";
import Accessor from "@arcgis/core/core/Accessor";
import {
  property,
  subclass,
} from "@arcgis/core/core/accessorSupport/decorators";
import StreamLayer from "@arcgis/core/layers/StreamLayer";

export const streamLayer = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ETH_Lee_EM_activefeed_WM/StreamServer",
});

const SPEED_FACTOR = 7.5;

type StreamPlayerProperties = Pick<StreamPlayer, "timeField" | "features">;

@subclass()
export class StreamPlayer extends Accessor {
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
      if (index < this.features.length) {
        const next = this.features[index];
        const startTimeMS = next.getAttribute(this.timeField) as number;

        if (!firstStartTimeMS) {
          firstStartTimeMS = startTimeMS;
        }

        const startTimeDiffMS = (startTimeMS - firstStartTimeMS) / SPEED_FACTOR;
        const now = Date.now();
        const nowDiffMS = now - startNowMS;

        const timeToNext = startTimeDiffMS - nowDiffMS;

        if (timeToNext < 0) {
          const receptor = this.receptor;
          if (receptor) {
            receptor.sendMessageToClient(next);
          }
          const objectId = next.getObjectId();
          console.log(`[${index}] event`, startTimeDiffMS, { next, objectId });
          index++;

          this.timeoutId = setTimeout(step);
        } else {
          console.log(`[${index}] idle for ${timeToNext / 1000}s`);
          this.timeoutId = setTimeout(step, timeToNext);
        }
      } else {
        // call run() to loop
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
