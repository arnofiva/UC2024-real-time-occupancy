import{p as d,r as a,a as i,d as g}from"./SnappingManagerPool-45ad664b.js";import{r as c}from"./VertexSnappingCandidate-9321ff67.js";function t({x:e,y:r,z:n}){return g(e,r,n??0)}function s(e,r){switch(e.type){case"edge":return e.draped?new a({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,getGroundElevation:r}):new i({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new c({targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1})}}function l(e,r){return e!=null&&e.type==="3d"?(n,o)=>e.elevationProvider.getElevation(n,o,0,r,"ground"):()=>null}export{l as i,s as o};
