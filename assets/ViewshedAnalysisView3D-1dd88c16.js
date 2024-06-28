import{ed as le,cM as u,eH as Y,hq as fe,b4 as G,aj as o,ak as h,am as k,aq as K,eW as he,aQ as w,sX as ut,ai as C,ao as M,oz as Q,dA as Z,ef as N,hu as D,pq as Se,ee as q,eP as R,sY as Ve,cR as pt,de as it,eQ as H,oD as vt,fr as b,cY as O,sZ as He,mV as mt,bt as re,cP as P,cN as _t,h3 as wt,md as ft,hT as Vt,bO as ge,jl as gt,lZ as de,dX as st,qX as j,s_ as oe,s$ as be,oB as at,qR as ye,fm as Ee,e$ as bt,f1 as yt,lI as Mt,di as Me,oy as De,bM as Dt,r5 as ze,t0 as B,fk as Ot,lk as $t,r2 as Ct,fj as xe,rk as Le,t1 as Tt,pY as St,aY as J,dF as Ht,t2 as Et,em as Rt,eO as Oe,t3 as At,eK as Pt,aR as Ft,t4 as zt,eM as xt,t5 as Lt,a_ as ke,t6 as kt}from"./index-ab96db07.js";import{s as Ut}from"./AnalysisView3D-7e79c478.js";import{distance as Ue}from"./geometryEngine-ebfb00c5.js";import{O as It,a as jt,p as ne,d as L,e as Re,M as Nt,i as Bt,k as ce,f as Gt}from"./InteractiveToolBase-49db0252.js";import{O as qt,k as Kt}from"./dragEventPipeline3D-fac7f7a6.js";import{f as F}from"./LineVisualElement-f0fcad77.js";import{b as Wt,s as te}from"./sliceToolConfig-6eb1e762.js";import{t as nt,A,j as Yt,u as Jt,o as Xt}from"./MoveManipulation-5eacaa7c.js";import{G as Qt}from"./ExtendedLineVisualElement-79fc3aab.js";import{c as Zt}from"./LaserlineVisualElement-4a70baec.js";import{E as ei}from"./EditGeometryOperations-cd9be2c8.js";import{o as ti,a as ii,v as si,l as ai}from"./analysisViewUtils-6a12b552.js";import{p as Ie}from"./keybindings-65d19bf6.js";import{t as ni}from"./ToolIntersector-8c0f1c04.js";import"./geometryEngineBase-2eacdee6.js";import"./hydrated-33355f53.js";import"./vec4f32-0d1b2306.js";import"./EngineVisualElement-02def4a8.js";import"./geometry2dUtils-bc57a82d.js";function rt({tiltedUpVector:t,rightVector:e,observerRenderSpace:i},s){const a=It(t,e,i,s);return a[12]=0,a[13]=0,a[14]=0,a}function $e(t,e,i){const s=u(),a=le(u(),i.basis1,i.basis2);return t.next(qt(e,i.plane)).next(n=>{n.action==="start"&&Y(s,n.renderStart);const r=fe(jt(s,n.renderEnd,i.origin,a));return{...n,deltaAngle:r}})}function ot(t,e){if(t==null)return 0;const{observer:i,target:s}=t,a=e.camera.position,n=Ue(a,i)>Ue(a,s)?i:s;return e.pixelSizeAt(n)}const ri=2,je=new G([85,85,85,.5]);let E=class extends K{constructor(e){super(e),this.visible=!0,this._viewshedCorners={topLeft:u(),topRight:u(),bottomLeft:u(),bottomRight:u(),center:u()},this._arcCenterPoints={top:u(),bottom:u(),left:u(),right:u()},this._parallelCenters={top:u(),bottom:u()}}initialize(){const e={view:this.view,isDecoration:!0,color:this._color,renderOccluded:he.OccludeAndTransparent},i={...e,width:ri,stipplePattern:vt(2)};this._boundaryLinesVisualElement=new F(e),this._leftArcVisualElement=new F(e),this._rightArcVisualElement=new F(e),this._topArcVisualElement=new F(e),this._bottomArcVisualElement=new F(e),this._centralLongitude=new F(i),this._centralLatitude=new F(i),this.addHandles([w(()=>{const s=this.viewshedComputedData;if(!s?.isValid())return null;const a=this._offsetScale,n=this._viewshedCorners,r=this._arcCenterPoints,l=this._parallelCenters;return s.cornerPoints(a,n),s.arcCentersPoints(a,r),s.parallelCenterPoints(l),{viewshedComputedData:s,corners:n,arcCenters:r,parallelCenters:l}},s=>{s!=null?(this._forEachVisualElement(a=>a.attached=!0),this._updateVisualElements(s)):this._forEachVisualElement(a=>a.attached=!1)},{initial:!0,equals:ut}),w(()=>({visible:this.visible,horFOV:this.viewshedComputedData?.horizontalFieldOfView}),({visible:s,horFOV:a},n)=>{s!==n?.visible&&this._forEachVisualElement(r=>r.visible=s),s&&a!==n?.horFOV&&(this._boundaryLinesVisualElement.visible=a!==360)},C),w(()=>this._color,s=>this._forEachVisualElement(a=>a.color=s),C)])}get _color(){const e=this.viewshedComputedData;if(e==null)return G.toUnitRGBA(je);const i=this.analysisViewData,s=i.tool?.active||i.interactive,a=e===i.selectedViewshedComputedData,n=e.viewshed===i.tool?.stagedViewshed,r=s&&(a||n)?this.view.effectiveTheme.accentColor:je;return G.toUnitRGBA(r)}get _offsetScale(){return ot(this.viewshedComputedData,this.view)}destroy(){this._boundaryLinesVisualElement=M(this._boundaryLinesVisualElement),this._leftArcVisualElement=M(this._leftArcVisualElement),this._rightArcVisualElement=M(this._rightArcVisualElement),this._topArcVisualElement=M(this._topArcVisualElement),this._bottomArcVisualElement=M(this._bottomArcVisualElement),this._centralLongitude=M(this._centralLongitude),this._centralLatitude=M(this._centralLatitude)}_forEachVisualElement(e){[this._boundaryLinesVisualElement,this._leftArcVisualElement,this._rightArcVisualElement,this._topArcVisualElement,this._bottomArcVisualElement,this._centralLatitude,this._centralLongitude].forEach(e)}_updateVisualElements(e){const{viewshedComputedData:i,corners:s,arcCenters:a,parallelCenters:n}=e;this._updateBoundaryLines(s),this._updateBoundaryArcs(i,s,n),this._updateCentralHelperArcs(i,a)}_updateBoundaryLines(e){this._boundaryLinesVisualElement.geometry=[[e.center,e.topLeft],[e.center,e.topRight],[e.center,e.bottomLeft],[e.center,e.bottomRight]]}_updateBoundaryArcs(e,i,s){const{observerRenderSpace:a,rightVector:n,horizontalFieldOfView:r,tiltedUpVector:l}=e,c=b(r),d=u(),p=O();Q(p,c/2,l),Z(d,n,p),U(this._leftArcVisualElement,a,i.bottomLeft,i.topLeft,"forward",d),Q(p,-c/2,l),N(d,0,0,0),Z(d,n,p),U(this._rightArcVisualElement,a,i.bottomRight,i.topRight,"forward",d);const m=r>180?"backward":"forward";U(this._topArcVisualElement,s.top,i.topRight,i.topLeft,m,l),U(this._bottomArcVisualElement,s.bottom,i.bottomRight,i.bottomLeft,m,l)}_updateCentralHelperArcs(e,i){const s=e.observerRenderSpace,a=e.horizontalFieldOfView>=180?"backward":"forward";U(this._centralLatitude,s,i.right,i.left,a,e.tiltedUpVector),U(this._centralLongitude,s,i.top,i.bottom,"forward",e.leftVector)}};function U(t,e,i,s,a,n,r=5){const l=u();D(l,i,e);const c=Se(l),d=u();D(d,s,e),q(d,d),R(d,d,c);let p=Ve(l,d);const m=pt(n);a==="backward"&&(it(m,m),p=-(2*Math.PI-p));const v=[],f=Math.ceil(Math.abs(p)/b(r)),g=O();Q(g,p/f,m);const y=u();Y(y,l);const ie=u();Y(ie,i);for(let Ae=0;Ae<f;Ae++){const Pe=u();Y(Pe,ie),Z(y,y,g),H(ie,e,y);const Fe=u();Y(Fe,ie),v.push([Pe,Fe])}t.geometry=v}o([h()],E.prototype,"view",void 0),o([h()],E.prototype,"analysisViewData",void 0),o([h()],E.prototype,"viewshedComputedData",void 0),o([h()],E.prototype,"visible",void 0),o([h()],E.prototype,"_color",null),o([h()],E.prototype,"_offsetScale",null),E=o([k("esri.views.3d.analysis.Viewshed.ViewshedVisualization")],E);const oi=E;let x=class extends K{get visible(){return this.analysisViewData.visible}constructor(e){super(e)}initialize(){const e=this.analysisViewData,i=He(()=>this.analysisViewData.viewshedComputedDataHandles,({viewshedComputedData:s})=>{const a=new oi({view:this.view,viewshedComputedData:s,analysisViewData:e});return{visualization:a,remove:()=>a.destroy()}});this._viewshedVisualizations=i,this.addHandles([mt(i),w(()=>this.visible,s=>this._viewshedVisualizations.forEach(({visualization:a})=>a.visible=s))])}};o([h({constructOnly:!0})],x.prototype,"analysisViewData",void 0),o([h({constructOnly:!0,nonNullable:!0})],x.prototype,"view",void 0),o([h({constructOnly:!0})],x.prototype,"isDecoration",void 0),o([h()],x.prototype,"visible",null),x=o([k("esri.views.3d.analysis.Viewshed.ViewshedAnalysisVisualization")],x);var Ce;let _=Ce=class extends K{constructor(t){super(t)}get observer(){return this.viewshed.observer??new re}get farDistance(){return this.viewshed.farDistance}get farDistanceRenderSpace(){return this.farDistance/this.metersPerUnit}get heading(){return this.viewshed.heading}get tilt(){return this.viewshed.tilt}get tiltParallelToSurface(){return this.tilt-90}get horizontalFieldOfView(){return this.viewshed.horizontalFieldOfView}get verticalFieldOfView(){return this.viewshed.verticalFieldOfView}get observerRenderSpace(){return this._pointToRenderSpace(this.observer,u())}get target(){const t=this.targetRenderSpace;return this.renderSpaceToPoint(t,this.observer.spatialReference)}get targetRenderSpace(){const{leftVector:t,northVector:e,upVector:i}=this,s=this.observerRenderSpace,a=this.farDistanceRenderSpace,n=u();return R(n,e,a),I(n,-b(this.heading),i,n),I(n,-b(this.tiltParallelToSurface),t,n),H(n,s,n),n}get targetDirection(){const t=D(u(),this.targetRenderSpace,this.observerRenderSpace);return q(t,t)}get tiltedUpVector(){const t=I(this.upVector,-b(this.tiltParallelToSurface),this.leftVector,u());return q(t,t)}get _basis(){return this.renderCoordsHelper.basisMatrixAtPosition(this.observerRenderSpace,O())}get upVector(){const t=this._basis;return P(t[8],t[9],t[10])}get northVector(){const t=this._basis;return P(t[4],t[5],t[6])}get leftVector(){const t=this.upVector,e=I(this.northVector,-b(this.heading),t,u());return le(e,t,e)}get rightVector(){return it(u(),this.leftVector)}clone(){return new Ce({renderCoordsHelper:this.renderCoordsHelper,viewshed:this.viewshed.clone()})}isValid(){return this.viewshed.isValid()}get metersPerUnit(){return this.renderCoordsHelper.spatialReference.metersPerUnit}pointOnSphere(t,e,i){const{observerRenderSpace:s,targetRenderSpace:a}=this,n=D(X,a,s);return I(n,-b(e),this.leftVector,n),I(n,-b(t),this.tiltedUpVector,n),H(i,n,s)}cornerPoints(t,e){const i=this.observerRenderSpace,s=this.horizontalFieldOfView/2,a=this.verticalFieldOfView/2,n=this.pointOnSphere(-s,a,_i),r=this.pointOnSphere(s,a,wi),l=this.pointOnSphere(-s,-a,fi),c=this.pointOnSphere(s,-a,Vi),d=D(ui,n,i),p=D(pi,r,i),m=D(vi,l,i),v=D(mi,c,i),{horizontalFieldOfView:f}=this,g=di;Ne(d,p,n,l,i,t,f,e.topLeft,e.bottomLeft,g);const y=ci;Ne(v,m,r,c,i,t,f,e.topRight,e.bottomRight,y),R(e.center,H(e.center,y,g),.5)}arcCentersPoints(t,e){const i=this.horizontalFieldOfView/2,s=this.verticalFieldOfView/2,a=this.pointOnSphere(0,s,e.top),n=this.pointOnSphere(0,-s,e.bottom),r=this.pointOnSphere(-i,0,e.left),l=this.pointOnSphere(i,0,e.right),{observerRenderSpace:c}=this;se(a,c,t),se(n,c,t),se(r,c,t),se(l,c,t)}parallelCenterPoints(t){const e=this.observerRenderSpace,i=this.farDistanceRenderSpace*Math.sin(b(this.verticalFieldOfView/2)),s=R(X,this.tiltedUpVector,i);H(t.top,e,s),D(t.bottom,e,s)}renderSpaceToPoint(t,e){const i=X;return this.renderCoordsHelper.fromRenderCoords(t,i,e),new re(i[0],i[1],i[2],e)}_pointToRenderSpace(t,e){const i=_t(t.toArray());return this.renderCoordsHelper.toRenderCoords(i,t.spatialReference,e),e}};function Ne(t,e,i,s,a,n,r,l,c,d){const p=li(t,e,n,hi);H(d,a,p),Be(i,t,p,n,r,l),Be(s,t,p,n,r,c)}function I(t,e,i,s){return Q(Ge,e,i),Z(s,t,Ge)}function li(t,e,i,s){const a=le(s,t,e);return q(a,a),R(a,a,i),a}function Be(t,e,i,s,a,n){const r=q(X,e);return R(r,r,s),H(n,t,r),a!==0&&a!==360&&H(n,n,i),n}function se(t,e,i){const s=D(X,t,e);q(s,s),R(s,s,i),H(t,t,s)}o([h()],_.prototype,"renderCoordsHelper",void 0),o([h()],_.prototype,"viewshed",void 0),o([h()],_.prototype,"observer",null),o([h()],_.prototype,"farDistance",null),o([h()],_.prototype,"farDistanceRenderSpace",null),o([h()],_.prototype,"heading",null),o([h()],_.prototype,"tilt",null),o([h()],_.prototype,"tiltParallelToSurface",null),o([h()],_.prototype,"horizontalFieldOfView",null),o([h()],_.prototype,"verticalFieldOfView",null),o([h()],_.prototype,"observerRenderSpace",null),o([h()],_.prototype,"target",null),o([h()],_.prototype,"targetRenderSpace",null),o([h()],_.prototype,"targetDirection",null),o([h()],_.prototype,"tiltedUpVector",null),o([h()],_.prototype,"_basis",null),o([h()],_.prototype,"upVector",null),o([h()],_.prototype,"northVector",null),o([h()],_.prototype,"leftVector",null),o([h()],_.prototype,"rightVector",null),o([h()],_.prototype,"isValid",null),o([h()],_.prototype,"metersPerUnit",null),_=Ce=o([k("esri.views.3d.analysis.Viewshed.ViewshedComputedData")],_);const X=u(),hi=u(),di=u(),ci=u(),ui=u(),pi=u(),vi=u(),mi=u(),_i=u(),wi=u(),fi=u(),Vi=u(),Ge=O();let S=class extends wt(K){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return ft(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView}};o([h({type:re})],S.prototype,"observer",void 0),o([h({type:Number,nonNullable:!0,range:{min:0}})],S.prototype,"farDistance",void 0),o([h({type:Number,nonNullable:!0}),Vt(t=>ge.normalize(gt(t)))],S.prototype,"heading",void 0),o([h({type:Number,nonNullable:!0,range:{min:0,max:180}})],S.prototype,"tilt",void 0),o([h({type:Number,nonNullable:!0,range:{min:0,max:360}})],S.prototype,"horizontalFieldOfView",void 0),o([h({type:Number,nonNullable:!0,range:{min:0,max:180}})],S.prototype,"verticalFieldOfView",void 0),o([h()],S.prototype,"isValid",null),S=o([k("esri.analysis.Viewshed")],S);const gi=S,lt=Wt,bi=te*lt,ue=5,ae=.0025,yi=1,Mi=Math.sin(b(2)),Di=te/1.5,qe=5,pe=1;let Oi=class extends nt{constructor(e){super(),this._handles=new de,this._interactive=!0,this._tool=e.tool,this._view=e.view,this._focusedArcMaterial=this._createArcMaterial(!0),this._unfocusedArcMaterial=this._createArcMaterial(!1),this._createManipulators(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._handles=M(this._handles),this.forEachManipulator(e=>{this._tool.manipulators.remove(e),e.destroy()}),this._tool=null,this._view=null,this._manipulators=null}get interactive(){return this._interactive}set interactive(e){this._interactive!==e&&(this._interactive=e,this._updateManipulatorInteractivity())}createDragPipeline(e,i){const s=Object.values(this._manipulators);return st(s.map(({manipulator:a,side:n})=>ne(a,(r,l,c,d,p)=>{const m=Si(n,i);ee(n)?i.horizontalFieldOfView:i.verticalFieldOfView;const v=l.next(g=>({...g,manipulatorType:A.SCALE,side:n})),f=$e(v,this._view,m);e(r,f,c)})))}updateManipulatorsTransform(e){this._forEachManipulatorInfo(i=>this._updateArcManipulatorTransform(i,e))}updateManipulatorVisuals(e){this._forEachManipulatorInfo(i=>this._updateArcManipulatorVisuals(i,e))}_updateArcManipulatorVisuals({manipulator:e,side:i},s){const a=[];if(s!=null){if(i==="left"&&(s.horizontalFieldOfView<pe||s.horizontalFieldOfView>360-pe)||i==="bottom"&&s.verticalFieldOfView<pe)return e.renderObjects=[],void(e.collisionType={type:"line",paths:[]});const[n,r]=$i(i,s,this._unfocusedArcMaterial);a.push(new L(n,j.Unfocused),new L(n.instantiate({material:this._focusedArcMaterial}),j.Focused)),e.collisionType={type:"line",paths:[r]}}e.renderObjects=a,e.radius=10}_updateArcManipulatorTransform({manipulator:e,side:i},s){const a=s.horizontalFieldOfView,n=b(s.verticalFieldOfView/2),r=b(a/2),l=ee(i);e.location=s.observer;const c=O(),d=y=>{Me(c,y,c)};d(oe(z,b(-90))),l||d(be(z,n));const p=s.farDistanceRenderSpace;d(at(z,N(Ke,p,p,p))),d(ye(z,Ti(i))),d(rt(s,z));const m=D(Ke,s.targetRenderSpace,s.observerRenderSpace);let v,f;if(d(Ee(z,m)),l){if(v=r,f=s.tiltedUpVector,a!==0&&a!==360){const y=ot(s,this._view);v+=2*Math.tan(y/(2*s.farDistance))}}else f=s.rightVector,v=n;v*=i==="right"||i==="bottom"?-1:1;const g=Q(z,v,f);g!=null&&d(g),e.modelTransform=c}_updateManipulatorInteractivity(){const e=this.grabbing;this.forEachManipulator(i=>{i.interactive=!e&&this.interactive||i.grabbing})}_createManipulators(){const e=this._createArcManipulator("left"),i=this._createArcManipulator("right"),s=this._createArcManipulator("top"),a=this._createArcManipulator("bottom");this._manipulators={left:e,right:i,top:s,bottom:a};const n=[[a.manipulator,s.manipulator],[e.manipulator,i.manipulator]];n.push(...n.map(([r,l])=>[l,r])),this._handles.add(n.map(([r,l])=>r.events.on("focus-changed",c=>{const d=c.action==="focus";l.hovering=d})))}_createArcManipulator(e){const i={manipulator:new Re({view:this._view,autoScaleRenderObjects:!1,worldSized:!0}),side:e};return this._updateArcManipulatorVisuals(i),i}_createArcMaterial(e){const i=e?bi:lt,s=new bt({renderOccluded:he.OccludeAndTransparent,isDecoration:!0,width:i});return this._handles.add(w(()=>G.toUnitRGBA(this._view.effectiveTheme.accentColor),a=>s.setParameters({color:a}),C)),s}forEachManipulator(e){Object.values(this._manipulators).forEach(({manipulator:i})=>e(i,A.SCALE))}_forEachManipulatorInfo(e){Object.values(this._manipulators).forEach(i=>e(i))}};function $i(t,e,i){const{horizontalFieldOfView:s,verticalFieldOfView:a}=e,n=ee(t),r=b(Dt((n?a:s)/2,0,15)),l=n?1:Math.max(Math.sin(b(90-a/2)),.1),c=ht(-r/2,r/2,l,[-l,0,0]);return[yt(i,c),c]}function ht(t,e,i,s=[0,0,0],a=10){Mt(a>1,"createArcPolylineGeometry() needs at least 2 for numVertices");const n=e-t,[r,l,c]=s;if(n<=0||i<=0)return[P(r,l,c+.001),P(r,l,l+-.001)];const d=[],p=n/a;for(let m=0;m<a;m++){let v=t+m*p;m===a-1&&(v=e);const f=Math.cos(v)*i,g=Math.sin(v)*i,y=P(f+r,l,g+c);d.push(y)}return d}function Ci(t){switch(t){case"left":return 0;case"bottom":return 1;case"right":return 2;case"top":return 3}}function Ti(t){return Ci(t)*Hi}function ee(t){return t==="left"||t==="right"}function Si(t,{observerRenderSpace:e,targetDirection:i,tiltedUpVector:s,rightVector:a}){const n=ee(t)?a:s;return De(e,i,n)}const Hi=Math.PI/2,z=O(),Ke=u();class ve extends Re{constructor(e,i,s,a){super({view:e,autoScaleRenderObjects:!1,worldSized:!0,radius:5}),this._handles=new de,this._setupManipulatorVisual(i,s,a)}destroy(){this._handles.remove(),super.destroy()}_setupManipulatorVisual(e,i,s){const a=this._createMaterial(),n=b(i),r=e?1:Math.sin(n),l=e?ht(0,n,r,[-r,0,0]):[P(0,0,0),P(0,0,r)],c=ze(a,l,s,16,!1),d=ze(a,l,s*te,16,!1),p=We(!1,a,s),m=We(!0,a,s),v=O();Ee(v,l[l.length-1]),B(v,v,be(me,Math.PI/2)),B(v,v,oe(me,Math.PI/2)),e&&B(v,v,be(me,-n)),p.transformation=v,m.transformation=v,this.renderObjects=[new L(c,j.Unfocused),new L(d,j.Focused),new L(p,j.Unfocused),new L(m,j.Focused)];const f=P(0,dt(!0),0),g=Z(f,f,v),y=[...l,g];this.collisionType={type:"line",paths:[y]}}_createMaterial(){const e=new Ot({cullFace:$t.Back,renderOccluded:he.OccludeAndTransparent,isDecoration:!0,writeLinearDepth:!0});return this._handles.add(w(()=>G.toUnitRGBA(this.view.effectiveTheme.accentColor),i=>e.setParameters({color:i}),C)),e}}function We(t,e,i){const s=dt(t);let a=2*i;t&&(a*=te);const n=s/2;return Ct(e,s,n,n,a,0)}function dt(t){let e=Mi;return t&&(e*=Di),e}const me=O();let Ei=class extends nt{constructor(e){super(),this._handles=new de,this._interactive=!0,this._tool=e.tool,this._view=e.view,this._manipulatorHeading=new ve(this._view,!0,ue,ae),this._manipulatorTilt=new ve(this._view,!0,ue,ae),this._manipulatorDistance=new ve(this._view,!1,ue,ae),this.forEachManipulator(i=>{this._tool.manipulators.add(i),this._handles.add(i.events.on("grab-changed",()=>this._updateManipulatorInteractivity()))})}destroy(){this._handles.destroy(),this.forEachManipulator(e=>{this._tool.manipulators.remove(e),e.destroy()}),this._manipulatorHeading=null,this._manipulatorTilt=null,this._manipulatorDistance=null,this._tool=null,this._view=null}get interactive(){return this._interactive}set interactive(e){this._interactive!==e&&(this._interactive=e,this._updateManipulatorInteractivity())}createHeadingDragPipeline(e,i){return ne(this._manipulatorHeading,(s,a,n,r,l)=>{const{_view:c}=this,d=Math.sin(b(i.tiltParallelToSurface))*i.farDistanceRenderSpace,p=H(_e,i.observerRenderSpace,R(Xe,i.upVector,d)),m=le(Xe,i.northVector,i.upVector),v=De(p,i.northVector,m),f=$e(a,c,v).next(g=>({...g,manipulatorType:A.ROTATE}));e(s,f,n)})}createTiltDragPipeline(e,i){return ne(this._manipulatorTilt,(s,a,n,r,l)=>{const c=De(i.observerRenderSpace,i.targetDirection,i.tiltedUpVector),d=$e(a,this._view,c).next(p=>({...p,manipulatorType:A.ROTATE}));e(s,d,n)})}createDistanceDragPipeline(e,i){return ne(this._manipulatorDistance,(s,a,n,r,l)=>{const c=Tt(i.observerRenderSpace,i.targetDirection),d=a.next(Nt(this._view,s.location)).next(Kt(this._view,c)).next(p=>({...p,manipulatorType:A.SCALE}));e(s,d,n)})}updateManipulators(e){const{target:i}=e;this._manipulatorHeading.location=i,this._manipulatorTilt.location=i,this._manipulatorDistance.location=i;const s=O(),a=p=>{Me(s,p,s)},n=Ri(e);a(at(W,N(_e,n,n,n))),a(rt(e,W));const r=ae*te*n,l=R(_e,e.targetDirection,r);a(Ee(W,l));const c=ye(W,-we);B(c,c,oe(Je,-we)),this._manipulatorHeading.modelTransform=B(O(),s,c);const d=oe(W,we);B(d,d,ye(Je,Math.PI)),this._manipulatorTilt.modelTransform=Me(O(),s,d),this._manipulatorDistance.modelTransform=s}_updateManipulatorInteractivity(){const e=!this.grabbing;this.forEachManipulator(i=>{i.interactive=e&&this._interactive||i.grabbing})}forEachManipulator(e){e(this._manipulatorHeading,A.ROTATE),e(this._manipulatorTilt,A.ROTATE),e(this._manipulatorDistance,A.SCALE)}};const Ye={top:u(),bottom:u(),left:u(),right:u()},W=O(),Je=O(),_e=u(),Xe=u(),we=Math.PI/2;function Ri(t){const{verticalFieldOfView:i,horizontalFieldOfView:s}=t,a=i>180,n=s>180,r=t.farDistanceRenderSpace;if(a&&n)return Math.max(1,r);t.arcCentersPoints(r,Ye);const{left:l,right:c,top:d,bottom:p}=Ye,m=1.9*(a?xe(l,c):n?xe(p,l):Math.sqrt(Math.min(Le(p,d),Le(l,c))));return Math.max(1,Math.min(r,m))}class ct extends Re{constructor(e,i){super({view:e,autoScaleRenderObjects:!1,worldSized:!1,radius:qe,interactive:!1}),this._handles=new de;const s=Bt(this._color);this.renderObjects=[new L(St(s,qe,32,32))],i.manipulators.add(this),this._handles.add([w(()=>this._color,a=>{s.setParameters({color:a})},C)])}destroy(){this._handles.remove(),super.destroy()}get _color(){return G.toUnitRGBA(this.view.effectiveTheme.accentColor)}}o([h()],ct.prototype,"_color",null);const Qe=Symbol("dragHandles"),Ze=Symbol("hideManipulators");let $=class extends K{constructor(t){super(t),this._moveManipulation=null,this._observerManipulator=null,this._fieldOfViewManipulation=null,this._scaleOrientManipulation=null,this._moveHelperVisualElement=null,this._settings=new Yt({getTheme:()=>this.view.effectiveTheme}),this._grabbing=!1,this.viewshedComputedData=null}initialize(){this._moveManipulation=this._createMoveManipulation(),this._fieldOfViewManipulation=new Oi({view:this.view,tool:this.parentTool}),this._scaleOrientManipulation=new Ei({view:this.view,tool:this.parentTool}),this._observerManipulator=new ct(this.view,this.parentTool),this._createMoveHelperVisuals(),this.addHandles([w(()=>{const{observer:e}=this;return{observer:e,array:e?.toArray()}},({observer:e})=>{e!=null&&(this._moveManipulation.location=e,this._observerManipulator.location=e)},J),w(()=>{const{viewshedComputedData:e}=this;return{viewshedComputedData:e,observer:e?.observer}},({viewshedComputedData:e,observer:i},s)=>{this._grabbing&&i!==s?.observer||(this.removeHandles(Qe),e?.isValid()&&this.addHandles([this._buildObserverDragPipeline(e),this._buildFOVDragPipeline(e),this._buildScaleOrientDragPipeline(e)].filter(Ht),Qe))},C),w(()=>{const e=this.viewshedComputedData;return e?.isValid()?{viewshedCompData:e,target:e.targetRenderSpace,hFOV:e.horizontalFieldOfView,vFOV:e.verticalFieldOfView}:null},e=>{e!=null&&this._fieldOfViewManipulation.updateManipulatorsTransform(e.viewshedCompData)},C),w(()=>{const e=this.viewshedComputedData;return e?.isValid()?{viewshedCompData:e,hFOV:e.horizontalFieldOfView,vFOV:e.verticalFieldOfView,tilt:e.tilt}:null},e=>{e!=null&&this._fieldOfViewManipulation.updateManipulatorVisuals(e.viewshedCompData)},C),w(()=>this.analysisViewData.visible&&(this.viewshedComputedData?.isValid()??!1)&&!this.parentTool.placingTarget,e=>this._updateManipulationAvailability(e),C),w(()=>{const e=this.viewshedComputedData;if(!e?.isValid())return null;const{observer:i,target:s,verticalFieldOfView:a,horizontalFieldOfView:n}=e;return{viewshedCompData:e,observer:i,target:s,verticalFieldOfView:a,horizontalFieldOfView:n}},e=>{e!=null&&this._scaleOrientManipulation.updateManipulators(e.viewshedCompData)},C),w(()=>this.viewshedComputedData?.observerRenderSpace,e=>{e!=null&&this._updateMoveHelperVisualsLocation(e)},C)]);const t=e=>{this.addHandles([e.events.on("focus-changed",()=>this._updateManipulatorVisibility()),e.events.on("grab-changed",i=>{this._grabbing=i.action==="start"})])};this._forEachManipulator(t)}destroy(){this._moveManipulation=M(this._moveManipulation),this._fieldOfViewManipulation=M(this._fieldOfViewManipulation),this._scaleOrientManipulation=M(this._scaleOrientManipulation),this.parentTool.manipulators.remove(this._observerManipulator),this._observerManipulator=M(this._observerManipulator),this._destroyMoveHelperVisuals()}get viewshed(){return this.viewshedComputedData?.viewshed}get grabbing(){return this._grabbing}get observer(){return this.viewshed?.observer}set observer(t){const e=this.viewshed;e!=null&&(e.observer=t)}get discManipulator(){return this._moveManipulation.xyManipulation.discManipulator}onManipulatorSelectionChanged(){this._updateManipulatorVisibility()}hasManipulator(t){let e=!1;return this._forEachManipulator(i=>{e=e||i===t}),e}_someManipulatorSelected(){return this._moveManipulation.selected||this._fieldOfViewManipulation.selected||this._scaleOrientManipulation.selected}_someManipulatorHovering(){return this._moveManipulation.hovering||this._fieldOfViewManipulation.hovering||this._scaleOrientManipulation.hovering}_createMoveManipulation(){return new Jt({view:this.view,tool:this.parentTool,snapToScene:!1,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:!0,radius:Xt})}_buildObserverDragPipeline(t){const e={mode:"absolute-height",offset:0},i=t.observer;return i==null?null:this._moveManipulation.createDragPipeline((s,a,n,r,l)=>{r=r.next(ce(this,["observer"]));const c=t.observer.clone();if(c==null)return{steps:n,cancel:r};const d=ei.fromGeometry(c,Et(this.view.viewingMode));return{steps:n.next(Gt({operations:d})).next(p=>(this.observer=Rt(d.data.geometry,c.spatialReference),p)),cancel:r}},e,i.spatialReference,void 0)}_buildFOVDragPipeline(t){let e=0,i=0;return this._fieldOfViewManipulation.createDragPipeline((s,a,n)=>{if(t==null)return{steps:a,cancel:n};const r=t.viewshed;return n=n.next(ce(t,["horizontalFieldOfView","verticalFieldOfView"])),{steps:a.next(l=>{l.action==="start"&&(e=t.horizontalFieldOfView,i=t.verticalFieldOfView);const c=l.deltaAngle;let d=0;switch(l.side){case"left":d=e/2-c;break;case"right":d=e/2+c;break;case"top":d=i+2*c;break;case"bottom":d=i-2*c}return ee(l.side)?(d=ge.normalize(d),d=d>270?0:d>180?180:d,r.horizontalFieldOfView=2*d):r.verticalFieldOfView=d,l}),cancel:n}},t)}_buildScaleOrientDragPipeline(t){let e=0,i=0;const s=(a,n)=>(r,l,c)=>{if(t==null)return{steps:l,cancel:c};const d=t.viewshed;return c=c.next(ce(d,[a])),{steps:l=l.next(n(d,t)),cancel:c}};return st([this._scaleOrientManipulation.createHeadingDragPipeline(s("heading",(a,n)=>r=>(r.action==="start"&&(i=t.heading),a.heading=ge.normalize(i+r.deltaAngle),r)),t),this._scaleOrientManipulation.createTiltDragPipeline(s("tilt",(a,n)=>r=>{r.action==="start"&&(e=t.tilt);let l=e+r.deltaAngle;return l<-90?l=180:l>270&&(l=0),a.tilt=Pi.clamp(l),r}),t),this._scaleOrientManipulation.createDistanceDragPipeline(s("farDistance",(a,n)=>r=>{const l=D(Ai,r.renderEnd,n.observerRenderSpace),c=Se(l)*n.metersPerUnit,d=Oe(l,n.targetDirection)<0?yi:c;return a.farDistance=d,r}),t)])}_updateManipulationAvailability(t){this._moveManipulation.available=t,this._fieldOfViewManipulation.available=t,this._scaleOrientManipulation.available=t,this._observerManipulator.available=t}_updateManipulatorVisibility(){const t=this._someManipulatorSelected()||this._someManipulatorHovering()&&this.view.activeTool==null;if(t)this.removeHandles(Ze);else{const e=[],i=s=>{e.push(s.disableDisplay())};this._forEachManipulator(i),this.addHandles(e,Ze)}this._updateMoveHelperVisualsVisibility(t)}_forEachManipulator(t){this._moveManipulation.forEachManipulator(t),this._fieldOfViewManipulation.forEachManipulator(t),this._scaleOrientManipulation.forEachManipulator(t),t(this._observerManipulator)}_createMoveHelperVisuals(){this._destroyMoveHelperVisuals();const t=new Zt({view:this.view,attached:!0,style:{glowWidth:this._settings.visualElements.heightPlane.glowWidth,innerWidth:this._settings.visualElements.heightPlane.innerWidth},isDecoration:!0}),e=new Qt({view:this.view,extensionType:this._settings.visualElements.zVerticalLine.extensionType,attached:!0,innerWidth:1,writeDepthEnabled:!1,renderOccluded:he.OccludeAndTransparent,isDecoration:!0});this._moveHelperVisualElement={laserline:t,verticalLine:e},this.addHandles([w(()=>this._settings.visualElements.zVerticalLine,i=>i.apply(e),J),w(()=>this._settings.visualElements.heightPlane,i=>i.apply(t),J)])}_updateMoveHelperVisualsVisibility(t){t=this.analysisViewData.visible&&t;const e=this._moveHelperVisualElement;e!=null&&(e.verticalLine.visible=t,e.laserline.visible=t)}_updateMoveHelperVisualsLocation(t){const e=this._moveHelperVisualElement;if(e==null)return;const{laserline:i,verticalLine:s}=e;i.heightManifoldTarget=t,i.intersectsWorldUpAtLocation=t,t!=null&&s.setStartEndFromWorldDownAtLocation(t)}_destroyMoveHelperVisuals(){const t=this._moveHelperVisualElement;t!=null&&(t.laserline.destroy(),t.verticalLine.destroy(),this._moveHelperVisualElement=null)}get test(){return{moveManipulation:this._moveManipulation,fieldOfViewManipulation:this._fieldOfViewManipulation,scaleOrientManipulation:this._scaleOrientManipulation,moveHelperVisualElements:this._moveHelperVisualElement,viewshedComputedData:this.viewshedComputedData}}};o([h({constructOnly:!0})],$.prototype,"analysis",void 0),o([h({constructOnly:!0})],$.prototype,"analysisViewData",void 0),o([h({constructOnly:!0})],$.prototype,"parentTool",void 0),o([h({constructOnly:!0,nonNullable:!0})],$.prototype,"view",void 0),o([h()],$.prototype,"viewshed",null),o([h()],$.prototype,"_grabbing",void 0),o([h()],$.prototype,"grabbing",null),o([h()],$.prototype,"viewshedComputedData",void 0),o([h()],$.prototype,"observer",null),$=o([k("esri.views.3d.analysis.Viewshed.ViewshedSubTool")],$);const Ai=u(),Pi=new At(0,180);var Te;let V=Te=class extends ti{constructor(t){super(t),this.removeIncompleteOnCancel=!1,this.automaticManipulatorSelection=!1,this._stagedViewshed=null,this._stagedViewshedComputedData=null,this._creating=!1,this._selectedManipulator=null,this._selectedManipulatorSubTool=null}initialize(){this._intersector=ni(this.view.state.viewingMode);const t=this.analysisViewData.viewshedComputedDataHandles;this.addHandles([w(()=>t.some(e=>e.viewshedComputedData.isValid()),e=>{e&&this.finishToolCreation()},J),w(()=>this._stagedViewshed,e=>{this._stagedViewshedComputedData=e!=null?this.analysisViewData.viewshedComputedDataHandles.find(i=>i.viewshedComputedData.viewshed===e)?.viewshedComputedData:null},J),w(()=>this.firstGrabbedManipulator,e=>{e!=null&&this._selectManipulator(e)},Ft),w(()=>this.analysisViewData.visible,e=>{e||this._selectManipulator(null)}),w(()=>this.view.activeTool,e=>{e!==this&&e!=null&&this._selectManipulator(null)})]),this.subToolHandles=He(()=>t,({viewshedComputedData:e})=>{const i=new $({analysis:this.analysis,analysisViewData:this.analysisViewData,parentTool:this,view:this.view,viewshedComputedData:e});return{subTool:i,remove:()=>{this._selectedManipulatorSubTool===i&&this._selectManipulator(null),i.destroy()}}})}destroy(){this.subToolHandles=M(this.subToolHandles)}onDeactivate(){this.removeStaged()}get cursor(){return this.creating?"crosshair":null}_selectManipulator(t){const e=this._selectedManipulator;e!=null&&(e.selected=!1,this._selectedManipulator=null,this._selectedManipulatorSubTool?.onManipulatorSelectionChanged(),this._selectedManipulatorSubTool=null),t!=null&&(t.selected=!0,this._selectedManipulator=t,this._selectedManipulatorSubTool=this.subToolHandles.find(i=>i.subTool.hasManipulator(t))?.subTool,this._selectedManipulatorSubTool?.onManipulatorSelectionChanged())}get selectedViewshed(){return this._selectedManipulatorSubTool?.viewshed}set selectedViewshed(t){this.selectViewshed(t)}get selectedViewshedComputedData(){return this._selectedManipulatorSubTool?.viewshedComputedData}get stagedViewshed(){return this._stagedViewshed}get grabbing(){return this.subToolHandles.some(({subTool:t})=>t.grabbing)}get creating(){return this._creating&&this.active}get placingTarget(){return this._stagedViewshed!=null}createViewsheds(){this._creating=!0}onManipulatorSelectionChanged(){this.subToolHandles.forEach(t=>t.subTool.onManipulatorSelectionChanged())}onInputEvent(t){switch(t.type){case"immediate-click":this._clickDeselectHandler();break;case"immediate-double-click":this._doubleClickHandler(t);break;case"pointer-move":this._pointerMoveHandler(t);break;case"key-down":Ie.cancel===t.key?this._cancelKeyHandler(t):Ie.delete.includes(t.key)&&this._deleteKeyHandler()}}onInputEventAfter(t){t.type==="immediate-click"&&this._clickPlacementHandler(t)}_clickDeselectHandler(){this.hasFocusedManipulators||this._selectManipulator(null)}_clickPlacementHandler(t){if(!this.creating||this.hasFocusedManipulators)return;const e=this._stagedViewshed,i=this._intersectScreen(t,tt);if(i!=null){if(e==null){i.mapPoint.z=(i.mapPoint.z??0)+2;const s=new gi({observer:i.mapPoint.clone()});this.analysis.viewsheds.add(s),this._stagedViewshed=s,this._updateStagedViewshed(i.scenePoint)}else{this._updateStagedViewshed(i.scenePoint);const s=this._stagedViewshed;this._stagedViewshed=null,this.selectViewshed(s)}t.stopPropagation()}}_doubleClickHandler(t){this.creating&&(this.removeStaged(),this._selectManipulator(null),this._creating=!1,this.view.activeTool=null,t.stopPropagation())}_pointerMoveHandler(t){if(!this.creating||this._stagedViewshed==null)return;const e=this._intersectScreen(t,tt);e!=null&&this._updateStagedViewshed(e.scenePoint)}_cancelKeyHandler(t){if(this.creating){if(this.removeStaged())return this._selectManipulator(null),void t.stopPropagation();this._creating=!1}else if(!this.grabbing)return this.selectViewshed(null),void t.stopPropagation()}_deleteKeyHandler(){this.creating&&this.removeStaged(),this.selectedViewshed!=null&&this.analysis.viewsheds.remove(this.selectedViewshed)}_updateStagedViewshed(t){const e=this._stagedViewshed,i=this._stagedViewshedComputedData;if(e==null||i==null)return;const{heading:s,tilt:a,farDistance:n}=Fi(this.view,i,t);e.farDistance=n,e.tilt=a,e.heading=s}removeStaged(){return this._stagedViewshed!=null&&(this.analysis.viewsheds.remove(this._stagedViewshed),this._stagedViewshed=null,!0)}selectViewshed(t){if(t!=null)for(const i of this.view.tools.items)i!==this&&i instanceof Te&&i.selectViewshed(null);const e=this.subToolHandles.find(i=>i.subTool.viewshed===t)?.subTool;this._selectManipulator(e?.discManipulator)}_intersectScreen(t,e){const i=zt(t);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(i,this._intersector);const s=this._intersector.results.min,a=e.scenePoint;if(!s.getIntersectionPoint(a))return null;const n=e.mapPoint;return n.spatialReference=this.view.spatialReference,this.view.renderCoordsHelper.fromRenderCoords(a,n),n==null?null:e}get test(){return{subTools:this.subToolHandles.map(t=>t.subTool.test),selectedSubTool:this._selectedManipulatorSubTool?.test,stagedViewshed:this._stagedViewshed}}};function Fi(t,e,i){const s=e.observerRenderSpace,a=D(zi,i,s),n=Se(a)*e.metersPerUnit,r=t.renderCoordsHelper.basisMatrixAtPosition(s,ki),l=N(xi,r[8],r[9],r[10]),c=xt(s,l,Ui),d=Lt(c,i,Li),p=D(d,d,s),m=fe(Ve(a,p))*(Oe(l,a)<0?-1:1)+90,v=N(et,r[4],r[5],r[6]),f=fe(Ve(v,p)),g=N(et,r[0],r[1],r[2]);return{heading:Oe(p,g)<0?360-f:f,tilt:m,farDistance:n}}o([h({constructOnly:!0})],V.prototype,"view",void 0),o([h()],V.prototype,"analysisViewData",void 0),o([h()],V.prototype,"removeIncompleteOnCancel",void 0),o([h()],V.prototype,"automaticManipulatorSelection",void 0),o([h({constructOnly:!0})],V.prototype,"analysis",void 0),o([h()],V.prototype,"subToolHandles",void 0),o([h()],V.prototype,"_stagedViewshed",void 0),o([h()],V.prototype,"_stagedViewshedComputedData",void 0),o([h()],V.prototype,"_creating",void 0),o([h({readOnly:!0})],V.prototype,"cursor",null),o([h()],V.prototype,"_selectedManipulator",void 0),o([h()],V.prototype,"_selectedManipulatorSubTool",void 0),o([h()],V.prototype,"selectedViewshed",null),o([h()],V.prototype,"selectedViewshedComputedData",null),o([h()],V.prototype,"grabbing",null),o([h()],V.prototype,"creating",null),o([h()],V.prototype,"placingTarget",null),V=Te=o([k("esri.views.3d.analysis.Viewshed.ViewshedTool")],V);const zi=u(),xi=u(),Li=u(),et=u(),ki=O(),Ui=Pt(),tt={mapPoint:new re,scenePoint:u()},Ii=V;let T=class extends Ut(K){constructor(t){super(t),this.type="viewshed-view-3d",this.analysis=null,this.tool=null,this.viewshedComputedDataHandles=null,this._placementTask=null}get selectedViewshed(){return this.tool?.selectedViewshed}set selectedViewshed(t){const{tool:e}=this;e!=null&&(e.selectedViewshed=t)}get selectedViewshedComputedData(){return this.tool?.selectedViewshedComputedData}initialize(){this._initializeUpdateHandle(),this.viewshedComputedDataHandles=He(()=>this.analysis.viewsheds,t=>{const e=new _({renderCoordsHelper:this.view.renderCoordsHelper,viewshed:t}),i=Symbol();return this.addHandles(w(()=>e.isValid(),(s,a)=>{this.visible&&(s?this._addViewshedsToRenderer(e):a&&this._removeViewshedsFromRenderer(e))},C)),{viewshedComputedData:e,remove:()=>{this.removeHandles(i),this._removeViewshedsFromRenderer(e),e.destroy()}}}),this._analysisVisualization=new x({view:this.view,analysisViewData:this,isDecoration:!this.parent}),this.addHandles([w(()=>this.visible,t=>{const e=this.viewshedComputedDataHandles.map(i=>i.viewshedComputedData).filter(i=>i.isValid());t?this._addViewshedsToRenderer(e):this._removeViewshedsFromRenderer(e)}),w(()=>this.view.renderCoordsHelper,t=>{this.viewshedComputedDataHandles.forEach(({viewshedComputedData:e})=>e.renderCoordsHelper=t)}),ii(this,Ii)])}destroy(){this._placementTask=ke(this._placementTask),si(this),this._analysisVisualization=M(this._analysisVisualization),this._removeViewshedsFromRenderer(this.viewshedComputedDataHandles.map(t=>t.viewshedComputedData))}async createViewsheds(t){return this._placementTask=ke(this._placementTask),this._placementTask=ai(this,t),this.tool!=null&&this.tool.createViewsheds(),await this._placementTask.promise}_initializeUpdateHandle(){const t=this.view._stage.renderer.plugins.plugins.find(e=>e instanceof kt);t&&(this._updateHandleInRenderer=t.updateViewsheds.bind(t))}_addViewshedsToRenderer(t){this._updateHandleInRenderer({adds:t})}_removeViewshedsFromRenderer(t){this._updateHandleInRenderer({removes:t})}};o([h({readOnly:!0})],T.prototype,"type",void 0),o([h({constructOnly:!0,nonNullable:!0})],T.prototype,"analysis",void 0),o([h()],T.prototype,"tool",void 0),o([h()],T.prototype,"selectedViewshed",null),o([h()],T.prototype,"selectedViewshedComputedData",null),o([h()],T.prototype,"viewshedComputedDataHandles",void 0),o([h()],T.prototype,"_analysisVisualization",void 0),o([h()],T.prototype,"_placementTask",void 0),T=o([k("esri.views.3d.analysis.ViewshedAnalysisView3D")],T);const us=T;export{us as default};
