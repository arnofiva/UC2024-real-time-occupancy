import{ah as t,ai as r,cY as p,ak as s}from"./index-c0f955a7.js";import{N as a}from"./DynamicLayerView3D-de5acd27.js";import{m}from"./ExportImageParameters-d837b18a.js";import{G as n}from"./MapServiceLayerViewHelper-74c302e2.js";import{r as l}from"./drapedUtils-011ee4d5.js";import"./LayerView3D-cadfe2a7.js";import"./projectExtentUtils-5c353335.js";import"./ImageMaterial-31d914f8.js";import"./LayerView-56ae8a75.js";import"./RefreshableLayerView-ac92d1c6.js";import"./floorFilterUtils-73949d2d.js";import"./sublayerUtils-7a445087.js";import"./popupUtils-424614c6.js";const h=i=>{let e=class extends i{initialize(){this.exportImageParameters=new m({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return t([r()],e.prototype,"exportImageParameters",void 0),t([r({readOnly:!0})],e.prototype,"floors",null),t([r({readOnly:!0})],e.prototype,"exportImageVersion",null),t([r()],e.prototype,"layer",void 0),t([r()],e.prototype,"suspended",void 0),t([r(p)],e.prototype,"timeExtent",void 0),e=t([s("esri.views.layers.MapImageLayerView")],e),e};let o=class extends h(a){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new n({createFetchPopupFeaturesQueryGeometry:(i,e)=>l(i,e,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeatures(i,e){return this._popupHighlightHelper.fetchPopupFeatures(i,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};o=t([s("esri.views.3d.layers.MapImageLayerView3D")],o);const _=o;export{_ as default};