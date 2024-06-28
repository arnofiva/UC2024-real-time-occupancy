import{an as i,ao as p,aj as s,ak as t,ap as a,am as c,aq as h}from"./index-ab96db07.js";import{O as n}from"./GraphicsProcessor-cee10e46.js";import"./Graphics3DObjectStates-867041f5.js";import"./optimizedFeatureQueryEngineAdapter-6cdbde2c.js";import"./PooledRBush-81406012.js";import"./quickselect-6bdb87cc.js";import"./popupUtils-5d416a17.js";let r=class extends i(h){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new d,this.suspended=!1}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){return this.view?.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,o){return this.processor.whenGraphicBounds(e,o)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}get test(){return{graphics3DProcessor:this.processor}}};s([t({readOnly:!0})],r.prototype,"graphics",null),s([t()],r.prototype,"loadedGraphics",null),s([t({readOnly:!0})],r.prototype,"updating",null),s([t({constructOnly:!0})],r.prototype,"view",void 0),s([t()],r.prototype,"processor",void 0),s([t({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),s([t()],r.prototype,"layer",void 0),s([t()],r.prototype,"suspended",void 0),r=s([c("esri.views.3d.layers.GraphicsView3D")],r);class d extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const G=r;export{G as default};
