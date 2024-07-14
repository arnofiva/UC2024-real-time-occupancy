import{cs as $,ct as j,cu as x,cv as h,cw as N,cx as P,cy as b,cz as A,cA as S,cB as v,cC as R,aw as O,cD as F,cE as z,cF as C,cG as H,cH as J,cI as K}from"./index-a7c18ff0.js";import{p as y}from"./resourceExtension-1abd8e46.js";function q(e){const r=e?.origins??[void 0];return(s,n)=>{const t=B(e,s,n);for(const i of r){const c=$(s,i,n);for(const o in t)c[o]=t[o]}}}function B(e,r,s){if(e?.type==="resource")return D(e,r,s);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=K;return{read:n,write:t}}}}function D(e,r,s){const n=j(r,s);return{type:String,read:(t,i,c)=>{const o=x(t,i,c);return n.type===String?o:typeof n.type=="function"?new n.type({url:o}):void 0},write:{writer(t,i,c,o){if(!o?.resources)return typeof t=="string"?void(i[c]=h(t,o)):void(i[c]=t.write({},o));const a=V(t),p=h(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},N.NO),l=n.type!==String&&(!P(this)||o?.origin&&this.originIdOf(s)>b(o.origin)),u={object:this,propertyName:s,value:t,targetUrl:p,dest:i,targetPropertyName:c,context:o,params:e};o?.portalItem&&p&&!A(p)?l&&e?.contentAddressed?g(u):l?E(u):G(u):o?.portalItem&&(p==null||S(p)!=null||v(p)||l)?g(u):i[c]=p}}}}function g(e){const{targetUrl:r,params:s,value:n,context:t,dest:i,targetPropertyName:c}=e;if(!t.portalItem)return;const o=R(r),a=U(n,r,t);if(s?.contentAddressed&&a.type!=="json")return void t.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a}));const p=s?.contentAddressed&&a.type==="json"?F(a.jsonString):o?.filename??z(),l=C(s?.prefix??o?.prefix,p),u=`${l}.${y(a)}`;if(s?.contentAddressed&&t.resources&&a.type==="json"){const f=t.resources.toKeep.find(({resource:m})=>m.path===u)??t.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(i[c]=f.resource.itemRelativeUrl)}const d=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(H(r).then(f=>{d.path=`${l}.${y({type:"blob",blob:f})}`,i[c]=d.itemRelativeUrl}).catch(()=>{}));const I=s?.compress??!1;t.resources&&w({...e,resource:d,content:a,compress:I,updates:t.resources.toAdd}),i[c]=d.itemRelativeUrl}function E(e){const{context:r,targetUrl:s,params:n,value:t,dest:i,targetPropertyName:c}=e;if(!r.portalItem)return;const o=r.portalItem.resourceFromPath(s),a=U(t,s,r),p=y(a),l=J(o.path),u=n?.compress??!1;p===l?(r.resources&&w({...e,resource:o,content:a,compress:u,updates:r.resources.toUpdate}),i[c]=s):g(e)}function G({context:e,targetUrl:r,dest:s,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),s[n]=r)}function w({object:e,propertyName:r,updates:s,resource:n,content:t,compress:i}){const c=o=>{Y(e,r,o)};s.push({resource:n,content:t,compress:i,finish:c})}function U(e,r,s){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(s))}}function V(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,r,s){typeof e[r]=="string"?e[r]=s.url:e[r].url=s.url}export{q as j};