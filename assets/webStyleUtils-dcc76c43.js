import{av as c,g7 as u,aw as r,g8 as f,g9 as i,ga as m,dF as b,dH as g,gb as d,gc as w,gd as p,ge as h,gf as $}from"./index-c0f955a7.js";async function D(a,e,t){if(!a.name)throw new c("style-symbol-reference-name-missing","Missing name in style symbol reference");if(a.styleName&&a.styleName==="Esri2DPointSymbolsStyle")return N(a,t);try{return S(await u(a,e,t),a.name,e,t)}catch(n){return r(n),null}}async function N(a,e){const t=f.replaceAll(/\{SymbolName\}/gi,a.name);try{const n=await i(t,e);return m(n.data)}catch(n){return r(n),null}}async function S(a,e,t,n){const y={portal:t?.portal!=null?t.portal:b.getDefault(),url:g(a.baseUrl),origin:"portal-item"},o=d(e,a.data);if(!o)throw new c("symbolstyleutils:symbol-name-not-found",`The symbol name '${e}' could not be found`,{symbolName:e});let s=w(p(o,"cimRef"),y);h()&&(s=$(s));try{const l=await i(s,n);return m(l.data)}catch(l){return r(l),null}}export{D as fetchCIMSymbolReference};