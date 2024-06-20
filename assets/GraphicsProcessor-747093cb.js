import{ah as s,ao as g,aV as b,af as f,aI as m,bp as C,bq as w,aL as p,aM as V,am as u,br as v,bs as S,aF as E,bt as x,bu as h,bv as _,aP as c,aK as O,aR as G,ai as r,ak as P,aX as A,bw as j,bx as I}from"./index-6a39f5fd.js";import{F as R,p as H,y as z,s as D,u as q}from"./Graphics3DObjectStates-fd2c2770.js";let t=class extends g{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=b.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new f}initialize(){const{layer:e}=this,i="effectiveScaleRange"in e?e:null,l=this.scaleVisibilityEnabled&&i!=null,a=new R({owner:this,layer:this.owner.layer,preferredUpdatePolicy:m.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(n,o)=>new H({graphicsCoreOwner:this,graphicsCore:n,queryGraphicUIDsInExtent:o,elevationProvider:this.view.elevationProvider}),scaleVisibility:l?(n,o)=>new z({graphicsCoreOwner:this,layer:i,queryGraphicUIDsInExtent:o,graphicsCore:n,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:n=>new D(n)}});if(this._set("graphicsCore",a),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new q({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const n=this.owner;this._updatingHandles.add(()=>n.fullOpacity,()=>this.graphicsCore.opacityChange())}if("elevationInfo"in e){const n=e;this._updatingHandles.add(()=>n.elevationInfo,(o,y)=>{C(o,y)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if(w(e))return;throw e}this.destroyed||(this.addHandles(p(()=>this.view.clippingArea,()=>this._updateClippingExtent(),V)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",u(this.frustumVisibility)),this._set("graphicsCore",u(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get objectStates(){return this.graphicsCore?.objectStates}get scaleVisibilitySuspended(){return!(this.scaleVisibility==null||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return this.frustumVisibility!=null&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||this.scaleVisibility!=null&&this.scaleVisibility.updating||this.frustumVisibility!=null&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,i,l){const a=v(e,{renderer:i,arcade:l});if(a?.color){const n=a.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}return a}getRenderingInfoAsync(e,i,l,a){return S(e,{renderer:i,arcade:l,...a})}getHit(e){if(this.owner.loadedGraphics){const i=this.owner.loadedGraphics.find(l=>l.uid===e);if(i){const l=this.layer instanceof E?this.layer:null,a=x(i,l);return{type:"graphic",graphic:a,layer:a.layer}}}return null}whenGraphicBounds(e,i){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,i):Promise.reject()}computeAttachmentOrigin(e,i){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,i):null}getSymbolLayerSize(e,i){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,i):null}maskOccludee(e){const{set:i,handle:l}=this.objectStates.acquireSet(h.MaskOccludee,null);return this.objectStates.setUid(i,e.uid),l}highlight(e){if(e instanceof _)return d;if(typeof e=="number")return this.highlight([e]);if(e instanceof c)return this.highlight([e]);if(e instanceof O&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof c){const i=e.map(n=>n.uid),{set:l,handle:a}=this.objectStates.acquireSet(h.Highlight,null);return this.objectStates.setUids(l,i),a}if(typeof e[0]=="number"){const i=e,{set:l,handle:a}=this.objectStates.acquireSet(h.Highlight,null);return this.objectStates.setObjectIds(l,i),a}}return d}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:i}=this;if(e==null&&i==null)return;const l=({computedExtent:a,extentPadding:n})=>{this._suspendResumeExtent=j(a,this._suspendResumeExtent,I,n),e?.setExtent(this._suspendResumeExtent),i?.setExtent(this._suspendResumeExtent)};this.addHandles(p(()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding}),a=>l(a),G))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};s([r()],t.prototype,"type",void 0),s([r({constructOnly:!0})],t.prototype,"owner",void 0),s([r()],t.prototype,"layer",null),s([r()],t.prototype,"view",null),s([r({constructOnly:!0})],t.prototype,"graphicsCore",void 0),s([r()],t.prototype,"scaleVisibility",null),s([r({constructOnly:!0})],t.prototype,"frustumVisibility",void 0),s([r()],t.prototype,"elevationAlignment",null),s([r()],t.prototype,"objectStates",null),s([r()],t.prototype,"scaleVisibilitySuspended",null),s([r({readOnly:!0})],t.prototype,"frustumVisibilitySuspended",null),s([r()],t.prototype,"suspended",null),s([r({readOnly:!0})],t.prototype,"updating",null),s([r()],t.prototype,"loadedGraphics",null),s([r()],t.prototype,"fullOpacity",null),s([r()],t.prototype,"slicePlaneEnabled",null),s([r()],t.prototype,"drapeSourceType",void 0),s([r()],t.prototype,"updatePolicy",null),s([r({constructOnly:!0})],t.prototype,"scaleVisibilityEnabled",void 0),s([r({constructOnly:!0})],t.prototype,"frustumVisibilityEnabled",void 0),s([r()],t.prototype,"initializePromise",void 0),t=s([P("esri.views.3d.layers.graphics.GraphicsProcessor")],t);const d=A();export{t as O};
