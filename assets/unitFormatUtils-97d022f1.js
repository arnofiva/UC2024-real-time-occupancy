import{bE as g,bF as c,bG as $,bH as p,bI as o,bJ as F,bK as x,bL as y,bM as d,bN as h,bO as w,bP as I,bQ as O}from"./index-ab96db07.js";function B(r,t,n){return r.units[t][n]}function a(r,t,n,e=2,s="abbr"){return`${c(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:t>0?"never":"exceptZero"})} ${B(r,n,s)}`}function m(r,t,n,e=2,s="abbr"){return`${c(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:"exceptZero"})} ${B(r,n,s)}`}function Z(r,t,n,e=2,s="abbr"){const i=p(t,n);return a(r,o(t,n,i),i,e,s)}function E(r,t,n,e=2,s="abbr"){const i=p(t,n);return m(r,o(t,n,i),i,e,s)}function K(r,t,n,e=2,s="abbr"){const i=F(t,n);return a(r,o(t,n,i),i,e,s)}function v(r,t,n,e=2,s="abbr"){const i=F(t,n);return m(r,o(t,n,i),i,e,s)}function z(r,t,n,e=2,s="abbr"){const i=x(t,n);return a(r,o(t,n,i),i,e,s)}function J(r,t,n,e=2,s="abbr"){const i=x(t,n);return m(r,o(t,n,i),i,e,s)}function L(r,t,n,e=2,s="abbr"){const i=y(t,n);return a(r,o(t,n,i),i,e,s)}function N(r,t,n,e=2,s="abbr"){const i=y(t,n);return m(r,o(t,n,i),i,e,s)}function j(r,t,n,e=2,s="abbr"){const i=I(t,n);return a(r,o(t,n,i),i,e,s)}function G(r,t,n,e=2,s="abbr"){const i=O(t,n);return a(r,o(t,n,i),i,e,s)}const S=(r,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:r>0?"never":"exceptZero"});function U(r,t,n,e,s,i=w,u=!0){let b=i.normalize(h(o(r,t,"degrees"),n,e),0,u);const f=S(b,s??2);return b=M(b,f),c(b,f)}function Y(r,t,n,e,s){n!==e&&(r=-r);const i={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:s=s??2,minimumFractionDigits:s,signDisplay:"exceptZero"};let u=o(r,t,"degrees")%360;return u=M(u,i),c(u,i)}const l=new Map;function M(r,t){const n=JSON.stringify(t);let e=l.get(n);return e||(e=new Intl.NumberFormat("en-US",t),l.set(n,e)),/^[-+]?360\.?0*°?$/.test(e.format(r))?0:r}const D=["B","kB","MB","GB","TB"];function k(r,t){let n=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));n=d(n,0,D.length-1);const e=c(t/g.KILOBYTES**n,{maximumFractionDigits:2});return $(r.units.bytes[D[n]],{fileSize:e})}export{j as $,L as B,Z as D,v as F,N as M,k as T,Y as Z,B as b,z as d,a as g,J as h,G as j,m as p,U as w,E as x,K as y};
