import{ah as t,ai as n,ak as o,da as r,aT as c,db as h,ay as d,dc as p}from"./index-8b5e7d9b.js";const g=l=>{let s=class extends l{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),r(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,a=e.signal;this.addHandles(c(()=>e.abort())),await h(()=>this.view.defaultsFromMap?.heightModelInfoReady,a),d(a);const i=p(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e?.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return a&&a.minScale&&a.maxScale&&a.minScale<a.maxScale&&(e.outsideScaleRange=!0),e}};return t([n()],s.prototype,"view",void 0),t([n()],s.prototype,"slicePlaneEnabled",void 0),s=t([o("esri.views.3d.layers.LayerView3D")],s),s};export{g as n};
