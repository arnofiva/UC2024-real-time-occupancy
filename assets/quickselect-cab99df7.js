import{bV as V}from"./index-6a39f5fd.js";var g,b,d,m={exports:{}};m.exports,g=m,b=function(){function q(t,r,n,o,i){p(t,r,n||0,o||t.length-1,i||s)}function p(t,r,n,o,i){for(;o>n;){if(o-n>600){var f=o-n+1,l=r-n+1,u=Math.log(f),v=.5*Math.exp(2*u/3),x=.5*Math.sqrt(u*v*(f-v)/f)*(l-f/2<0?-1:1);p(t,r,Math.max(n,Math.floor(r-l*v/f+x)),Math.min(o,Math.floor(r+(f-l)*v/f+x)),i)}var a=t[r],e=n,h=o;for(c(t,n,r),i(t[o],a)>0&&c(t,n,o);e<h;){for(c(t,e,h),e++,h--;i(t[e],a)<0;)e++;for(;i(t[h],a)>0;)h--}i(t[n],a)===0?c(t,n,h):c(t,++h,o),h<=r&&(n=h+1),r<=h&&(o=h-1)}}function c(t,r,n){var o=t[r];t[r]=t[n],t[n]=o}function s(t,r){return t<r?-1:t>r?1:0}return q},(d=b())!==void 0&&(g.exports=d);const k=V(m.exports);export{k as f};
