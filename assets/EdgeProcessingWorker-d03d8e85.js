import{u as r}from"./workerHelper-64b9eaa8.js";import{fZ as l,f_ as c,f$ as u,g0 as d,g1 as f,g2 as g}from"./index-ee8e5ecc.js";class I{async extract(e){const t=o(e),n=l(t),i=[t.data.buffer];return{result:p(n,i),transferList:i}}async extractComponentsEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=u(n,D),a=[];return{result:r(i.regular.instancesData,a),transferList:a}}async extractEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=u(n,m),a=[];return{result:r(i.regular.instancesData,a),transferList:a}}}function o(s){return{data:d.createView(s.dataBuffer),indices:s.indicesType==="Uint32Array"?new Uint32Array(s.indices):s.indicesType==="Uint16Array"?new Uint16Array(s.indices):s.indices,indicesLength:s.indicesLength,writerSettings:s.writerSettings,skipDeduplicate:s.skipDeduplicate}}function p(s,e){return e.push(s.regular.lodInfo.lengths.buffer),e.push(s.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:r(s.regular.instancesData,e),lodInfo:{lengths:s.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:r(s.silhouette.instancesData,e),lodInfo:{lengths:s.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:s.averageEdgeLength}}class h{allocate(e){return f.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}}class L{allocate(e){return g.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}}const m=new h,D=new L;export{I as default};