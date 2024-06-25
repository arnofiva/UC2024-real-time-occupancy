import{al as a,cf as l,cg as d,ao as o,af as p,bm as u,am as y,ah as s,ai as i,ak as h}from"./index-c0f955a7.js";let e=class extends a(l(d.EventedMixin(o))){constructor(t){super(t),this._updatingHandles=new p,this.layer=null,this.parent=null}initialize(){this.when().catch(t=>{if(t.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",n=this.layer?.title||"no title";u.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${r}')`,t)}})}destroy(){this._updatingHandles=y(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return this.layer?.visible===!0}set visible(t){this._overrideIfSome("visible",t)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const t=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};s([i()],e.prototype,"fullOpacity",null),s([i()],e.prototype,"layer",void 0),s([i()],e.prototype,"parent",void 0),s([i({readOnly:!0})],e.prototype,"suspended",null),s([i({readOnly:!0})],e.prototype,"suspendInfo",null),s([i({readOnly:!0})],e.prototype,"legendEnabled",null),s([i({type:Boolean,readOnly:!0})],e.prototype,"updating",null),s([i({readOnly:!0})],e.prototype,"updatingProgress",null),s([i()],e.prototype,"visible",null),s([i()],e.prototype,"view",void 0),e=s([h("esri.views.layers.LayerView")],e);const v=e;export{v as u};