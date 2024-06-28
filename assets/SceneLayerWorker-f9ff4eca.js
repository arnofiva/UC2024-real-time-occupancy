import{aA as S,gO as G,bx as D,g5 as Q,lN as W,lO as q,du as K,lP as X,lQ as Z}from"./index-ab96db07.js";import{r as L}from"./I3SNode-a6acb4a5.js";var M,B;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(M||(M={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(B||(B={}));function ee(){return x||(x=new Promise(e=>S(()=>import("./i3s-b0095c4b.js"),["./i3s-b0095c4b.js","./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:te,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),x}function te(e){return G(`esri/libs/i3s/${e}`)}let x;async function re(e){n=await h();const t=[e.geometryBuffer];return{result:z(n,e,t),transferList:t}}async function oe(e){n=await h();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=n._malloc(f),u=new Uint8Array(n.HEAPU8.buffer,i,f);u.set(new Uint8Array(r));const l=n.dracoDecompressPointCloudData(i,u.byteLength);if(n._free(i),l.error.length>0)throw new Error(`i3s.wasm: ${l.error}`);const c=l.featureIds?.length>0?l.featureIds.slice():null,a=l.positions.slice();return c&&t.push(c.buffer),t.push(a.buffer),{result:{positions:a,featureIds:c},transferList:t}}async function ne(e){await h(),C(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ie(e){await h(),$(e)}async function se(e){n=await h(),n.setLegacySchema(e.context,e.jsonSchema)}async function ae(e){const{localMatrix:t,origin:r,positions:f,vertexSpace:i,localMode:u}=e,l=D.fromJSON(e.inSpatialReference),c=D.fromJSON(e.outSpatialReference);let a;const[{projectBuffer:E},{initializeProjection:T}]=await Promise.all([S(()=>import("./index-ab96db07.js").then(s=>s.zb),["./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url),S(()=>import("./index-ab96db07.js").then(s=>s.zc),["./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url)]);await T(l,c);const p=[0,0,0];if(!E(r,l,0,p,c,0,1))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(a=new Float64Array(f.length),!E(f,l,0,a,c,0,a.length/3))throw new Error("Failed to project")}else{const s=i.type==="georeferenced"?Q.fromJSON(i):W.fromJSON(i),{project:m}=await S(()=>import("./index-ab96db07.js").then(I=>I.ze),["./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url),d=m({positions:f,transform:t?{localMatrix:t}:void 0,vertexSpace:s,inSpatialReference:l,outSpatialReference:c,localMode:u});if(!d)throw new Error("Failed to project");a=q(d)}const g=a.length,[w,_,A]=p;for(let s=0;s<g;s+=3)a[s]-=w,a[s+1]-=_,a[s+2]-=A;return{result:{projected:a,original:f,projectedOrigin:p},transferList:[a.buffer,f.buffer]}}async function fe({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return K(r,t,e),X(e)&&Z(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function le(e){V(e)}let O,n;function $(e){if(!n)return;const t=e.modifications,r=n._malloc(8*t.length),f=new Float64Array(n.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];n.setModifications(e.context,r,t.length,e.isGeodetic),n._free(r)}function z(e,t,r){const{context:f,globalTrafo:i,mbs:u,obbData:l,elevationOffset:c,geometryBuffer:a,geometryDescriptor:E,indexToVertexProjector:T,vertexToRenderProjector:p}=t,g=e._malloc(a.byteLength),w=33,_=e._malloc(w*Float64Array.BYTES_PER_ELEMENT),A=new Uint8Array(e.HEAPU8.buffer,g,a.byteLength);A.set(new Uint8Array(a));const s=new Float64Array(e.HEAPU8.buffer,_,w);P(s,[NaN,NaN,NaN]);let m=s.byteOffset+3*s.BYTES_PER_ELEMENT,d=new Float64Array(s.buffer,m);P(d,i),m+=16*s.BYTES_PER_ELEMENT,d=new Float64Array(s.buffer,m),P(d,u),m+=4*s.BYTES_PER_ELEMENT,l&&(d=new Float64Array(s.buffer,m),P(d,l));const I=E,H={isDraco:!1,isLegacy:!1,color:t.layouts.some(y=>y.some(b=>b.name==="color")),normal:t.needNormals&&t.layouts.some(y=>y.some(b=>b.name==="normalCompressed")),uv0:t.layouts.some(y=>y.some(b=>b.name==="uv0")),uvRegion:t.layouts.some(y=>y.some(b=>b.name==="uvRegion")),featureIndex:I.featureIndex},o=e.process(f,!!t.obbData,g,A.byteLength,I,H,_,c,T,p,t.normalReferenceFrame);if(e._free(_),e._free(g),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const N=o.componentOffsets.length>0?o.componentOffsets.slice():null,R=o.featureIds.length>0?o.featureIds.slice():null,Y=o.anchorIds.length>0?Array.from(o.anchorIds):null,J=o.anchors.length>0?Array.from(o.anchors):null,F=o.interleavedVertedData.slice().buffer,v=o.indicesType===M.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),j=o.positions.slice(),U=o.positionIndicesType===M.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),k={layout:t.layouts[0],interleavedVertexData:F,indices:v,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:j,indices:U}};return R&&r.push(R.buffer),N&&r.push(N.buffer),r.push(F),r.push(v.buffer),r.push(j.buffer),r.push(U.buffer),{componentOffsets:N,featureIds:R,anchorIds:Y,anchors:J,transformedGeometry:k,obb:o.obb,globalTrafo:i}}function ce(e){return e===0?L.Unmodified:e===1?L.PotentiallyModified:e===2?L.Culled:L.Unknown}function C(e){if(!n)return;const{context:t,buffer:r}=e,f=n._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(n.HEAPU8.buffer,f,i),l=new Float64Array(r);u.set(l),n.filterOBBs(t,f,i),l.set(u),n._free(f)}function V(e){n&&n.destroy(e)===0&&(n=null)}function P(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function ue(){n||await h()}function h(){return n?Promise.resolve(n):(O||(O=ee().then(e=>(n=e,O=null,n))),O)}const de={transform:(e,t)=>n&&z(n,e,t),destroy:V},be=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:le,dracoDecompressPointCloudData:oe,filterObbsForModifications:ne,filterObbsForModificationsSync:C,initialize:ue,interpretObbModificationResults:ce,process:re,project:ae,setLegacySchema:se,setModifications:ie,setModificationsSync:$,test:de,transformNormals:fe},Symbol.toStringTag,{value:"Module"}));export{ce as A,$ as E,C as L,be as S,ue as _,B as e};
