import{aw as l,aB as c}from"./index-ab96db07.js";async function w(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new l("request:server",`Unable to load ${e}`,{url:e,error:o})}return c(t),r}async function u(a,e,t,r,o){let n;try{n=await createImageBitmap(a)}catch(s){throw new l("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:s,level:e,row:t,col:r})}return c(o),n}export{u as o,w as t};
