import{aj as v,am as u,aQ as l,aY as o,ip as d,aZ as w,c4 as f,jk as h}from"./index-ab96db07.js";import{n as m}from"./InteractiveToolBase-49db0252.js";let n=class extends m{constructor(t){super(t)}initialize(){this.addHandles(l(()=>this.analysisViewData.visible,t=>this.visible=t,o))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};n=v([u("esri.views.interactive.AnalysisToolBase")],n);function D(t,a){t.interactive=!0;const{tool:i,view:s}=t;s.activeTool=i;let e=d(a,()=>{s.activeTool===i&&(s.activeTool=null)});return w(async r=>{await f(()=>i==null||!i.active,r),e=h(e)},a)}function b(t,a){return l(()=>t.interactive,()=>y(t,a),o)}function y(t,a){t.interactive?$(t,a):c(t)}function $(t,a){c(t);const{view:i,analysis:s}=t,e=new a({view:i,analysis:s,analysisViewData:t});return t.tool=e,i.tools.add(e),e}function c(t){const{view:a,tool:i}=t;i!=null&&(a.tools.remove(i),t.tool=null)}export{b as a,D as l,n as o,c as v};
