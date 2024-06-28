import{aP as m,iL as b,cc as I,cd as M,aQ as O,aB as A,bx as L,aS as $,bw as V,aK as w,gK as T,dJ as P,em as C,j9 as j,km as B,aj as a,ak as o,am as S,h4 as H,h6 as N,as as F,at as k,au as G,hh as K,aw as h,hl as p,cf as f,aC as g,hT as z,cm as W,aF as J,aA as q}from"./index-ab96db07.js";import{g as D,b as v,a as x,X as Q,f as X}from"./VideoElement-69daa072.js";import{o as U}from"./BoundsStore-e64d6a6f.js";import{m as Y}from"./MediaElementView-8ba2ad15.js";import"./resourceExtension-6143fef8.js";import"./PooledRBush-81406012.js";import"./quickselect-6bdb87cc.js";import"./normalizeUtilsSync-597f881a.js";import"./normalizeUtilsCommon-6ab3a73c.js";const Z={key:"type",defaultKeyValue:"image",base:D,typeMap:{image:v,video:x}},_=m.ofType(Z);let c=class extends b.LoadableMixin(I(M.EventedAccessor)){constructor(e){super(e),this._index=new U,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const s of t.removed){const n=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(n),this.removeHandles(n),n.destroy(),this.notifyChange("fullExtent")}const{spatialReference:r}=this;for(const s of t.added){if(this._elementViewsMap.get(s))continue;const n=new Y({spatialReference:r,element:s});this._elementViewsMap.set(s,n);const l=O(()=>n.coords,()=>this._updateIndexForElement(n,!1));this._updateIndexForElement(n,!0),this.addHandles(l,n)}this._elementsIndexes.clear(),this.elements.forEach((s,n)=>this._elementsIndexes.set(s,n)),this.emit("refresh")},this.elements=new _}async load(e){if(A(e),!this.spatialReference){const t=this.elements.find(r=>r.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:L.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",$(e,this._get("elements"),_))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new V({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):w.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await T(e.spatialReference,this.spatialReference,null,t);const r=P(e.spatialReference,this.spatialReference)?e:C(e,this.spatialReference);if(!r)return[];const s=r.normalize(),n=[];for(const l of s)this._index.forEachInBounds(j(l),({normalizedCoords:u,element:R})=>{u!=null&&B(l,u)&&n.push(R)});return n.sort((l,u)=>this._elementsIndexes.get(l)-this._elementsIndexes.get(u)),n}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const r=e.normalizedBounds,s=this._index.has(e),n=r!=null;this._index.delete(e),n&&this._index.set(e,r),this.notifyChange("fullExtent"),t||(s!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};a([o()],c.prototype,"elements",null),a([o({readOnly:!0})],c.prototype,"fullExtent",null),a([o()],c.prototype,"spatialReference",null),c=a([S("esri.layers.support.LocalMediaElementSource")],c);const d=c;function y(e){return typeof e=="object"&&e!=null&&"type"in e}function E(e){return y(e)&&e.type==="image"}let i=class extends H(N(F(k(G(J))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=K(async(t,r,s)=>{const{save:n,saveAs:l}=await q(()=>import("./mediaLayerUtils-aa0ab524.js"),["./mediaLayerUtils-aa0ab524.js","./utils-a5240654.js","./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url);switch(t){case p.SAVE:return n(this,r);case p.SAVE_AS:return l(this,s,r)}}),this.source=new d}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new h("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const r=this._getSourceOverride(t,this.georeference);r&&(this.setAtOrigin("source",r,"web-map"),this.setAtOrigin("source",r,"web-scene"),t=r);const s=y(t)?new d({elements:new m([t])}):t;this._set("effectiveSource",s),this.spatialReference&&(s.spatialReference=this.spatialReference),await s.load(e),this.spatialReference=s.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):w.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new d({elements:new m(e)}):e instanceof m?new d({elements:e}):e:null}readSource(e,t,r){if("itemId"in t&&t.itemId)return;const s=this._createSource(t);return s?.read(t,r),s}writeSource(e,t,r,s){if(e&&e instanceof d){const n=e.elements.length;if(n!==1)return void(s?.messages&&s.messages.push(new h("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${n}.`)));e=e.elements.at(0)}E(e)?e.write(t,s):s?.messages&&(e?s.messages.push(new h("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):s.messages.push(new h("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(p.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new v;case"video":return new x}return null}_getSourceOverride(e,t){if(y(e)&&this.originIdOf("source")===f.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===f.WEB_MAP||this.originIdOf("georeference")===f.WEB_SCENE)){const r=e.toJSON(),s=this._createSource(r);return s.read({...r},{origin:"portal-item"}),s.read({georeference:t},{origin:"web-map"}),s.read({georeference:t},{origin:"web-scene"}),s}return null}};a([o({readOnly:!0})],i.prototype,"effectiveSource",void 0),a([o({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],i.prototype,"georeference",void 0),a([g("web-document","georeference")],i.prototype,"readGeoreference",null),a([o({type:String})],i.prototype,"copyright",void 0),a([o({readOnly:!0})],i.prototype,"fullExtent",null),a([o({type:["MediaLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({type:["show","hide"]})],i.prototype,"listMode",void 0),a([o({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:Q}},overridePolicy(e,t,r){return{enabled:!0,allowNull:!1,ignoreOrigin:X(this,r?.origin)&&E(e)&&!!e.georeference&&e.originIdOf("georeference")>f.PORTAL_ITEM}}}}})],i.prototype,"source",null),a([z("source")],i.prototype,"castSource",null),a([g("source",["url"])],i.prototype,"readSource",null),a([W("source")],i.prototype,"writeSource",null),a([o()],i.prototype,"spatialReference",void 0),a([o({readOnly:!0})],i.prototype,"type",void 0),i=a([S("esri.layers.MediaLayer")],i);const ce=i;export{ce as default};