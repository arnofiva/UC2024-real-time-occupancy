import{gi as a,gj as o,gk as g,gl as l,gm as m,gn as b,go as p,gp as y,gq as B,gr as v}from"./index-6a39f5fd.js";function h(n,t){return{type:a(t),value:n,unit:t}}function D(n,t){return{type:a(t),value:n,unit:t}}function T(n,t){return{type:a(t),value:n,unit:t}}function c(n,t,e="arithmetic"){return{type:a(t),value:n,unit:t,rotationType:e}}function x(n,t){const e=$(n,t);return n.type==="angle"?c(e,t,n.rotationType):h(e,t)}function $(n,t){return o(n.value,n.unit,t)}D(0,"meters");T(0,"square-meters");c(0,"radians");c(0,"degrees");function M(n,t,e){return n.units[t][e]}function s(n,t,e,r=2,u="abbr"){return`${l(t,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:t>0?"never":"exceptZero"})} ${M(n,e,u)}`}function F(n,t,e,r=2,u="abbr"){const i=b(t,e);return s(n,o(t,e,i),i,r,u)}function E(n,t,e,r=2,u="abbr"){const i=p(t,e);return s(n,o(t,e,i),i,r,u)}function I(n,t,e,r=2,u="abbr"){const i=y(t,e);return s(n,o(t,e,i),i,r,u)}function K(n,t,e,r=2,u="abbr"){const i=B(t,e);return s(n,o(t,e,i),i,r,u)}const f=["B","kB","MB","GB","TB"];function O(n,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));e=v(e,0,f.length-1);const r=l(t/g.KILOBYTES**e,{maximumFractionDigits:2});return m(n.units.bytes[f[e]],{fileSize:r})}export{K as B,F as D,O,I as d,x as f,s as g,D as i,T as l,h as r,E as y};
