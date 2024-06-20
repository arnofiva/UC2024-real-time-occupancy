import{cs as z,mf as B,mg as K,bR as S,bF as H,ah as g,ak as N,ai as y,bm as T,mh as Q,ao as C,mi as J,mj as W,mk as X,de as Y,cT as Z,aG as ee,cb as L,aw as M,aA as te,ml as R,dc as re,dd as ne,aT as ie}from"./index-6a39f5fd.js";import{a as oe,n as se,u as ae}from"./DefinitionExpressionSceneLayerView-f4d1c2d8.js";import{u as le}from"./LayerView-3e7f79a7.js";const de={setAttribute(){},rollback(){},commit(){}};var _;function we(e,r){const t=r.attributes[e.objectIdField];if(t==null)return de;const n=e.sessions.get(t);if(n)return n;const s=z(r.attributes),i=new Set,o=e.i3sOverrides.createInteractiveEditSession(t),a=new Map,u=(f,d)=>{const p=a.get(f);if(p==null){const m=d.indexOf(t);return a.set(f,m),m}return p};let l=_.EDITING;const c={setAttribute(f,d){if(l!==_.EDITING)return;const p=e.fieldsIndex.get(f);if(!p)return;const m=e.attributeStorageInfo.findIndex(b=>b.name===p.name);if(m<0)return;if(!(f in s))throw new Error(`Attribute "${f}" is not an attribute of the edited feature.`);o.setAttribute(m,d);const F=e.attributeStorageInfo[m];let E=!1;i.add(f),e.forEachNode((b,x)=>{const O=u(b,x);if(O===-1)return;const v=e.getAttributeData(b.index);if(v){const A=v[F.name];A&&(A[O]=d,e.setAttributeData(b.index,v,r),E=!0)}}),E&&e.clearMemCache()},rollback(){if(l===_.EDITING){for(const f of i)this.setAttribute(f,s[f]);o.remove(),l=_.ROLLED_BACK,e.sessions.delete(t)}},commit(){l===_.EDITING&&(o.remove(),l=_.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,c),c}function ue(e,r,t){const{gidToFeatureInfo:n,oidToFeatureInfo:s,fieldsIndex:i,objectIdField:o,globalIdField:a,featureOrIdentifierList:u}=t;if(!t.featuresResolved&&u!=null){for(const l of u){const c={feature:null,oid:-1,gid:null};if("attributes"in l){c.feature=l;const f=l.attributes;if(f!=null)for(const d in f){if(c.oid!==-1&&c.gid!=null)break;const p=i.normalizeFieldName(d);p===o&&(c.oid=f[d]??-1),p===a&&(c.gid=f[d])}}else c.oid=l.objectId??-1,c.gid=l.globalId;c.gid!=null&&n.set(c.gid,c),c.oid!==-1&&s.set(c.oid,c)}t.featuresResolved=!0}return(e!==-1?s.get(e):null)??(r!=null?n.get(r):null)}function $(e,r,t,n,s=null,i=!0){const o=[],a={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:t==null,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:t};for(const u of r){if(u.error!=null)continue;const l=u.objectId??-1,c=u.globalId,f=(l===-1||i?ue(l,c,a):null)??{feature:null,oid:l,gid:c},d={oid:l===-1?f.oid:l,gid:c??f.gid,feature:f.feature,result:u};if(o.push(d),d.oid===-1&&d.gid!=null&&s!=null&&(d.oid=s.get(d.gid)??-1),d.oid===-1&&d.gid!=null){let p=n.get(d.gid);p==null&&(p=[],n.set(d.gid,p)),p.push(d)}}return o}async function _e(e,r){const t=new Map,n=$(e,r.addedFeatures,r.edits?.addFeatures,t),s=$(e,r.updatedFeatures,r.edits?.updateFeatures,t),i=$(e,r.deletedFeatures,r.edits?.deleteFeatures,t,r.globalIdToObjectId,!1);return t.size>0&&await ce(e,t),{adds:n.filter(o=>o.oid!==-1),updates:s.filter(o=>o.oid!==-1),deletes:i.filter(o=>o.oid!==-1)}}async function ce(e,r){const t=e.i3sOverrides.layer.associatedLayer;if(t?.globalIdField==null)return;const n=t.createQuery(),{objectIdField:s,globalIdField:i}=t;n.where=Array.from(r.keys()).map(u=>`${i}='${u}'`).join(" OR "),n.returnGeometry=!1,n.outFields=[s,i],n.cacheHint=!1;const o=await B(K(t,n));if(!o.ok)return;const a=o.value.features;for(const u of a){const l=u.attributes[i],c=u.attributes[s];if(l==null||c==null||c===-1)continue;const f=r.get(l);if(f!=null)for(const d of f)d.oid=c}}function Ee(e,r){const t=new Map,n=r.adds,s=r.updates,i=r.deletes;if(n.length>0)for(const o of n){const a=o.oid,u=o.feature;u?.geometry?.type==="mesh"&&t.set(a,u.geometry)}if(s.length>0)for(const o of s){const a=o.oid,u=o.feature;u?.geometry?.type==="mesh"&&t.set(a,u.geometry)}if(i.length>0)for(const o of i)t.set(o.oid,null);for(const[o,a]of t)e.i3sOverrides.updateGeometry(o,a)}function xe(e,r){const t=ge(e,r),n=fe(e,r);if(t.size===0&&n.size===0)return;const s=new Map;for(let d=0;d<e.attributeStorageInfo.length;d++)s.set(e.attributeStorageInfo[d].name,d);let i=!1;t.forEach((d,p)=>{const m=e.getAttributeData(p);let F=!1;d.forEach((E,b)=>{const x=m!=null?m[b]:null,O=s.get(b);for(const{featureIndex:v,value:A,featureId:G}of E)x&&(x[v]=A,F=!0,i=!0),e.i3sOverrides.updateAttributeValue(G,O,A)}),F&&e.setAttributeData(p,m,null)}),i&&e.clearMemCache();const{fieldsIndex:o,i3sOverrides:a,objectIdField:u,globalIdField:l}=e,c=a.layer.associatedLayer?.infoFor3D,f=new Set(c?[...Object.values(c.assetMapFieldRoles),...Object.values(c.transformFieldRoles)]:[]);for(const[d,p]of n){a.featureAdded(d);const{attributes:m}=p;for(const F in m){if(F!==u&&F!==l&&f.has(F))continue;const E=o.normalizeFieldName(F),b=E!=null?s.get(E):null;if(b==null)continue;const x=m[F];a.updateAttributeValue(d,b,x)}}}function fe(e,r){const t=new Map,n=r.adds;if(!n||n.length===0||e.globalIdField==null)return t;for(const s of n){const i=s.oid,o=s.feature;o?.geometry?.type==="mesh"&&t.set(i,o)}return t}function ge(e,r){const t=r.updates;if(!t||t.length===0)return new D;const n=new D,s=new Map;for(let i=0;i<e.attributeStorageInfo.length;i++)s.set(e.attributeStorageInfo[i].name,i);return e.forEachNode((i,o)=>{for(const a of t){if(a.feature==null)continue;const u=a.feature,l=a.oid,c=o.indexOf(l);for(const f in u.attributes){const d=e.fieldsIndex.normalizeFieldName(f),p=pe(n,i.index,d),m=u.attributes[f];p.push({featureIndex:c,featureId:l,value:m})}}}),n}function pe(e,r,t){const n=ye(e,r),s=t!=null&&n.get(t);if(s)return s;const i=new Array;return n.set(t,i),i}function ye(e,r){const t=e.get(r);if(t)return t;const n=new me;return e.set(r,n),n}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(_||(_={}));const me=Map,D=Map;function ve(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:r},requiredFields:t}=this;return e.outFields?S(r,[...H(r,e.outFields),...t]):S(r,t)}}}}const q=e=>{let r=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,n){return he(s=>this._updateAsync(t,s),n)}async _updateAsync(t,n){if(!this._startAsyncUpdate(t)){try{const s=await n();this._set(t,s)}catch{T.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,n)}}_startAsyncUpdate(t){const n=this._asyncUpdateState.get(t)??I.None;return n&I.Updating?(this._asyncUpdateState.set(t,n|I.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,n|I.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const n=(this._asyncUpdateState.get(t)??I.None)&~I.Updating;return n&I.Invalidated?(this._asyncUpdateState.set(t,n&~I.Invalidated),!0):(this._asyncUpdateState.set(t,n),!1)}};return g([y({readOnly:!0})],r.prototype,"updating",null),g([y()],r.prototype,"_numUpdating",void 0),r=g([N("esri.core.AsyncUpdate")],r),r};var I;function he(e,r){const t=()=>{i&&!o&&e(n)},n=()=>{if(!i||o)return r();i.clear(),o=!0;const a=J(i,r);return o=!1,a},s=()=>{i&&(i.destroy(),i=null)};let i=new Q(t),o=!1;return e(n),{remove:s}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(I||(I={}));let k=class extends q(C){};k=g([N("esri.core.AsyncUpdate")],k);const P="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let w=class extends q(C){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:t,labelingFields:n,viewFilterFields:s}=this;return S(e,[...r??[],...t??[],...n??[],...s??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?U(t=>r.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?U(r=>W(r,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:r}=this.layerView;return U(t=>X(t,e,r))})])}};async function U(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(t){return T.getLogger(P).error(t),null}}g([y()],w.prototype,"layerView",void 0),g([y()],w.prototype,"layer",null),g([y()],w.prototype,"requiredFields",null),g([y()],w.prototype,"rendererFields",void 0),g([y()],w.prototype,"labelingFields",void 0),g([y()],w.prototype,"viewFilterFields",void 0),w=g([N(P)],w);const V="esri.views.layers.SceneLayerView",j=T.getLogger(V);let h=class extends le{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return oe(this._layerFilter)}get _layerFilter(){const e=this.layer?.filter;if(e==null||e.geometries.length<1)return null;const r=this._geometryEngine;if(r==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return se;const t=e.geometries.at(0).spatialReference,n=e.geometries.toArray().map(a=>{try{a=r.simplify(a)}catch{return j.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(a==null)return null;if(a.spatialReference.equals(t))return a;try{return Y(a,t)}catch{return j.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(Z).sort((a,u)=>a.extent.xmin-u.extent.xmin),s=new Set,i=new Array,o=new Array;for(let a of n){const u=a.extent.xmin;if(i.length=0,s.forEach(l=>{if(u>=l.extent.xmax)return o.push(l),void s.delete(l);a.extent.ymin<=l.extent.ymax&&a.extent.ymax>=l.extent.ymin&&r.intersects(a,l)&&i.push(l)}),i.length>0){i.push(a);try{a=r.union(i)}catch{j.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}i.pop(),i.forEach(l=>s.delete(l))}s.add(a)}return s.forEach(a=>o.push(a)),o.length>0?{spatialRelationship:e.spatialRelationship,geometries:o}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const r=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(r)&&!ee(t,r))}get layerFilterUpdating(){return ae(this._layerFilter)}initialize(){const{signal:e}=this._abortController;L(()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length,e).then(async()=>{M(e),this._geometryEngine=await te(()=>import("./index-6a39f5fd.js").then(r=>r.xR),["./index-6a39f5fd.js","./index-c3d91843.css"],import.meta.url)}).catch(R),this._projectionEngineLoaded=re(),L(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{M(e),await ne(),this._projectionEngineLoaded=!0}).catch(R)}destroy(){this._abortController=ie(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}};g([y()],h.prototype,"layer",void 0),g([y()],h.prototype,"availableFields",null),g([y()],h.prototype,"maximumNumberOfFeatures",null),g([y({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null),g([y()],h.prototype,"filter",void 0),g([y({readOnly:!0})],h.prototype,"layerFilter",null),g([y({readOnly:!0})],h.prototype,"_layerFilter",null),g([y()],h.prototype,"_geometryEngine",void 0),g([y()],h.prototype,"_projectionEngineLoaded",void 0),g([y()],h.prototype,"_filterNeedsProjectionEngine",null),g([y()],h.prototype,"layerFilterUpdating",null),h=g([N(V)],h);const Oe=h;export{ve as a,w as c,Ee as d,xe as f,we as i,Oe as j,_e as u};
