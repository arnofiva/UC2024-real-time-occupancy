import{ft as c,fu as i}from"./index-6a39f5fd.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const n=new Set;let e;const s={childList:!0};function f(o){e||(e=c("mutation",r)),e.observe(o.el,s)}function d(o){n.delete(o.el),r(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,s)}function r(o){o.forEach(({target:t})=>{i(t)})}export{f as c,d};
