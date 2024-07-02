import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { tsx } from "@arcgis/core/widgets/support/widget";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-block-section";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-pagination";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";
import "@esri/calcite-components/dist/components/calcite-segmented-control";
import "@esri/calcite-components/dist/components/calcite-segmented-control-item";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-switch";

import GoLiveStore from "../stores/GoLiveStore";
import { Widget } from "./Widget";

type GoLiveProperties = Pick<GoLive, "store">;

const formatter = new Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
  timeZone: "UTC",
  hour12: false,
});

function dateToTimeString(date: Date): {
  hoursMinutes: string;
  seconds: string;
} {
  const timeParts = formatter.formatToParts(date).map((part) => part.value);
  const hoursMinutes = timeParts.slice(0, 3).join("");
  const seconds = timeParts.slice(3, 5).join("");
  return { hoursMinutes, seconds };
}

@subclass()
class GoLive extends Widget<GoLiveProperties> {
  @property()
  store: GoLiveStore;

  render() {
    if (this.store.player.running) {
      const { hoursMinutes, seconds } = dateToTimeString(new Date(this.store.player.now));
      return (
        <div class="clock" onclick={() => {}}>
          <div class="clock-text-container">
            <span class="time-hh-mm">{hoursMinutes}</span>
            <span class="time-ss">{seconds}</span>
          </div>
          <div class="live-message">
            <span class="live-label">LIVE</span>
            <calcite-icon icon="circle-f" text-label="live" scale="s"></calcite-icon>
          </div>
          <div class="simulated-time-info">
            <calcite-icon icon="information" text-label="information" scale="s"></calcite-icon>
            <span class="simulated-time-label">Simulated time</span>
          </div>
        </div>
      );
    } else {
      const starting = this.store.isStarting;
      return (
        <div class="clock">
          <calcite-button
            width="full"
            loading={starting}
            disabled={starting}
            icon-start={starting ? undefined : "video-web"}
            onclick={() => this.store.start()}
          >
            Go Live
          </calcite-button>
        </div>
      );
    }
  }
}

export default GoLive;
