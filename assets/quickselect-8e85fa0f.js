import{bs as j}from"./index-ee8e5ecc.js";var M,g,b,d={exports:{}};M=d,g=function(){function q(t,r,n,o,i){l(t,r,n||0,o||t.length-1,i||s)}function l(t,r,n,o,i){for(;o>n;){if(o-n>600){var f=o-n+1,e=r-n+1,u=Math.log(f),v=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*v*(f-v)/f)*(e-f/2<0?-1:1);l(t,r,Math.max(n,Math.floor(r-e*v/f+c)),Math.min(o,Math.floor(r+(f-e)*v/f+c)),i)}var a=t[r],p=n,h=o;for(x(t,n,r),i(t[o],a)>0&&x(t,n,o);p<h;){for(x(t,p,h),p++,h--;i(t[p],a)<0;)p++;for(;i(t[h],a)>0;)h--}i(t[n],a)===0?x(t,n,h):x(t,++h,o),h<=r&&(n=h+1),r<=h&&(o=h-1)}}function x(t,r,n){var o=t[r];t[r]=t[n],t[n]=o}function s(t,r){return t<r?-1:t>r?1:0}return q},(b=g())!==void 0&&(M.exports=b);const w=j(d.exports);export{w as f};