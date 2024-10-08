import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { tsx } from "@arcgis/core/widgets/support/widget";

import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import AppStore from "../stores/AppStore";
import { ensureViewUIContainer } from "../utils";
import GoLive from "./GoLive";
import Header from "./Header";
import { Widget } from "./Widget";

type AppProperties = Pick<App, "store">;

@subclass("arcgis-core-template.App")
class App extends Widget<AppProperties> {
  @property()
  store: AppStore;

  postInitialize(): void {
    const view = this.store.view;
    const fullscreen = new Fullscreen({ view });
    view.ui.add(fullscreen, "top-left");
  }

  render() {
    if (this.store.goLiveStore) {
      return (
        <div>
          <Header store={this.store}></Header>
          <GoLive store={this.store.goLiveStore} container={ensureViewUIContainer("top-right", "clock")}></GoLive>
        </div>
      );
    } else {
      return (
        <div>
          <Header store={this.store}></Header>
        </div>
      );
    }
  }
}

export default App;
