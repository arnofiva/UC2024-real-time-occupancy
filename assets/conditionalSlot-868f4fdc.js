import{fu as n}from"./index-a7c18ff0.js";import{c as r}from"./observers-8d3b9a99.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.10.0
 */let t;const i={childList:!0};function f(o){t||(t=r("mutation",s)),t.observe(o.el,i)}function u(o){t.unobserve(o.el)}function s(o){o.forEach(({target:e})=>{n(e)})}export{f as c,u as d};