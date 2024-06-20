import{ax as S,cj as b,as as I,ek as h,el as L,em as O,en as d}from"./index-8b5e7d9b.js";import{l as P,a as g}from"./associatedFeatureServiceUtils-44938726.js";import{r as T}from"./fetchService-1b5d4dbf.js";import{t as m}from"./requestPresets-f7ad0d2f.js";const F={FeatureLayer:!0,SceneLayer:!0};async function R(r){const s=r.properties?.customParameters,e=await $(r.url,s),t={...r.properties,url:r.url};if(e.layers.length+e.tables.length===0)return e.layerId!=null&&(t.layerId=e.layerId),e.sourceJSON!=null&&(t.sourceJSON=e.sourceJSON),new e.Constructor(t);const n=new(await S(()=>import("./GroupLayer-6040a3e1.js"),["./GroupLayer-6040a3e1.js","./index-8b5e7d9b.js","./index-5447a158.css","./BlendLayer-dce91235.js","./jsonUtils-16d33138.js","./OperationalLayer-5c10068f.js","./commonProperties-60f31277.js","./ElevationInfo-36952bdf.js","./PortalLayer-c3739096.js","./ScaleRangeLayer-5b526f5a.js","./associatedFeatureServiceUtils-44938726.js"],import.meta.url)).default({title:e.parsedUrl.title});return await U(n,e,t),n}function v(r,s){return r?r.find(e=>e.id===s):null}async function U(r,s,e){function t(a,o,c,u){const i={...e,layerId:o,sublayerTitleMode:"service-name"};return a!=null&&(i.url=a),c!=null&&(i.sourceJSON=c),u(i)}const n=s.sublayerConstructorProvider;for(const{id:a,serverUrl:o}of s.layers){const c=v(s.sublayerInfos,a),u=(c&&n?.(c))??s.Constructor,i=t(o,a,c,l=>new u(l));r.add(i)}if(s.tables.length){const a=await p("FeatureLayer");s.tables.forEach(({id:o,serverUrl:c})=>{const u=t(c,o,v(s.tableInfos,o),i=>new a(i));r.tables.add(u)})}}async function $(r,s){let e=b(r);if(e==null&&(e=await C(r,s)),e==null)throw new I("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:t,sublayer:n}=e;let a;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},c=t==="FeatureServer",u=t==="SceneServer",i={parsedUrl:e,Constructor:null,layerId:c||u?n??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":n!=null?a="FeatureLayer":a=await k(r,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const l=await m(r,{customParameters:s}),{tileInfo:y,cacheType:f}=l;a=y?y?.format?.toUpperCase()!=="LERC"||f&&f.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const l=await m(e.url.path,{customParameters:s});if(a="SceneLayer",l){const y=l?.layers;if(l?.layerType==="Voxel")a="VoxelLayer";else if(y?.length){const f=y[0]?.layerType;f!=null&&d[f]!=null&&(a=d[f])}}break}case"FeatureServer":if(a="FeatureLayer",n!=null){const l=await m(r,{customParameters:s});i.sourceJSON=l,l.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}break;default:a=o[t]}if(F[a]&&n==null){const l=await N(r,t,s);if(c&&(i.sublayerInfos=l.layerInfos,i.tableInfos=l.tableInfos),l.layers.length+l.tables.length!==1)i.layers=l.layers,i.tables=l.tables,c&&l.layerInfos?.length&&(i.sublayerConstructorProvider=await x(l.layerInfos));else if(c||u){const y=l.layerInfos?.[0]??l.tableInfos?.[0];i.layerId=l.layers[0]?.id??l.tables[0]?.id,i.sourceJSON=y,c&&y?.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}}return i.Constructor=await p(a),i}async function C(r,s){const e=await m(r,{customParameters:s});let t=null,n=null;const a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",n=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":w(e)?(t="SceneServer",n=e.id):e.hasOwnProperty("layers")&&w(e.layers?.[0])&&(t="SceneServer"),!t)return null;const o=n!=null?h(r):null;return{title:o!=null&&e.name||L(r),serverType:t,sublayer:n,url:{path:o!=null?o.serviceUrl:O(r).path}}}function w(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function N(r,s,e){let t,n,a=!1;switch(s){case"FeatureServer":{const u=await T(r,{customParameters:e});a=!!u.layersJSON,t=u.layersJSON||u.serviceJSON;break}case"SceneServer":{const u=await J(r,e);t=u.serviceInfo,n=u.tableServerUrl;break}default:t=await m(r,{customParameters:e})}const o=t?.layers,c=t?.tables;return{layers:o?.map(u=>({id:u.id})).reverse()||[],tables:c?.map(u=>({serverUrl:n,id:u.id})).reverse()||[],layerInfos:a?o:[],tableInfos:a?c:[]}}async function J(r,s){const e=await m(r,{customParameters:s});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:n}=await P(r),a=await m(n,{customParameters:s}).catch(()=>null);return a&&(e.tables=a.tables),{serviceInfo:e,tableServerUrl:n}}catch{return{serviceInfo:e}}}async function p(r){return(0,g[r])()}async function k(r,s){return(await m(r,{customParameters:s})).tileInfo}async function x(r){const s=[],e=[];if(r.forEach(a=>{const{type:o}=a;o==="Oriented Imagery Layer"?(s.push(o),e.push(p("OrientedImageryLayer"))):(s.push(o),e.push(p("FeatureLayer")))}),!e.length)return;const t=await Promise.all(e),n=new Map;return s.forEach((a,o)=>{n.set(a,t[o])}),a=>n.get(a.type)}export{R as fromUrl};
