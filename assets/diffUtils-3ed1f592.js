import{aG as g,bL as A,ao as D}from"./index-8b5e7d9b.js";const k=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function d(n){return n instanceof D}function b(n){return n instanceof g?Object.keys(n.items):d(n)?A(n).keys():n?Object.keys(n):[]}function p(n,t){return n instanceof g?n.items[t]:n[t]}function P(n,t){return!(!Array.isArray(n)||!Array.isArray(t))&&n.length!==t.length}function c(n){return n?n.declaredClass:null}function V(n,t){const e=n.diff;if(e&&typeof e=="function")return e(n,t);const l=b(n),i=b(t);if(l.length===0&&i.length===0)return;if(!l.length||!i.length||P(n,t))return{type:"complete",oldValue:n,newValue:t};const s=i.filter(o=>!l.includes(o)),w=l.filter(o=>!i.includes(o)),m=l.filter(o=>i.includes(o)&&p(n,o)!==p(t,o)).concat(s,w).sort(),h=c(n);if(h&&k.has(h)&&m.length)return{type:"complete",oldValue:n,newValue:t};let a;const j=d(n)&&d(t);for(const o of m){const r=p(n,o),f=p(t,o);let u;if((j||typeof r!="function"&&typeof f!="function")&&r!==f&&(r!=null||f!=null)){if(e&&e[o]&&typeof e[o]=="function")u=e[o]?.(r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;u={type:"complete",oldValue:r,newValue:f}}else u=typeof r=="object"&&typeof f=="object"&&c(r)===c(f)?V(r,f):{type:"complete",oldValue:r,newValue:f};u!=null&&(a!=null?a.diff[o]=u:a={type:"partial",diff:{[o]:u}})}}return a}function S(n,t){if(n==null)return!1;const e=t.split(".");let l=n;for(const i of e){if(l.type==="complete")return!0;if(l.type!=="partial")return!1;{const s=l.diff[i];if(!s)return!1;l=s}}return!0}function O(n,t){for(const e of t)if(S(n,e))return!0;return!1}function T(n,t){if(typeof n!="function"&&typeof t!="function"&&(n!=null||t!=null))return n==null||t==null||typeof n=="object"&&typeof t=="object"&&c(n)!==c(t)?{type:"complete",oldValue:n,newValue:t}:V(n,t)}function y(n){if(n==null)return!0;switch(n.type){case"complete":return!1;case"collection":{const t=n;for(const e of t.added)if(!y(e))return!1;for(const e of t.removed)if(!y(e))return!1;for(const e of t.changed)if(!y(e))return!1;return!0}case"partial":for(const t in n.diff)if(!y(n.diff[t]))return!1;return!0}}export{T as a,O as p,S as s,y};
