import{bx as $,iZ as O,i_ as P,aB as x,fp as q,i$ as E,j0 as G,j1 as B,ff as A,j2 as H,cM as J,d6 as M}from"./index-ea8d34f0.js";async function U(t,d,p,b,o){const{elevationProvider:l,renderCoordsHelper:r}=t,{elevationInfo:f}=d,{pointsInFeatures:m,spatialReference:u}=b,g=$.fromJSON(u),h=O(f,!0),y=await P(h,g,o);x(o);const c=[],e=new Set,s=new Set,a=new A,n=q(0,0,0,$.WGS84),i=new H,S=J();n.spatialReference=g;const D=t.elevationProvider.spatialReference??t.spatialReference;for(const{objectId:w,points:v}of m){const I=p(w);if(I==null){for(const R of v)c.push(R.z??0);e.add(w);continue}I.isDraped&&s.add(w);const z=I.graphic.geometry;a.setFromElevationInfo(E(z,f)),a.updateFeatureExpressionInfoContext(y,I.graphic,d);for(const{x:R,y:C,z:F}of v)n.x=R,n.y=C,n.z=F??0,await G(n,S,D,0,{signal:o}),B(S,l,a,r,i),c.push(i.z)}return{elevations:c,drapedObjectIds:s,failedObjectIds:e}}async function W(t,d,p){if(t==null||d.candidates.length===0)return j;const b=t.graphics3DGraphicsByObjectID??t.graphics3DGraphics,o=[],l=[],{renderer:r}=t,f=r!=null&&"arcadeRequired"in r&&r.arcadeRequired?M():null,m=async(e,{graphic:s,graphics3DSymbol:a})=>{const n=await f,i=await t.getRenderingInfoAsync(s,r,n,{signal:p});return i==null?[]:a.queryForSnapping(e,g,i,p)},{candidates:u,spatialReference:g}=d;for(let e=0;e<u.length;++e){const s=u[e],{objectId:a}=s,n=typeof a=="number"?b?.get(a):void 0;if(n==null)continue;const{graphics3DSymbol:i}=n;i.symbologySnappingSupported&&(o.push(m(s,n)),l.push(e))}if(o.length===0)return j;const h=await Promise.all(o);x(p);const y=[],c=[];for(let e=0;e<h.length;++e){const s=h[e],a=l[e];for(const n of s)y.push(n),c.push(a)}return{candidates:y,sourceCandidateIndices:c}}const j={candidates:[],sourceCandidateIndices:[]};export{U as m,W as r};