import{fq as a,bi as l}from"./index-ab96db07.js";function c(n,e){return u(n?.data.coordinateHelper.hasZ(),e)}function u(n,e){return!!n&&e.mode!=="on-the-ground"&&!a(e)}function s(n,e){let r=null;const o=n.events.on("grab-changed",t=>{r!=null&&(r.remove(),r=null),t.action==="start"&&(r=n.disableDisplay()),e&&e(t)});return l(()=>{r?.remove(),o.remove()})}export{c as o,s as r};