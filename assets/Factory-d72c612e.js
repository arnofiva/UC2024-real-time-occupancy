import{mM as A,mN as N,mO as M,mP as p,mQ as b,mR as j,mS as T,kK as z,bn as d,mT as y,ky as S,mU as w,b8 as L}from"./index-c0f955a7.js";function P(t,e){return C(t,()=>e)}function C(t,e){const n=d(),o=d();let a=!1;return c=>{const l=e(c);if(c.action==="start"){const s=N(c.screenStart,M(p.get())),r=b(t.state.camera,s,D);r!=null&&(a=j(l,r,n))}if(!a)return null;const i=N(c.screenEnd,M(p.get())),u=b(t.state.camera,i,D);return u==null?null:j(l,u,o)?{...c,renderStart:n,renderEnd:o,plane:l,ray:u}:null}}var m;function E(t){let e=null;return n=>{switch(n.action){case"start":e=t.disableDisplay();break;case"end":case"cancel":e!=null&&(e.remove(),e=null)}return n}}function O(t,e=null){const n=T(t.state.viewingMode);n.options.selectionMode=!0,n.options.store=z.MIN,n.options.hud=!1;const o=w(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},c=d(),l=e??t.spatialReference,i=s=>{t.map.ground&&t.map.ground.opacity<1?a.exclude.add(y):a.exclude.delete(y),t.sceneIntersectionHelper.intersectIntersectorScreen(N(s,o),n,a);const r=n.results.min;let I;if(r.getIntersectionPoint(c))I=r.intersector===S.TERRAIN?m.GROUND:m.OTHER;else{if(!n.results.ground.getIntersectionPoint(c))return null;I=m.GROUND}return{location:t.renderCoordsHelper.fromRenderCoords(c,l),surfaceType:I}};let u;return s=>{if(s.action==="start"){const I=i(s.screenStart);u=I!=null?I.location:null}if(u==null)return null;const r=i(s.screenEnd);return r?.location!=null?{...s,mapStart:u,mapEnd:r.location,surfaceType:r.surfaceType}:null}}(function(t){t[t.GROUND=0]="GROUND",t[t.OTHER=1]="OTHER"})(m||(m={}));const D=A(),x="theme-style";function Z(t,e){return Y(R(H(f(t),e)),e.size)}function H(t,{accentColor:e,contrastColor:n}){const o=e.toHex(),a=e.a,c=n.toHex(),l=n.a,i=t.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(x);return i&&(i.innerHTML=`
      .contrast-fill { fill: ${c}; fill-opacity: ${l}; }
      .contrast-stroke { stroke: ${c}; stroke-opacity: ${l};  }
      .accent-fill { fill: ${o}; fill-opacity: ${a}; }
      .accent-stroke { stroke: ${o}; stroke-opacity:  ${a}; }`),t}function f(t){const e=t.split(",")[1],n=atob(e);return new DOMParser().parseFromString(n,"image/svg+xml")}function R(t){const e=new XMLSerializer().serializeToString(t);return`data:image/svg+xml;base64,${btoa(e)}`}function Y(t,e){const n=new Image(e,e);return n.src=t,n}const $="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",v="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=",g=64;function h(t,e){const{accentColor:n,contrastColor:o,preMultiplyAlpha:a}=e;return t.fromData(`heading-rotate:[accent:${n},contrast:${o},size:${g}]`,()=>new L(Z($,{accentColor:n,contrastColor:o,size:g}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}function U(t,e){const{accentColor:n,contrastColor:o,preMultiplyAlpha:a}=e;return t.fromData(`tilt-rotate:[accent:${n},contrast:${o},size:${g}]`,()=>new L(Z(v,{accentColor:n,contrastColor:o,size:g}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}export{E as A,O as F,P as H,h as l,U as n};