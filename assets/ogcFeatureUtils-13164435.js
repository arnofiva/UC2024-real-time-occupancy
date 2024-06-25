import{bm as E,av as g,ax as F,e4 as z,e3 as _,c4 as B,e7 as Q,bh as I,er as U,eb as V,ea as H,ck as C,e2 as X,es as Y}from"./index-c0f955a7.js";import{E as ee,I as ne,N as te}from"./geojson-e5e4b4d2.js";const $=E.getLogger("esri.layers.graphics.sources.ogcfeature"),G="http://www.opengis.net/def/crs/",de=`${G}OGC/1.3/CRS84`;async function fe(n,t,e={},i=5){const{links:r}=n,l=f(r,"items","application/geo+json")||f(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(l==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await F(l.href,{signal:e.signal,query:{limit:i,...e.customParameters,token:e.apiKey},headers:{accept:"application/geo+json"}});ee(u);const o=ne(u,{geometryType:t.geometryType}),d=t.fields||o.fields||[],T=t.hasZ!=null?t.hasZ:o.hasZ,b=o.geometryType,m=t.objectIdField||o.objectIdFieldName||"OBJECTID";let s=t.timeInfo;const j=d.find(({name:a})=>a===m);if(j)j.editable=!1,j.nullable=!1;else{if(!o.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");d.unshift({name:m,alias:m,type:o.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==o.objectIdFieldName){const a=d.find(({name:c})=>c===o.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}d===o.fields&&o.unknownFields.length>0&&$.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}});for(const a of d){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!z.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(s){const a=new _(d);if(s.startTimeField){const c=a.get(s.startTimeField);c?(s.startTimeField=c.name,c.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const c=a.get(s.endTimeField);c?(s.endTimeField=c.name,c.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const c=a.get(s.trackIdField);c?s.trackIdField=c.name:(s.trackIdField=null,$.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||(s.timeReference={timeZoneIANA:B}),s.startTimeField||s.endTimeField||($.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}return{drawingInfo:b?Q(b):null,extent:le(n),geometryType:b,fields:d,hasZ:!!T,objectIdField:m,timeInfo:s}}async function me(n,t={}){const{links:e}=n,i=f(e,"data","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(i==null)throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:r}});return o}async function pe(n,t={}){const{links:e}=n,i=f(e,"conformance","application/json")||f(e,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(i==null)throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:"application/json"},query:{...l,token:r}});return o}async function ge(n,t={}){const{apiKey:e,customParameters:i,signal:r}=t,{data:l}=await F(n,{signal:r,headers:{accept:"application/json"},query:{...i,token:e}});return l}async function ye(n,t={}){const e="application/vnd.oai.openapi+json;version=3.0",i=f(n.links,"service-desc",e);if(i==null)return $.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:u}=t,{data:o}=await F(i.href,{signal:u,headers:{accept:e},query:{...l,token:r}});return o}function we(n){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(n),e=t?.groups;if(!e)return null;const{authority:i,code:r}=e;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(r,10);return Number.isNaN(l)?null:l}default:return null}}async function be(n,t,e){const i=await ie(n,t,e);return U(i)}async function ie(n,t,e){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:u,customParameters:o},spatialReference:d,supportedCrs:T}=n,{links:b}=i,m=f(b,"items","application/geo+json")||f(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(m==null)throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:s,num:j,start:a,timeExtent:c,where:W}=t;if(t.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const P=I.fromJSON(d),h=t.outSpatialReference??P,k=h.isWGS84?null:M(h,T),D=oe(s,T),Z=se(c),K=re(W),A=j??(a!=null&&a!==void 0?10:l),{data:y}=await F(m.href,{...e,query:{...o,...D,crs:k,datetime:Z,query:K,limit:A,startindex:a,token:u},headers:{accept:"application/geo+json"}});let x=!1;y.links&&(x=!!y.links.find(S=>S.rel==="next")),!x&&Number.isInteger(y.numberMatched)&&Number.isInteger(y.numberReturned)&&(x=y.numberReturned<y.numberMatched);const{fields:J,geometryType:N,hasZ:v,objectIdField:q}=r,O=te(y,{geometryType:N,hasZ:v,objectIdField:q});if(!k&&h.isWebMercator){for(const w of O)if(w.geometry!=null&&N!=null){const S=V(w.geometry,N,v,!1);S.spatialReference=I.WGS84,w.geometry=H(C(S,h))}}for(const w of O)w.objectId=w.attributes[q];const L=k||!k&&h.isWebMercator?h.toJSON():X,p=new Y;return p.exceededTransferLimit=x,p.features=O,p.fields=J,p.geometryType=N,p.hasZ=v,p.objectIdFieldName=q,p.spatialReference=L,p}function ae(n){return n!=null&&n.type==="extent"}function M(n,t){const{isWebMercator:e,wkid:i}=n;if(!i)return null;const r=e?t[3857]??t[102100]??t[102113]??t[900913]:t[n.wkid];return r?`${G}${r}`:null}function R(n){if(n==null)return"";const{xmin:t,ymin:e,xmax:i,ymax:r}=n;return`${t},${e},${i},${r}`}function se(n){if(n==null)return null;const{start:t,end:e}=n;return`${t!=null?t.toISOString():".."}/${e!=null?e.toISOString():".."}`}function re(n){return n!=null&&n&&n!=="1=1"?n:null}function oe(n,t){if(!ae(n))return null;const{spatialReference:e}=n;if(!e||e.isWGS84)return{bbox:R(n)};const i=M(e,t);return i!=null?{bbox:R(n),"bbox-crs":i}:e.isWebMercator?{bbox:R(C(n,I.WGS84))}:null}function le(n){const t=n.extent?.spatial;if(!t)return null;const e=t.bbox[0],i=e.length===4,r=e[0],l=e[1],u=i?void 0:e[2];return{xmin:r,ymin:l,xmax:i?e[2]:e[3],ymax:i?e[3]:e[4],zmin:u,zmax:i?void 0:e[5],spatialReference:I.WGS84.toJSON()}}function f(n,t,e){return n.find(i=>i.rel===t&&i.type===e)||n.find(i=>i.rel===t&&!i.type)}export{me as F,pe as I,be as S,ge as T,G as b,de as h,fe as j,ye as k,ie as v,we as x};
