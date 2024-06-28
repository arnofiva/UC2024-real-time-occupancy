import{b0 as L,aw as g,fW as m,gT as f}from"./index-ab96db07.js";import{s as w}from"./associatedFeatureServiceUtils-82735909.js";import{b as v,i as S,a as M}from"./fetchService-fa9a0116.js";class I{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(a,t){const r=this._serviceMetadatas.get(a);if(r)return r;const s=await v(a,t);return this._serviceMetadatas.set(a,s),s}async fetchItemData(a){const{id:t}=a;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const s=await a.fetchData();return r.set(t,s),s}async fetchCustomParameters(a,t){const r=await this.fetchItemData(a);return r&&typeof r=="object"&&(t?t(r):r.customParameters)||null}}function l(e){const a={id:e.id,name:e.name},t=S(e.type);return t!=="FeatureLayer"&&(a.layerType=t),a}async function P(e,a,t){if(e?.layers==null||e?.tables==null){const r=await t.fetchServiceMetadata(a,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(l),e.tables=e.tables||r?.tables?.map(l)}return e}function o(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function T(e,a){return a==null?null:[...e.layers||[],...e.tables||[]].find(t=>t.id===a)}function ae(e,a){return[...e.layers||[],...e.tables||[]].filter(({layerType:t})=>a==="FeatureLayer"?!t:t===a)}function d(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function te(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"FeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function C(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function G(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const n=await t.fetchServiceMetadata(e.url);a.layers=n.layers?.map(l)}const{serverUrl:r,portalItem:s}=await w(e.url,{sceneLayerItem:e,customParameters:o(a)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return a.tables=[],a;if(!a.tables&&s){const n=await s.fetchData();if(n?.tables)a.tables=n.tables.map(l);else{const c=await t.fetchServiceMetadata(r,{customParameters:o(n)?.customParameters});a.tables=c?.tables?.map(l)}}if(a.tables)for(const n of a.tables)n.url=`${r}/${n.id}`;return a}async function F(e){let{portalItem:a}=e;!a||a instanceof L||(a=new L(a));const t=await D(a);return new t.constructor({portalItem:a,...t.properties})}async function D(e){await e.load();const a=new I;return O(await h(e,a))}async function h(e,a){switch(e.type){case"3DTiles Service":return k();case"CSV":return x();case"Feature Collection":return K(e);case"Feature Service":return $(e,a);case"Feed":return B();case"GeoJson":return U();case"Group Layer":return H();case"Image Service":return W(e,a);case"KML":return A();case"Knowledge Graph Layer":return R();case"Map Service":return _(e,a);case"Media Layer":return Q();case"Scene Service":return j(e,a);case"Stream Service":return V();case"Vector Tile Service":return J();case"WFS":return z();case"WMS":return E();case"WMTS":return q();default:throw new g("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function O(e){const a=e.className,t=M[a];return{constructor:await t(),properties:e.properties}}async function _(e,a){return await X(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function $(e,a){const t=await N(e,a);if(typeof t=="object"){const{sourceJSON:r,className:s}=t,n={sourceJSON:r};return t.id!=null&&(n.layerId=t.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function j(e,a){const t=await N(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:r}=await w(e.url,{sceneLayerItem:e});return(await a.fetchServiceMetadata(r))?.tables??[]}catch{return[]}});if(typeof t=="object"){const r={};let s;if(t.id!=null?(r.layerId=t.id,s=`${e.url}/layers/${t.id}`):s=e.url,e.typeKeywords?.length){for(const c of Object.keys(m))if(e.typeKeywords.includes(c))return{className:m[c]}}const n=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,c=>o(c)?.customParameters)});return{className:m[n?.layerType]||"SceneLayer",properties:r}}return t===!1&&(await a.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function K(e){await e.load();const a=f(e,"Map Notes"),t=f(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if(f(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return d(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function W(e,a){await e.load();const t=e.typeKeywords?.map(u=>u.toLowerCase())??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),s=r?.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),c=n.cacheType?.toLowerCase(),y=n.capabilities?.toLowerCase().includes("tilesonly");return c==="map"||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function V(){return{className:"StreamLayer"}}function J(){return{className:"VectorTileLayer"}}function U(){return{className:"GeoJSONLayer"}}function k(){return{className:"IntegratedMesh3DTilesLayer"}}function x(){return{className:"CSVLayer"}}function A(){return{className:"KMLLayer"}}function R(){return{className:"KnowledgeGraphLayer"}}function z(){return{className:"WFSLayer"}}function E(){return{className:"WMSLayer"}}function q(){return{className:"WMTSLayer"}}function B(){return{className:"StreamLayer"}}function H(){return{className:"GroupLayer"}}function Q(){return{className:"MediaLayer"}}async function X(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}async function N(e,a,t){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const u=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,i=>o(i)?.customParameters)});return{id:u.id,className:S(u.type),sourceJSON:u}}return{}}await e.load();let c=await a.fetchItemData(e);if(n){const u=await P(c,r,a),i=p(u);if(typeof i=="object"){const b=T(u,i.id);i.className=C(b?.layerType)}return i}if(s==="Scene Service"&&(c=await G(e,c,a)),d(c)>0)return p(c);const y=await a.fetchServiceMetadata(r);return t&&(y.tables=await t()),p(y)}function p(e){return d(e)===1&&{id:o(e)?.id}}const re=Object.freeze(Object.defineProperty({__proto__:null,fromItem:F,selectLayerClassPath:h},Symbol.toStringTag,{value:"Module"}));export{P as a,te as c,h as d,I as e,C as i,ae as n,G as o,re as p,o as s,l as t,d as u};
