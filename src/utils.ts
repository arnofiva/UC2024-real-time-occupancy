import DefaultUI from "@arcgis/core/views/ui/DefaultUI";

export function timeout(timeoutInMilliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, timeoutInMilliseconds);
  });
}

/**
 * For use in findViewUIContainer.
 */
let viewUI: DefaultUI;
export function setViewUI(ui: DefaultUI): void {
  viewUI = ui;
}

export function ensureViewUIContainer(
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  widgetId: string,
): HTMLElement {
  widgetId += "-ui-container"; // avoid conflicts with other ids used for CSS
  let widgetContainerEl = document.getElementById(widgetId);
  if (!widgetContainerEl) {
    widgetContainerEl = document.createElement("div");
    widgetContainerEl.id = widgetId;
    viewUI.add(widgetContainerEl, position);
  }
  return widgetContainerEl;
}
