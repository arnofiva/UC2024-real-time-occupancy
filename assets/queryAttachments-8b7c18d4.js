import{f_ as h,f$ as i,ax as p}from"./index-6a39f5fd.js";import{t as d}from"./query-549555fc.js";import{l}from"./AttachmentInfo-b9074a04.js";import"./pbfQueryUtils-da01cf7e.js";import"./pbf-b8e7c3b5.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function A(n,t){const e={};for(const o of t){const{parentObjectId:a,parentGlobalId:s,attachmentInfos:c}=o;for(const r of c){const{id:u}=r,f=h(i(`${n.path}/${a}/attachments/${u}`)),m=l.fromJSON(r);m.set({url:f,parentObjectId:a,parentGlobalId:s}),e[a]?e[a].push(m):e[a]=[m]}}return e}function $(n,t,e){let o={query:d({...n.query,f:"json",...y(t)})};return e&&(o={...e,...o,query:{...e.query,...o.query}}),p(n.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}async function g(n,t,e){const{objectIds:o}=t,a=[];for(const s of o)a.push(p(n.path+"/"+s+"/attachments",e));return Promise.all(a).then(s=>o.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{$ as executeAttachmentQuery,g as fetchAttachments,A as processAttachmentQueryResult};
