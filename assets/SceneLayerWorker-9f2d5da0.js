import{aA as I,i9 as q,bh as D,kf as W,kg as K,kh as Q,ki as X,kj as Z}from"./index-6a39f5fd.js";import{n as A}from"./I3SNode-eb9d3b3a.js";var P,$;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(P||(P={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}($||($={}));function ee(){return v||(v=new Promise(e=>I(()=>import("./i3s-557e5f3a.js"),["./i3s-557e5f3a.js","./index-6a39f5fd.js","./index-c3d91843.css"],import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:te,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),v}function te(e){return q(`esri/libs/i3s/${e}`)}let v;async function re(e){o=await g();const t=[e.geometryBuffer];return{result:C(o,e,t),transferList:t}}async function ne(e){o=await g();const t=[e.geometryBuffer],{geometryBuffer:r}=e,s=r.byteLength,i=o._malloc(s),d=new Uint8Array(o.HEAPU8.buffer,i,s);d.set(new Uint8Array(r));const f=o.dracoDecompressPointCloudData(i,d.byteLength);if(o._free(i),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const c=f.featureIds?.length>0?f.featureIds.slice():null,a=f.positions.slice();return c&&t.push(c.buffer),t.push(a.buffer),{result:{positions:a,featureIds:c},transferList:t}}async function oe(e){await g(),V(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ie(e){await g(),k(e)}async function se(e){o=await g(),o.setLegacySchema(e.context,e.jsonSchema)}async function ae(e){const{localMatrix:t,origin:r,positions:s,vertexSpace:i,localMode:d}=e,f=D.fromJSON(e.inSpatialReference),c=D.fromJSON(e.outSpatialReference);let a;if(i.type==="georeferenced"){const[{projectBuffer:l},{initializeProjection:E}]=await Promise.all([I(()=>import("./index-6a39f5fd.js").then(m=>m.xL),["./index-6a39f5fd.js","./index-c3d91843.css"],import.meta.url),I(()=>import("./index-6a39f5fd.js").then(m=>m.xM),["./index-6a39f5fd.js","./index-c3d91843.css"],import.meta.url)]);await E(f,c),a=new Float64Array(s.length),l(s,f,0,a,c,0,a.length/3)}else{const l=i.type==="georeferencedRelative"?W.fromJSON(i):K.fromJSON(i),{project:E}=await I(()=>import("./index-6a39f5fd.js").then(m=>m.xP),["./index-6a39f5fd.js","./index-c3d91843.css"],import.meta.url);a=Q(E({positions:s,transform:t?{localMatrix:t}:void 0,vertexSpace:l,inSpatialReference:f,outSpatialReference:c,localMode:d}))}const w=a.length,[S,O,M]=r;for(let l=0;l<w;l+=3)a[l]-=S,a[l+1]-=O,a[l+2]-=M;return{result:{projected:a,original:s},transferList:[a.buffer,s.buffer]}}async function fe({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return X(r,t,e),Z(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function le(e){Y(e)}let L,o;function k(e){if(!o)return;const t=e.modifications,r=o._malloc(8*t.length),s=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)s[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function C(e,t,r){const{context:s,localOrigin:i,globalTrafo:d,mbs:f,obb:c,elevationOffset:a,geometryBuffer:w,geometryDescriptor:S,indexToVertexProjector:O,vertexToRenderProjector:M}=t,l=e._malloc(w.byteLength),E=33,m=e._malloc(E*Float64Array.BYTES_PER_ELEMENT),x=new Uint8Array(e.HEAPU8.buffer,l,w.byteLength);x.set(new Uint8Array(w));const u=new Float64Array(e.HEAPU8.buffer,m,E);_(u,i);let y=u.byteOffset+3*u.BYTES_PER_ELEMENT,b=new Float64Array(u.buffer,y);_(b,d),y+=16*u.BYTES_PER_ELEMENT,b=new Float64Array(u.buffer,y),_(b,f),y+=4*u.BYTES_PER_ELEMENT,c!=null&&(b=new Float64Array(u.buffer,y),_(b,c.center),y+=3*u.BYTES_PER_ELEMENT,b=new Float64Array(u.buffer,y),_(b,c.halfSize),y+=3*u.BYTES_PER_ELEMENT,b=new Float64Array(u.buffer,y),_(b,c.quaternion));const F=S,z={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(p=>p.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(p=>p.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(p=>p.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(p=>p.name==="uvRegion")),featureIndex:F.featureIndex},n=e.process(s,!!t.obb,l,x.byteLength,F,z,m,a,O,M,t.normalReferenceFrame);if(e._free(m),e._free(l),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const R=n.componentOffsets.length>0?n.componentOffsets.slice():null,T=n.featureIds.length>0?n.featureIds.slice():null,H=n.anchorIds.length>0?Array.from(n.anchorIds):null,J=n.anchors.length>0?Array.from(n.anchors):null,U=n.interleavedVertedData.slice().buffer,N=n.indicesType===P.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),B=n.positions.slice(),j=n.positionIndicesType===P.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),G={layout:t.layouts[0],interleavedVertexData:U,indices:N,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:B,indices:j}};return T&&r.push(T.buffer),R&&r.push(R.buffer),r.push(U),r.push(N.buffer),r.push(B.buffer),r.push(j.buffer),{componentOffsets:R,featureIds:T,anchorIds:H,anchors:J,transformedGeometry:G,obb:n.obb}}function ce(e){return e===0?A.Unmodified:e===1?A.PotentiallyModified:e===2?A.Culled:A.Unknown}function V(e){if(!o)return;const{context:t,buffer:r}=e,s=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(o.HEAPU8.buffer,s,i),f=new Float64Array(r);d.set(f),o.filterOBBs(t,s,i),f.set(d),o._free(s)}function Y(e){o&&o.destroy(e)===0&&(o=null)}function _(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function ue(){o||await g()}function g(){return o?Promise.resolve(o):(L||(L=ee().then(e=>(o=e,L=null,o))),L)}const de={transform:(e,t)=>o&&C(o,e,t),destroy:Y},be=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:le,dracoDecompressPointCloudData:ne,filterObbsForModifications:oe,filterObbsForModificationsSync:V,initialize:ue,interpretObbModificationResults:ce,process:re,project:ae,setLegacySchema:se,setModifications:ie,setModificationsSync:k,test:de,transformNormals:fe},Symbol.toStringTag,{value:"Module"}));export{ce as A,k as E,ue as I,V as L,be as S,$ as e};
