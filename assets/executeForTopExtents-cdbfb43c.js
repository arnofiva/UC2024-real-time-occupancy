import{c0 as r,i4 as e,bw as s}from"./index-ee8e5ecc.js";import{d as x}from"./queryTopFeatures-441fe2ab.js";import"./normalizeUtils-d9b14f9e.js";import"./normalizeUtilsCommon-2270a178.js";import"./query-9198cd9f.js";import"./pbfQueryUtils-c7b4903b.js";import"./pbf-99c055ee.js";async function y(o,i,n){const m=r(o),a=await x(m,e.from(i),{...n}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{y as executeForTopExtents};