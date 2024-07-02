import WebScene from "@arcgis/core/WebScene";
import * as kernel from "@arcgis/core/kernel";
import SceneView from "@arcgis/core/views/SceneView";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import App from "./compontents/App";
import AppStore from "./stores/AppStore";
import { setViewUI } from "./utils";

console.log(`Using ArcGIS Maps SDK for JavaScript v${kernel.fullVersion}`);

setAssetPath("https://js.arcgis.com/calcite-components/2.8.5/assets");

const params = new URLSearchParams(document.location.search.slice(1));

const webSceneId = params.get("webscene") || "c43ea7331abe4c91a0e36646b39c1ceb";

const map = new WebScene({
  portalItem: {
    id: webSceneId,
    // portal: {
    //   url: portalUrl,
    // },
  },
});

const view = new SceneView({
  container: "viewDiv",
  map,
});
setViewUI(view.ui);
(window as any)["view"] = view;

const store = new AppStore({
  view,
});

const app = new App({
  container: "app",
  store,
});
