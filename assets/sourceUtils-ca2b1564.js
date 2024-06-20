import{en as d,eo as m,ek as p,ep as h,bY as y,eq as g,er as a,aA as w}from"./index-6a39f5fd.js";import{n as I}from"./date-430969b3.js";class _{constructor(){this.code=null,this.description=null}}class b{constructor(e){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function c(n){return new b(n)}class q{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function v(n){return new q(n)}const u=new Set;function F(n,e,r,f=!1){u.clear();for(const i in r){const t=n.get(i);if(!t)continue;const o=P(t,r[i]);if(u.add(t.name),t&&(f||t.editable)){const l=d(t,o);if(l)return c(m(l,t,o));e[t.name]=o}}for(const i of n?.requiredFields??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,e){let r=e;return p(n)&&typeof e=="string"?r=parseFloat(e):h(n)&&e!=null&&typeof e!="string"?r=String(e):y(n)&&typeof e=="string"&&(r=I(e)),g(r)}let s;function G(n,e){if(!n||!a(e))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(e,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-1fde246f.js"),["./geometryEngineJSON-1fde246f.js","./index-6a39f5fd.js","./index-c3d91843.css","./geometryEngineJSON-ea9f7bcc.js","./json-48e3ea08.js"],import.meta.url)),s}async function S(n,e){!a(n)||e!=="esriGeometryPolygon"&&e!=="esriGeometryPolyline"||await j()}export{S as I,v as d,c as f,F as p,G as w};
