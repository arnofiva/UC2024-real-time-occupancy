import{aL as h,aR as w,av as y,aS as d,am as V,aT as _,aU as c,aA as u,ah as e,ai as n,ak as p}from"./index-c0f955a7.js";import{n as A}from"./LayerView3D-cadfe2a7.js";import{u as v}from"./LayerView-56ae8a75.js";const o="analysis-view-handles";let i=class extends A(v){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const r=await this._loadAnalysisModule();this._analysisModule=r,a=r}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-e7cc07e0.js"),["./LineOfSightAnalysisView3D-e7cc07e0.js","./index-c0f955a7.js","./index-c3d91843.css","./LineVisualElement-66dac256.js","./LineOfSightAnalysisTarget-43dbc60a.js","./persistable-585a2b37.js","./resourceExtension-6591026e.js","./elevationInfoUtils-fe734b95.js","./analysisViewUtils-ffd55722.js","./PointVisualElement-511deac0.js"],import.meta.url)}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};