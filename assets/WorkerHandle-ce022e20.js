import{bA as a,aK as o,bi as l,bB as d,aB as _}from"./index-ab96db07.js";let u=class{constructor(e,t,s,i,r={}){this._mainMethod=t,this._transferLists=s,this._listeners=[],this._promise=a(e,{...r,schedule:i}).then(h=>{if(this._thread===void 0){this._thread=h,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const n of this._listeners)this._connectListener(n)}else h.close()}),this._promise.catch(h=>o.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${h}`))}on(e,t){const s={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(s),this._connectListener(s),l(()=>{s.removed=!0,d(this._listeners,s),this._thread&&s.threadHandle!=null&&s.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const i=this._transferLists[e],r=i?i(t):[];return this._thread.invoke(e,t,{transferList:r,signal:s})}return this._promise?this._promise.then(()=>(_(s),this.invokeMethod(e,t,s))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}};export{u as h};