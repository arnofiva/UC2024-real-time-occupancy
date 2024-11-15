import{ay as b,gF as M,aw as c,gG as U,gH as x,gI as C,gJ as h,bx as P,dJ as D,gK as L,em as V,gL as m,gM as j,gN as O,bw as Y,g6 as W,ga as T}from"./index-ee8e5ecc.js";import{u as X}from"./geojson-543202ab.js";import{o as F,n as g}from"./xmlUtils-444cb4c0.js";const S="xlink:href",d="2.0.0",E="__esri_wfs_id__",q="wfs-layer:getWFSLayerTypeInfo-error",z="wfs-layer:empty-service",$="wfs-layer:feature-type-not-found",J="wfs-layer:geojson-not-supported",_="wfs-layer:kvp-encoding-not-supported",K="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",H="wfs-layer:unknown-field-type",Q="wfs-layer:unsupported-spatial-reference",B="wfs-layer:unsupported-wfs-version";async function he(a,t){const e=Z((await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t?.customParameters},signal:t?.signal})).data);return ae(a,e),e}function Z(a){const t=G(a);fe(t),v(t);const e=t.firstElementChild,n=M(ne(e));return{operations:te(e),get featureTypes(){return Array.from(n())},readFeatureTypes:n}}const ee=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function R(a){for(const t of ee){const e=a.findIndex(n=>n.toLowerCase()===t);if(e>=0)return a[e]}return null}function te(a){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},n=[],o=[];if(F(a,{OperationsMetadata:{Parameter:r=>{if(r.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:s})=>{s&&n.push(s)}}}},Operation:r=>{switch(r.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(S)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&o.push(i)}}}}}}},Constraint:r=>{switch(r.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=R(o)??R(n),!t)throw new c(_,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(J,"WFS service doesn't support GeoJSON output format");return e}function ae(a,t){U(a)&&(x(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=C(t.operations.DescribeFeatureType.url)),x(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=C(t.operations.GetFeature.url)))}function k(a){const t=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function ne(a){return g(a,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return F(t,{Name:o=>{const{name:r,prefix:s}=w(o.textContent);e.typeName=`${s}:${r}`,e.name=r,e.namespacePrefix=s,e.namespaceUri=o.lookupNamespaceURI(s)},Abstract:o=>{e.description=o.textContent},Title:o=>{e.title=o.textContent},WGS84BoundingBox:o=>{e.extent=Y.fromJSON(re(o))},DefaultCRS:o=>{const r=k(o);r&&(e.defaultSpatialReference=r,n.add(r))},OtherCRS:o=>{const r=k(o);r&&n.add(r)}}),e.title||(e.title=e.name),n.add(4326),e.supportedSpatialReferences.push(...n),e}}})}function re(a){let t,e,n,o;for(const r of a.children)switch(r.localName){case"LowerCorner":[t,e]=r.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[n,o]=r.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:t,ymin:e,xmax:n,ymax:o,spatialReference:W}}function oe(a,t,e){return h(a,n=>e?n.name===t&&n.namespaceUri===e:n.typeName===t||n.name===t)}async function Fe(a,t,e,n={}){const{featureType:o,extent:r}=await se(a,t,e,n),{spatialReference:s}=ge(a.operations.GetFeature.url,o,n.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:l,geometryField:y}=await ie(a,o,s,n);return{url:a.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:i,geometryField:y,geometryType:u,objectIdField:l,spatialReference:n.spatialReference??new P({wkid:o.defaultSpatialReference}),extent:r,swapXY:p,wfsCapabilities:a,customParameters:n.customParameters}}async function se(a,t,e,n={}){const o=a.readFeatureTypes(),r=t?oe(o,t,e):o.next().value,{spatialReference:s=new P({wkid:r?.defaultSpatialReference})}=n;if(r==null)throw t?new c($,`The type '${t}' could not be found in the service`):new c(z,"The service is empty");let i=r.extent;if(i&&!D(i.spatialReference,s))try{await L(i.spatialReference,s,void 0,n),i=V(i,s)}catch{throw new c(Q,"Projection not supported")}return{extent:i,spatialReference:s,featureType:r}}async function ie(a,t,e,n={}){const{typeName:o}=t,[r,s]=await Promise.allSettled([le(a.operations.DescribeFeatureType.url,o,n),pe(a,o,e,n)]),i=f=>new c(q,`An error occurred while getting info about the feature type '${o}'`,{error:f});if(r.status==="rejected")throw i(r.reason);if(s.status==="rejected")throw i(s.reason);const{fields:u,errors:p}=r.value??{},l=r.value?.geometryType||s.value?.geometryType,y=s.value?.swapXY??!1;if(l==null)throw new c(A,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:l,fields:u,errors:p});return{...ue(u??[]),geometryType:l,swapXY:y}}function ue(a){const t=a.find(n=>n.type==="geometry");let e=a.find(n=>n.type==="oid");return a=a.filter(n=>n.type!=="geometry"),e||(e=new m({name:E,type:"oid",alias:E}),a.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:a}}async function pe(a,t,e,n={}){let o,r=!1;const[s,i]=await Promise.all([de(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,{...n,count:1}),b(a.operations.GetFeature.url,{responseType:"text",query:N(t,e,void 0,{...n,count:1}),signal:n?.signal})]),u=s.type==="FeatureCollection"&&s.features[0]?.geometry;if(u){let p;switch(o=j.fromJSON(X(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const l=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(l){const y=p[0].toFixed(3),f=p[1].toFixed(3),I=parseFloat(l[1]).toFixed(3);y===parseFloat(l[2]).toFixed(3)&&f===I&&(r=!0)}}return{geometryType:o,swapXY:r}}async function le(a,t,e){return ce(t,(await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,TYPENAMES:t,...e?.customParameters},signal:e?.signal})).data)}function ce(a,t){const{name:e}=w(a),n=G(t);v(n);const o=h(g(n.firstElementChild,{element:r=>r}),r=>r.getAttribute("name")===e);if(o!=null){const r=o.getAttribute("type"),s=r?h(g(n.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(r).name):h(g(o,{complexType:i=>i}),()=>!0);if(s)return me(s)}throw new c($,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(n)})}const ye=new Set(["objectid","fid"]);function me(a){const t=[],e=[];let n;const o=g(a,{complexContent:{extension:{sequence:{element:r=>r}}}});for(const r of o){const s=r.getAttribute("name");if(!s)continue;let i,u;if(r.hasAttribute("type")?i=w(r.getAttribute("type")).name:F(r,{simpleType:{restriction:y=>(i=w(y.getAttribute("base")).name,{maxLength:f=>{u=+f.getAttribute("value")}})}}),!i)continue;const p=r.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new m({name:s,alias:s,type:"integer",nullable:p,length:T("integer")}));break;case"float":case"double":case"decimal":e.push(new m({name:s,alias:s,type:"double",nullable:p,length:T("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new m({name:s,alias:s,type:"string",nullable:p,length:u??T("string")}));break;case"datetime":case"date":e.push(new m({name:s,alias:s,type:"date",nullable:p,length:u??T("date")}));break;case"pointpropertytype":n="point",l=!0;break;case"multipointpropertytype":n="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":n="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":n="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new c(A,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new c(H,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(a)}))}l&&e.push(new m({name:s,alias:s,type:"geometry",nullable:p}))}for(const r of e)if(r.type==="integer"&&!r.nullable&&ye.has(r.name.toLowerCase())){r.type="oid";break}return{geometryType:n,fields:e,errors:t}}async function de(a,t,e,n,o){let{data:r}=await b(a,{responseType:"text",query:N(t,e,n,o),signal:o?.signal});r=r.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(r)}catch(s){throw new c(K,"Error while parsing the response",{response:r,error:s})}}function N(a,t,e,n){const o=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+o,STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}async function Se(a,t,e){const n=await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:t,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(n.data);if(o?.groups)return+o.groups.numberMatched}function G(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function w(a){const[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function fe(a){const t=a.firstElementChild?.getAttribute("version");if(t&&t!==d)throw new c(B,`Unsupported WFS version ${t}. Supported version: ${d}`)}function v(a){let t="",e="";if(F(a.firstElementChild,{Exception:n=>(t=n.getAttribute("exceptionCode"),{ExceptionText:o=>{e=o.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}function ge(a,t,e){const n={wkid:t.defaultSpatialReference},o=e?.wkid!=null?{wkid:e.wkid}:n;return{spatialReference:o,getFeatureSpatialReference:O(a)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}export{de as K,E as S,Fe as W,oe as Y,Se as e,ge as o,he as v,ue as z};