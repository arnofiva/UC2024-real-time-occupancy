import{bQ as r,bR as c}from"./index-c0f955a7.js";async function m(e,u=e.popupTemplate){if(u==null)return[];const n=await u.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=u,{objectIdField:d,typeIdField:a,globalIdField:t,relationships:s}=e;if(n.includes("*"))return["*"];const o=i?r(e):[],l=c(e.fieldsIndex,[...n,...o]);return a&&l.push(a),l&&d&&e.fieldsIndex?.has(d)&&!l.includes(d)&&l.push(d),l&&t&&e.fieldsIndex?.has(t)&&!l.includes(t)&&l.push(t),s&&s.forEach(f=>{const{keyField:p}=f;l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p)}),l}function I(e,u){return e.popupTemplate?e.popupTemplate:u!=null&&u.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function b(e,u){return I(e,{defaultPopupTemplateEnabled:u})!=null}export{m as n,I as p,b as u};