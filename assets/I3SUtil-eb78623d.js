import{cR as j,dg as B,ix as H,cY as A,cM as w,dI as U,iy as J,gz as V,ay as X,iz as Y,iA as Z,aT as Q,iB as ee,aw as b,iC as te,bk as ne,bx as G,aG as re,df as ae,iD as oe,iE as O,iF as se,cX as ie,dL as F,ef as le,eb as L,dA as I,iG as N,ij as ce,iH as ue,iI as fe,eH as he}from"./index-ea8d34f0.js";import{I as de}from"./I3SBinaryReader-500a0002.js";function pe(e,t,n,r,a){const o=n==="east-north-up"?j(e):ye(e,t,r),s=A();return B(r,o,s,a),s}const K=1,W=5-K;function ye(e,t,n){const r=w(),a=e[3],o=2**(Math.ceil(Math.log(a)*Math.LOG2E/W)*W+K);if(n.isGeographic){const c=o/H(n).radius*180/Math.PI,l=Math.round(e[1]/c),d=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(d)-c/2)/180*Math.PI),p=Math.round(e[0]/f)*f;r[0]=p,r[1]=d}else{const c=Math.round(e[0]/o),l=Math.round(e[1]/o);r[0]=c*o,r[1]=l*o}const s=e[2]+t,i=Math.round(s/o);return r[2]=i*o,r}function P(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function We(e){if(Q("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const n of t.geometryBuffers)if(n.compressedAttributes?.encoding==="draco")return!0;return!1}function _e(e,t,n,r){n.traverse(t,a=>{const o=a.serviceMbsInIndexSR;return(o!=null&&me(e,o))!==S.OUTSIDE&&(r(a),!0)})}function qe(e,t,n){let r=0,a=0;for(let o=0;o<t.length&&r<e.length;o++)e[r]===t[o]&&(n(o)&&(e[a]=e[r],a++),r++);e.length=a}function Ae(e,t,n){let r=0,a=0;for(;r<n.length;)ee(e,n[r])>=0===t&&(n[a]=n[r],a++),r++;n.length=a}const T=U();function Ge(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return T[0]=(e[0]-t.position[0])/t.rotationScale[0],T[1]=(e[1]-t.position[1])/t.rotationScale[4],T[2]=(e[2]-t.position[0])/t.rotationScale[0],T[3]=(e[3]-t.position[1])/t.rotationScale[4],T}var S;function me(e,t){const n=t[0],r=t[1],a=t[3],o=e[0]-n,s=n-e[2],i=e[1]-r,c=r-e[3],l=Math.max(o,s,0),d=Math.max(i,c,0),f=l*l+d*d;return f>a*a?S.OUTSIDE:f>0?S.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>a?S.INSIDE:S.INTERSECTS_CENTER_INSIDE}function ge(e,t,n){const r=[],a=n?.missingFields,o=n?.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const l of t)if(i===l.name.toLowerCase()){r.push(l.name),c=!0,o&&o.push(s);break}!c&&a&&a.push(s)}return r}async function Ke(e,t,n,r,a,o){if(t.length===0)return[];const s=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await we(e.associatedLayer,t,n,r,o)}catch(i){if(e.associatedLayer.loaded)throw i}if(s){const i=be(t,n,a);if(i==null)throw new b("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(i.map(l=>Se(c,s,l.node,l.indices,r,e.apiKey,e.customParameters,o).then(d=>{for(let f=0;f<l.graphics.length;f++){const p=l.graphics[f],m=d[f];if(p.attributes)for(const u in p.attributes)u in m||(m[u]=p.attributes[u]);p.attributes=m}return l.graphics})))).flat()}throw new b("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function be(e,t,n){const r=new Map,a=[],o=n();for(const s of e){const i=s.attributes[t];for(let c=0;c<o.length;c++){const l=o[c],d=l.featureIds.indexOf(i);if(d>=0){let f=r.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},a.push(f),r.set(l.node,f)),f.indices.push(d),f.graphics.push(s);for(let p=c;p>0;p--)o[p]=o[p-1];o[0]=l;break}}}return a}async function we(e,t,n,r,a){t.sort((l,d)=>l.attributes[n]-d.attributes[n]);const o=t.map(l=>l.attributes[n]),s=[],i=ge(r,e.fields,{originalFields:s}),c=await z(e,o,i,a);for(let l=0;l<t.length;l++){const d=t[l],f=c[l],p={};if(d.attributes)for(const m in d.attributes)p[m]=d.attributes[m];for(let m=0;m<s.length;m++)p[s[m]]=f[i[m]];d.attributes=p}return t}function z(e,t,n,r){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const s=te(t,a);return Promise.all(s.map(i=>z(e,i,n,r))).then(i=>i.flat())}const o=new ne({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(o,r).then(s=>{if(s&&s.features&&s.features.length===t.length)return s.features.map(i=>i.attributes);throw new b("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function Se(e,t,n,r,a,o,s,i){return Ie(e,t,n.resources.attributes,r,a,o,s,i)}async function Ie(e,t,n,r,a,o,s,i){const c=[];for(const f of t)if(f&&a.includes(f.name)){const p=`${e}/nodes/${n}/attributes/${f.key}/0`;c.push({url:p,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>X(f.url,{responseType:"array-buffer",query:{...s,token:o},signal:i?.signal}).then(p=>de(f.storageInfo,p.data)))),d=[];for(const f of r){const p={};for(let m=0;m<l.length;m++){const u=l[m];if(u.status==="fulfilled"){const y=u.value;p[c[m].storageInfo.name]=Me(y,f)}}d.push(p)}return d}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(S||(S={}));const Te=-32768,Ee=-(2**31);function Me(e,t){if(!e)return null;const n=e[t];return Y(e)?n===Te?null:n:Z(e)?n===Ee?null:n:n!=n?null:n}function ve(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=n===void 0?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new b("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new b("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function xe(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=n===void 0?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new b("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new b("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=n?new G(P(n)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function Pe(e,t){return t==null?"@null":t===ae(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function D(e,t,n){if(!re(e,t))throw new b("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Re(e,t))throw new b("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function ze(e,t,n){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!n.isEmpty||e.associatedLayer?.url!==t.associatedLayer?.url)throw new b("layerview:recycle-failed")}function Re(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function $e(e,t,n){const r=ve(e),a=xe(e);D(r,t,n),D(a,t,n)}function Ce(e){return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&e.vertexAttributes?.position!=null}function je(e){if(e.store?.defaultGeometrySchema==null||!Ce(e.store.defaultGeometrySchema))throw new b("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Be(e,t){$e(e,t.spatialReference,t.viewingMode)}function Ne(e){return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&e.vertexAttributes?.position!=null}function He(e){if(e.store?.defaultGeometrySchema==null||!Ne(e.store.defaultGeometrySchema))throw new b("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Je(e,t){D(e.spatialReference,t.spatialReference,t.viewingMode)}function ke(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function De(e){return e.type==="mesh-3d"}function Ve(e){if(e==null||!ke(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const n of t){if(!De(n)||n.symbolLayers.length===0)return!0;for(const r of n.symbolLayers.items)if(r.type!=="fill"||r.material?.color==null||r.material.colorMixMode!=="replace")return!0}return!1}const Xe=J({color:[0,0,0,0],opacity:0});class Ue{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Ye(e){const t=new Ue;let n=!1,r=!1;for(const a of e.symbolLayers.items)if(a.type==="fill"&&a.enabled){const o=a.material,s=a.edges;if(o!=null&&!n){const i=o.color,c=oe(o.colorMixMode);t.material=i!=null?{color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:O.Multiply},t.castShadows=a.castShadows,n=!0}s==null||r||(t.edgeMaterial=se(s,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:O.Multiply}),t}function Ze(e,t){return(0|e)+(0|t)|0}function Qe(e,t,n,r,a,o,s){if(!o||o.length===0||t==null||!e.serviceMbsInIndexSR)return null;const i=pe(e.serviceMbsInIndexSR,a,"none",n,t);ie(x,i);let c=null;const l=()=>{if(!c)if(c=Oe,F(v),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(_,n,t,a,s),_.getCorners(c);for(const u of c)I(u,u,x),N(v,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const y=u[3];L(fe(u),n,h,t),I(h,h,x),h[2]+=a;for(let g=0;g<8;++g){const E=1&g?y:-y,R=2&g?y:-y,$=4&g?y:-y,M=c[g];he(M,[h[0]+E,h[1]+R,h[2]+$]),N(v,M)}}};let d=1/0,f=-1/0;const p=u=>{if(u.type!=="replace")return;const y=u.geometry;if(!y?.hasZ)return;F(k);const g=y.spatialReference||r,E=y.rings.reduce((R,$)=>$.reduce((M,C)=>(le(h,C[0],C[1],C[2]),L(h,g,h,t),I(h,h,x),N(k,h),Math.min(h[2],M)),R),1/0);l(),ce(v,k)&&(d=Math.min(d,E),f=Math.max(f,E))};if(o.forEach(u=>p(u)),d===1/0)return null;const m=(u,y,g)=>{I(h,g,i),u[y]=h[0],u[y+1]=h[1],u[y+2]=h[2],y+=24,g[2]=d,I(h,g,i),u[y]=h[0],u[y+1]=h[1],u[y+2]=h[2],y+=24,g[2]=f,I(h,g,i),u[y]=h[0],u[y+1]=h[1],u[y+2]=h[2]};for(let u=0;u<8;++u)m(q.data,3*u,c[u]);return ue(q)}function et(e){return e[3]>=0}function tt(e){e!=null&&(e[3]=-1)}const Oe=[w(),w(),w(),w(),w(),w(),w(),w()],k=U(),v=U(),_=new V,h=w(),q={data:new Array(72),size:3,exclusive:!0,stride:3},x=A();export{Ie as $,Ke as A,qe as D,S as F,xe as H,Pe as J,ge as L,We as N,me as O,Me as Q,Ae as W,D as X,ze as Y,ve as Z,He as a,pe as b,Ze as d,Xe as f,tt as g,Qe as h,_e as k,Ye as m,Be as n,je as o,Ge as q,Je as s,$e as t,Ve as u,et as y};