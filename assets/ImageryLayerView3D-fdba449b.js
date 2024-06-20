import{ah as o,ai as d,cY as D,ak as w,av as h,bv as E,df as c,aW as b,aH as _}from"./index-6a39f5fd.js";import{N as H}from"./DynamicLayerView3D-6e8705b0.js";import{p as I}from"./popupUtils-8edf03a3.js";import"./LayerView3D-8e9aaca2.js";import"./projectExtentUtils-6a2bc118.js";import"./ImageMaterial-2902e567.js";import"./LayerView-3e7f79a7.js";import"./RefreshableLayerView-a35d9882.js";const P=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(a,r){const{layer:n}=this;if(!a)throw new h("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,s=I(n,r);if(!i||s==null)throw new h("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:s});const y=await s.getRequiredFields(),l=new E;l.timeExtent=this.timeExtent,l.geometry=a,l.outFields=y,l.outSpatialReference=a.spatialReference;const{resolution:p,spatialReference:m}=this.view,g=this.view.type==="2d"?new c(p,p,m):new c(.5*p,.5*p,m),{returnTopmostRaster:x,showNoDataRecords:v}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:x,pixelSize:g,showNoDataRecords:v,signal:r!=null?r.signal:null};return n.queryVisibleRasters(l,f).then(R=>R)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return o([d()],e.prototype,"layer",void 0),o([d()],e.prototype,"suspended",void 0),o([d(D)],e.prototype,"timeExtent",void 0),o([d()],e.prototype,"view",void 0),e=o([w("esri.views.layers.ImageryLayerView")],e),e};let u=class extends P(H){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=b(async t=>{this.redraw((e,a)=>this._redrawImage(e,a),t)},2e3)}initialize(){this.addHandles([_(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.layer?.renderer,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(t,e,a){e.imageOrCanvasElement?t.image=e.imageOrCanvasElement:(t.image=document.createElement("canvas"),t.pixelData=e.pixelData,await this._redrawImage(t,a))}async _redrawImage(t,e){if(!(t.image instanceof HTMLCanvasElement)||t.pixelData==null)throw new Error;const a=t.image,r=a.getContext("2d"),n=await this.layer.applyRenderer(t.pixelData,{signal:e}),i=this.layer.applyFilter(n).pixelBlock;if(i==null)throw new Error;a.width=i.width,a.height=i.height;const s=r.createImageData(i.width,i.height);s.data.set(i.getAsRGBA()),r.putImageData(s,0,0)}};u=o([w("esri.views.3d.layers.ImageryLayerView3D")],u);const S=u;export{S as default};
