import{c0 as m,i4 as p}from"./index-ab96db07.js";import{c as a}from"./queryTopFeatures-9e9f1efd.js";import"./normalizeUtils-050de560.js";import"./normalizeUtilsCommon-6ab3a73c.js";import"./query-f1663770.js";import"./pbfQueryUtils-ffe030d9.js";import"./pbf-b4a86cc9.js";async function d(o,t,r){const i=m(o);return(await a(i,p.from(t),{...r})).data.count}export{d as executeForTopCount};