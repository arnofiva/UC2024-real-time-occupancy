import{b0 as P,b1 as b,fH as h,fI as x,fG as N,fD as S,fz as d,aw as c,fJ as g}from"./index-ab96db07.js";function J(e,a,r){const t=r(e);if(!t.isValid)throw new c(`${a}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:a,errorNamePrefix:r,validateLayer:t}=e;await a.load(),J(a,r,t)}function m(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function w(e){const{item:a,errorNamePrefix:r,layer:t,validateItem:i}=e;if(g(a),O(e),i){const n=i(a);if(!n.isValid)throw new c(`${r}:invalid-parameters`,n.errorMessage,{layer:t})}}function O(e){const{item:a,itemType:r,additionalItemType:t,errorNamePrefix:i,layer:n}=e,s=[r];if(t&&s.push(t),!s.includes(a.type)){const p=s.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:a,layer:n})}}function C(e){const{layer:a,errorNamePrefix:r}=e,{portalItem:t}=a;if(!t)throw new c(`${r}:portal-item-not-set`,m(a,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${r}:portal-item-not-loaded`,m(a,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function D(e){const{newItem:a,itemType:r}=e;let t=P.from(a);return t.id&&(t=t.clone(),t.id=null),t.type??=r,t.portal??=b.getDefault(),w({...e,item:t}),t}function I(e){return h(e,"portal-item")}async function $(e,a,r){"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},a);return await Promise.all(a.resources?.pendingOperations??[]),x(a,{errorName:"layer-write:unsupported"},r),t}function v(e){N(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,r,t)=>t.indexOf(a)===r))}async function E(e,a,r){const t=e.portal;await t.signIn(),await t.user?.addItem({item:e,data:a,folder:r?.folder})}async function K(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e),C(e);const o=r.portalItem,l=i?i(o):I(o),f=await $(r,l,{...a,supplementalUnsupportedErrors:p}),u=await t({layer:r,layerJSON:f},o);return await n?.(r,o),v(o),await o.update({data:u}),d(l),await s?.(o,l),o}async function T(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e);const o=D(e),l=i?i(o):I(o),f=await $(r,l,{...a,supplementalUnsupportedErrors:p}),u=await t({layer:r,layerJSON:f},o);return await n(r,o),v(o),await E(o,u,a),r.portalItem=o,d(l),await s?.(o,l),o}export{K as $,$ as I,E as P,m as c,C as d,T as j,J as l,v,I as w,D as y};
