import{aj as n,ak as i,am as y,aq as _,ah as E,mV as v,ai as P,dF as f,al as x,bt as j,gK as R,em as $,oJ as G,cd as b,aQ as O,aR as V,dy as A,fj as S,cM as D,aY as N,ce as T}from"./index-ab96db07.js";import{E as H}from"./EditGeometryOperations-cd9be2c8.js";import{b as z,a as I}from"./VideoElement-69daa072.js";import"./geometry2dUtils-bc57a82d.js";import"./resourceExtension-6143fef8.js";import"./MediaElementView-8ba2ad15.js";import"./normalizeUtilsSync-597f881a.js";import"./normalizeUtilsCommon-6ab3a73c.js";let p=class extends _{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new E}initialize(){this.addHandles([v(this._updatingHandles),this._updatingHandles.add(()=>{const e=this.element.georeference;return e?.type==="control-points"?e.controlPoints:null},e=>this._elementControlPointsChanged(e),P)])}_elementControlPointsChanged(e){if(this._updatedElementControlPoints===e)return;const t=e?.map(({mapPoint:r})=>r).filter(f),o=this.view.spatialReference;this._updatingHandles.addPromise(this._whenProjected(t,o,r=>{if(!r)return void this._replaceOperations(null);const{_operations:s}=this,h=new x({rings:[r.map(({x:l,y:u})=>[l,u])],spatialReference:o});s?.trySetGeometry(h)?this.onModifiedExternally():this._replaceOperations(H.fromGeometry(h,this.view.state.viewingMode))}))}_operationsGeometryChanged(){const{element:{georeference:e},_operations:t}=this;if(!t||!e||e.type!=="control-points"||!e.controlPoints)return;const o=t.data.geometry,r=e.controlPoints.map(({mapPoint:l})=>l).filter(f);if(o.rings[0]?.length!==r.length)return void this._updateElementControlPoints(null);const s=o.rings[0].map(([l,u])=>new j({x:l,y:u,spatialReference:o.spatialReference})),h=r.map(({spatialReference:l})=>l);this._updatingHandles.addPromise(this._whenProjected(s,h,l=>this._updateElementControlPoints(l)))}_updateElementControlPoints(e){const{georeference:t}=this.element;if(!t||!e||t.type!=="control-points"||t.controlPoints?.length!==e?.length)return;e||(t.controlPoints=null);const o=t.controlPoints;if(o?.length===e.length)for(let r=0;r<o.length;r++)o[r].mapPoint=e[r]}async _whenProjected(e,t,o){if(!e)return void o(e);const{_operations:r,element:{georeference:s}}=this,h=e.map(({spatialReference:m})=>m),l=Array.isArray(t)?t:new Array(h.length).fill(t);await R(Array.from(h).map((m,g)=>({source:m,dest:l[g]})));const u=e.map((m,g)=>$(m,l[g]));r===this._operations&&s===this.element.georeference&&o(u)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",()=>this._operationsGeometryChanged()),e)}};n([i({constructOnly:!0})],p.prototype,"view",void 0),n([i({constructOnly:!0})],p.prototype,"layer",void 0),n([i({constructOnly:!0})],p.prototype,"element",void 0),n([i({constructOnly:!0})],p.prototype,"onModifiedExternally",void 0),n([i()],p.prototype,"_operations",void 0),n([i()],p.prototype,"operations",null),n([i()],p.prototype,"updating",null),p=n([y("esri.views.3d.interactive.editingTools.media.MediaElementControllerControlPoints")],p);let c=class extends _{get operations(){return this._operations}get updating(){return this._updatingHandles.updating}constructor(e){super(e),this._updatingHandles=new E}initialize(){this.addHandles([v(this._updatingHandles),this._updatingHandles.add(()=>this.element.georeference?.coords,e=>this._elementCoordinatesChanged(e),P)])}_elementCoordinatesChanged(e){this._updatedElementCoordinates!==e&&this._updatingHandles.addPromise(this._whenProjected(e,this.view.spatialReference,t=>{if(!t)return void this._replaceOperations(null);const{_operations:o}=this;o?.trySetGeometry(t)?this.onModifiedExternally():this._replaceOperations(H.fromGeometry(t,this.view.state.viewingMode))}))}_operationsGeometryChanged(){const{element:{georeference:e},_operations:t}=this;if(!t||!e)return;const o=t.data.geometry;if(!e.coords)return void this._updateElementCoordinates(o);const r=e.coords.spatialReference;this._updatingHandles.addPromise(this._whenProjected(o,r,s=>this._updateElementCoordinates(s)))}_updateElementCoordinates(e){const{georeference:t}=this.element;t&&(t.coords=e,this._updatedElementCoordinates=t.coords)}async _whenProjected(e,t,o){if(!e)return void o(e);const{_operations:r,element:{georeference:s}}=this,h=await G(e,t);r===this._operations&&s===this.element.georeference&&o(h)}_replaceOperations(e){this._operations&&(this.removeHandles(this._operations),this._operations.destroy()),this._operations=e,e&&this.addHandles(e.data.on("change",()=>this._operationsGeometryChanged()),e),this.onModifiedExternally()}};n([i({constructOnly:!0})],c.prototype,"view",void 0),n([i({constructOnly:!0})],c.prototype,"layer",void 0),n([i({constructOnly:!0})],c.prototype,"element",void 0),n([i({constructOnly:!0})],c.prototype,"onModifiedExternally",void 0),n([i()],c.prototype,"_operations",void 0),n([i()],c.prototype,"operations",null),n([i()],c.prototype,"updating",null),c=n([y("esri.views.3d.interactive.editingTools.media.MediaElementControllerShape")],c);function k(e,t,o){return M(e.allLayerViews.find(r=>r.layer===t),o)}function M(e,t){if(!e||e.type!=="media-3d"||e.suspended)return!1;const o=e.layer.source;return!!o&&(o instanceof z||o instanceof I?o===t:"hasElement"in o&&o.hasElement(t))}let a=class extends _{grabbableForEvent(){return!0}constructor(e){super(e),this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.grabbing=!1,this.dragging=!1,this.hovering=!0,this.selected=!1,this.cursor=null,this.consumesClicks=!0,this.events=new b.EventEmitter,this.addHandles(O(()=>this.selected,t=>this.events.emit("select-changed",{action:t?"select":"deselect"}),V))}destroy(){this._set("view",null)}intersectionDistance(e){const{view:t,layer:o,element:r}=this;if(!k(t,o,r))return null;const s=t.toMap(e,{include:{layer:o,element:r}});return s&&A(s,w,t.renderSpatialReference)?S(w,t.state.camera.eye):null}onElevationChange(){}onViewChange(){}};n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"element",void 0),n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"layer",void 0),n([i({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0),n([i()],a.prototype,"interactive",void 0),n([i()],a.prototype,"selectable",void 0),n([i()],a.prototype,"grabbable",void 0),n([i()],a.prototype,"grabbing",void 0),n([i()],a.prototype,"dragging",void 0),n([i()],a.prototype,"hovering",void 0),n([i()],a.prototype,"selected",void 0),n([i()],a.prototype,"cursor",void 0),a=n([y("esri.views.3d.interactive.editingTools.media.MediaElementManipulator3D")],a);const w=D(),C=Symbol();let d=class extends b.EventedAccessor{get operations(){return this._controller?.operations}get elevationInfo(){return{mode:"on-the-ground",offset:0}}get _layerView(){const e=this.view.allLayerViews.find(t=>t.layer===this.layer);return e?.type==="media-3d"?e:null}get visible(){return M(this._layerView,this.element)}get isDraped(){return!0}get origin(){return null}get updating(){return!!this._controller?.updating}get _controllerClass(){return this.tool==="transform"||this.element.georeference?.type!=="control-points"?c:p}constructor(e){super(e),this.tool="transform"}initialize(){this.addHandles([O(()=>this._controllerClass,e=>this._updateController(e),N),T(()=>this._layerView,"element-render-changed",({element:e})=>{this.element===e&&this.emit("committed")})])}toMap(e){const{layer:t,element:o}=this;return this.view.toMap(e,{include:{layer:t,element:o}})}createManipulator(e){const{view:t,layer:o,element:r}=this;return new a({view:t,layer:o,element:r,...e})}_updateController(e){if(this._controller&&this._controller instanceof e)return;this.removeHandles(C);const{view:t,layer:o,element:r}=this,s=()=>{this.emit("modified-externally")};this._controller=new e({view:t,layer:o,element:r,onModifiedExternally:s}),s(),this.addHandles(v(this._controller),C)}};n([i({constructOnly:!0})],d.prototype,"view",void 0),n([i({constructOnly:!0})],d.prototype,"layer",void 0),n([i({constructOnly:!0})],d.prototype,"element",void 0),n([i()],d.prototype,"tool",void 0),n([i()],d.prototype,"_controller",void 0),n([i()],d.prototype,"elevationInfo",null),n([i()],d.prototype,"_layerView",null),n([i()],d.prototype,"visible",null),n([i()],d.prototype,"updating",null),n([i()],d.prototype,"_controllerClass",null),d=n([y("esri.views.3d.interactive.editingTools.ManipulatedObject3DMediaElement")],d);export{d as ManipulatedObject3DMediaElement};
