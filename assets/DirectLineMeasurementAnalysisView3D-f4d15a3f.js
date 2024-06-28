import{aj as o,ak as l,am as ne,aq as ae,aQ as E,aY as S,aK as Se,ph as ze,l4 as Ve,l5 as Me,lb as B,f7 as w,l7 as U,pi as q,lg as $e,aA as Te,lj as F,lc as re,ll as De,lm as xe,ln as Re,pj as je,lo as Ge,mi as Ne,lr as He,lu as Ie,mW as ke,lz as Qe,pk as We,pl as Be,lB as le,lf as ce,pm as Ue,lM as qe,cr as K,ef as Y,ee as J,dz as Ae,ed as Ee,fj as Fe,dA as Z,cM as f,cY as Ke,eW as j,pn as de,po as ue,e_ as he,lZ as Ye,ao as L,fg as N,pp as Je,eH as Ze,f1 as Xe,hu as et,pq as tt,pr as it,ps as ge,pt as st,pu as pe,pv as nt,pw as _e,oD as X,px as at,ai as rt,eP as ot,eQ as lt,nQ as ee,bK as ct,py as dt,bI as ut,pz as ht,e2 as me,fr as gt,m1 as Pe,m0 as oe}from"./index-ab96db07.js";import{e as z,a as pt}from"./interfaces-0db192a9.js";import{s as _t}from"./AnalysisView3D-7e79c478.js";import{r as mt,t as vt}from"./projectionUtils-4625ae99.js";import{f as yt,i as Ce,a as te}from"./geodesicLengthMeasurementUtils-b0b02496.js";import{g as ie,y as ve,j as wt,M as ye,w as bt}from"./TextOverlayItem-1bc2b327.js";import{f as se,_ as we,m as R,v as be}from"./Segment-67d40ba6.js";import{a as ft,f as H}from"./LineVisualElement-f0fcad77.js";import{D as Lt}from"./RightAngleQuadVisualElement-8e830bef.js";let $=class extends ae{constructor(t){super(t)}initialize(){this.addHandles([E(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:t,startPoint:e})=>{t.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(e)},S),E(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:t,endPoint:e})=>{t.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(e)},S),E(()=>({result:this._computedResult,viewData:this.viewData}),({result:t,viewData:e})=>{e.result=t},S)])}_applyProjectionAndElevationAlignment(t){if(t==null)return t;const{spatialReference:e,elevationProvider:i}=this.view;return mt(t,e,i)??(vt(this.analysis,t.spatialReference,Se.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e,measurementMode:i}=this.viewData;if(t==null||e==null)return null;const s=ze(t,e),n=yt(t,e);if(s==null)return null;let a,d;switch(i){case z.Auto:d=n!=null?"geodesic":"euclidean",a=n??s.horizontal;break;case z.Geodesic:if(n==null)return null;d="geodesic",a=n;break;case z.Euclidean:d="euclidean",a=s.horizontal}return{mode:d,directDistance:s.direct,horizontalDistance:a,verticalDistance:s.vertical,distance:i===z.Euclidean||s.horizontal.value<=Ce?s.direct:n??s.horizontal}}};o([l()],$.prototype,"view",void 0),o([l()],$.prototype,"analysis",void 0),o([l()],$.prototype,"viewData",void 0),o([l()],$.prototype,"_computedResult",null),$=o([ne("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],$);var y,A;(function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"})(y||(y={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(A||(A={}));function At(t){const e=new Ve,{vertex:i,fragment:s}=e;Me(i,t),i.uniforms.add(new B("width",a=>a.width)),e.attributes.add(w.POSITION,"vec3"),e.attributes.add(w.NORMAL,"vec3"),e.attributes.add(w.UV0,"vec2"),e.attributes.add(w.LENGTH,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.code.add(U`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add(new B("outlineSize",a=>a.outlineSize),new q("outlineColor",a=>a.outlineColor),new B("stripeLength",a=>a.stripeLength),new q("stripeEvenColor",a=>a.stripeEvenColor),new q("stripeOddColor",a=>a.stripeOddColor));const n=1/Math.sqrt(2);return s.code.add(U`
    const float INV_SQRT2 = ${U.float(n)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),e}const Et=Object.freeze(Object.defineProperty({__proto__:null,build:At},Symbol.toStringTag,{value:"Module"}));class k extends De{constructor(e,i,s){super(e,i,s)}initializeProgram(e){return new xe(e.rctx,k.shader.get().build(this.configuration),Oe)}_setPipelineState(e){const i=e===re.NONE,s=this.configuration;return Re({blending:s.transparent?i?je:Ge(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Ne.LESS},depthWrite:He,colorWrite:Ie})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return ke.TRIANGLE_STRIP}}k.shader=new $e(Et,()=>Te(()=>import("./MeasurementArrow.glsl-8202fe4c.js"),["./MeasurementArrow.glsl-8202fe4c.js","./index-ab96db07.js","./index-74ab7f40.css","./interfaces-0db192a9.js","./TextOverlayItem-1bc2b327.js","./unitFormatUtils-97d022f1.js","./AnalysisView3D-7e79c478.js","./projectionUtils-4625ae99.js","./geodesicLengthMeasurementUtils-b0b02496.js","./geometryEngine-ebfb00c5.js","./geometryEngineBase-2eacdee6.js","./hydrated-33355f53.js","./Segment-67d40ba6.js","./LineVisualElement-f0fcad77.js","./RightAngleQuadVisualElement-8e830bef.js","./EngineVisualElement-02def4a8.js"],import.meta.url));let I=class extends Qe{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=re.NONE}};o([F()],I.prototype,"polygonOffsetEnabled",void 0),o([F()],I.prototype,"transparent",void 0),o([F({count:re.COUNT})],I.prototype,"transparencyPassType",void 0);const Oe=new Map([[w.POSITION,0],[w.NORMAL,1],[w.UV0,2],[w.LENGTH,3]]);class Pt extends Be{constructor(e){super(e,new Ot),this._vertexAttributeLocations=Oe,this.produces=new Map([[le.OPAQUE_MATERIAL,i=>!this._transparent&&i===ce.Color],[le.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,i=>this._transparent&&i===ce.Color]]),this._configuration=new I}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}intersect(){}createGLMaterial(e){return new Ct(e)}createBufferWriter(){return new Dt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class Ct extends Ue{beginSlot(e){return this.ensureTechnique(k,e)}}class Ot extends qe{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=K(1,.5,0,1),this.stripeEvenColor=K(1,1,1,1),this.stripeOddColor=K(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const St=We().vec3f(w.POSITION).vec3f(w.NORMAL).vec2f(w.UV0).f32(w.LENGTH),zt=f(),Vt=f(),Mt=f(),$t=f(),Tt=f();let Dt=class{constructor(){this.vertexBufferLayout=St}elementCount(e){return 2*(e.attributes.get(w.POSITION).indices.length/2+1)}write(e,i,s,n,a){const{data:d,indices:h}=s.attributes.get(w.POSITION),c=s.attributes.get(w.NORMAL).data,u=d.length/3;h&&h.length!==2*(u-1)&&console.warn("MeasurementArrowMaterial does not support indices");const r=zt,g=Vt,m=Mt,p=$t,P=Tt,G=n.position,T=n.normal,C=n.uv0;let O=0;for(let b=0;b<u;++b){const x=3*b;if(Y(r,d[x],d[x+1],d[x+2]),b<u-1){const D=3*(b+1);Y(g,d[D],d[D+1],d[D+2]),Y(P,c[D],c[D+1],c[D+2]),J(P,P),Ae(m,g,r),J(m,m),Ee(p,P,m),J(p,p)}const W=Fe(r,g);e&&i&&(Z(r,r,e),Z(g,g,e),Z(p,p,i));const V=a+2*b,M=V+1;G.setVec(V,r),G.setVec(M,r),T.setVec(V,p),T.setVec(M,p),C.set(V,0,O),C.set(V,1,-1),C.set(M,0,O),C.set(M,1,1),b<u-1&&(O+=W)}const Q=n.length;for(let b=0;b<2*u;++b)Q.set(a+b,O)}},xt=class extends ft{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=f(),this._originTransform=Ke(),this._arrowCenter=f(),this._renderOccluded=j.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=de(),this._contrastColor=de(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){ue(e,this._color)||(he(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){ue(e,this._color)||(he(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e;this._arrowMaterial=new Pt({outlineColor:e,stripeEvenColor:s,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new Ye,this._handles.add(E(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=L(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(this._geometry?.startRenderSpace==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,s,n){const a=this.view,d=a.renderCoordsHelper,h=[],c=[],u=(r,g)=>{const m=N.get();Ae(m,r,s),h.push(m),c.push(g)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const r=N.get();if(d.worldUpAtPosition(this._arrowCenter,r),Rt(e,i,r)){const{heading:g,tilt:m}=a.camera,{direction:p}=Je(a,e,g,m,jt);Ze(r,p)}u(e,r),u(i,r)}else{n.eval(.5,this._arrowCenter);const r=this._arrowSubdivisions+1&-2;for(let g=0;g<r;++g){const m=g/(r-1),p=N.get(),P=N.get();n.eval(m,p),d.worldUpAtPosition(p,P),u(p,P)}}return Xe(this._arrowMaterial,h,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e,n=e,a=e;this._arrowMaterial.setParameters({stripeEvenColor:s,outlineColor:n,stripeOddColor:a})}};function Rt(t,e,i){const s=et(fe,e,t),n=Ee(fe,s,i);return tt(n)===0}const fe=f(),jt=it();let v=class extends ae{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,s=ge(e),n=st(e,.75),a=ge(pe(e)),d=pe(i,nt.Low);return{accentColor:s,contrastColor:a,translucentAccentColor:n,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:_e(d,.6),textCalloutColor:_e(d,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(this.actualVisualizedMeasurement==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:n}=i,a=s.value,d=n.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){const{measurementMode:t,result:e}=this.analysisView;switch(t){case z.Auto:return e!=null&&e.horizontalDistance.value>Ce?"geodesic":"euclidean";case z.Euclidean:return"euclidean";case z.Geodesic:return"geodesic"}}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){return this.actualVisualizedMeasurement==="geodesic"?{direct:null,horizontal:this._segmentLabel,vertical:this._verticalLabel}:{direct:this._segmentLabel,horizontal:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=f(),this._endPosition=f(),this._cornerPosition=f(),this._startPositionAtSeaLevel=f(),this._endPositionAtSeaLevel=f(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=A.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:n,geodesicProjectionLineWidth:a,directLabelFontSize:d,verticalLabelFontSize:h,horizontalLabelFontSize:c}=t;this._segmentVisualElement=new xt({...e,geometry:null,renderOccluded:j.OccludeAndTransparent}),this._triangleVisualElement=new H({...e,width:n,renderOccluded:j.OccludeAndTransparent}),this._rightAngleQuad=new Lt({...e,renderOccluded:j.OccludeAndTransparent});const u={...e,polygonOffset:!0,renderOccluded:j.OccludeAndTransparent};this._projectedGeodesicLine=new H({...u,width:a,stipplePattern:X(s)}),this._geodesicStartHint=new H({...u,width:i,stipplePattern:X(s)}),this._geodesicEndHint=new H({...u,width:i,stipplePattern:X(s)}),this._segmentLabel=new se({...e,fontSize:d}),this._verticalLabel=new se({...e,fontSize:h}),this._horizontalLabel=new se({...e,fontSize:c}),this.addHandles([E(()=>{const{elevationAlignedStartPoint:r,elevationAlignedEndPoint:g}=this.analysisView,m=this.view;return{view:m,camera:m.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:r,elevationAlignedEndPoint:g,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},r=>this._updateGeometryAndViewMode(r),S),E(()=>({visible:this.visible,viewMode:this.viewMode}),r=>this._updateVisualElementVisibility(r),S),E(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),r=>this._updateLabelText(r),S),E(()=>({visible:this.visible,viewMode:this.viewMode}),r=>this._updateLabelVisibility(r),S),E(()=>this._measurementArrowStripeLength,r=>this._updateSegmentStripeLength(r),S),at(async()=>this._updateMessageBundle()),E(()=>this._parameters,({textBackgroundColor:r,textCalloutColor:g,textColor:m,translucentAccentColor:p,accentColor:P,contrastColor:G})=>{const{_segmentLabel:T,_verticalLabel:C,_horizontalLabel:O,_triangleVisualElement:Q,_rightAngleQuad:b,_projectedGeodesicLine:x,_geodesicStartHint:W,_geodesicEndHint:V,_segmentVisualElement:M}=this;T.backgroundColor=r,T.calloutColor=g,T.textColor=m,C.backgroundColor=r,C.calloutColor=g,C.textColor=m,O.backgroundColor=r,O.calloutColor=g,O.textColor=m,Q.color=p,b.color=p,x.color=p,W.color=p,V.color=p,M.color=P,M.contrastColor=G},rt)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=L(this._segmentVisualElement),this._triangleVisualElement=L(this._triangleVisualElement),this._rightAngleQuad=L(this._rightAngleQuad),this._projectedGeodesicLine=L(this._projectedGeodesicLine),this._geodesicStartHint=L(this._geodesicStartHint),this._geodesicEndHint=L(this._geodesicEndHint),this._segmentLabel=L(this._segmentLabel),this._verticalLabel=L(this._verticalLabel),this._horizontalLabel=L(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:d,stripeLength:h}){const c=t.renderCoordsHelper;if(c==null||s==null||n==null||s.equals(n))return;let u=this._startPosition,r=this._endPosition;c.toRenderCoords(s,u),c.toRenderCoords(n,r);const g=a===A.AboveSegment?1:-1,m=g*(c.getAltitude(r)-c.getAltitude(u));m<0&&(u=this._endPosition,r=this._startPosition);const p=d==="geodesic"?new we(this._startPosition,this._endPosition,c.spatialReference):new R(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=p,this._updateSegmentStripeLength(h),i){case y.Direct:this._updateSegment(p,a);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:p,orientation:a,startPosition:u,endPosition:r,deltaSign:g,altitudeDelta:m});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:a,startPosition:u,endPosition:r})}}_updateSegment(t,e){this._segmentLabel.anchor=e===A.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:n,endPosition:a,deltaSign:d,altitudeDelta:h}){const c=this._cornerPosition;t.worldUpAtPosition(n,c),ot(c,c,d*Math.abs(h)),lt(c,c,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[c[0],c[1],c[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:c,next:a};const u=new R(n,c),r=new R(c,a),g=Gt(n,a,c,s,e);this._segmentLabel.anchor=g.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._verticalLabel.anchor=g.vertical,this._horizontalLabel.geometry={type:"segment",segment:r,sampleLocation:"center"},this._horizontalLabel.anchor=g.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const n=new we(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new R(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new R(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=e===A.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.directDistance:t.horizontalDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,n=this._verticalLabel;if(i.visible=!1,s.visible=!1,n.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,n.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:n}=e,a=this.analysisView.unit,d=h=>({directDistance:"",horizontalDistance:"",verticalDistance:"",...h});switch(a){case"metric":return d({directDistance:i&&ye(t,i),horizontalDistance:s&&ye(t,s),verticalDistance:n&&bt(t,n)});case"imperial":return d({directDistance:i&&ve(t,i),horizontalDistance:s&&ve(t,s),verticalDistance:n&&wt(t,n)});default:return d({directDistance:i&&ie(t,i,a),horizontalDistance:s&&ie(t,s,a),verticalDistance:n&&ie(t,n,a)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===A.Auto?this.view.state.camera.aboveGround?A.AboveSegment:A.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!e?.state)return!1;const i=e.state.camera,s=e.renderCoordsHelper;if(!s)return!1;const n=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/n>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&ee(s,"meters");break;case"imperial":i=s&&ee(s,ct(s.value,s.unit));break;default:i=s&&ee(s,e)}return i==null?null:dt(i.value/30)*ut(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,ht("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){}};function Gt(t,e,i,s,n){const a=Nt,d=Ht;n.projectToRenderScreen(i,a),n.projectToRenderScreen(e,d);const h={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const c=It,u=kt;if(te(t,i,n,c),te(t,e,n,u),me(c,u)>=Le){const r=Math.sign(c[1])===Math.sign(u[1]);h.segment=r?be(h.vertical):h.vertical}else{const r=Qt;te(i,e,n,r),me(r,u)>=Le&&(h.segment=Math.sign(r[0])===Math.sign(u[0])?be(h.horizontal):h.horizontal)}}if(s===A.BelowSegment){const c=u=>u==="top"?"bottom":"top";h.segment=c(h.segment),h.horizontal=c(h.horizontal),h.vertical=c(h.vertical)}return h}o([l()],v.prototype,"_parameters",null),o([l()],v.prototype,"_triangleOrientationOverride",void 0),o([l()],v.prototype,"messages",void 0),o([l()],v.prototype,"view",void 0),o([l()],v.prototype,"analysis",void 0),o([l()],v.prototype,"analysisView",void 0),o([l()],v.prototype,"loadingMessages",void 0),o([l()],v.prototype,"visible",null),o([l()],v.prototype,"viewMode",null),o([l()],v.prototype,"actualVisualizedMeasurement",null),o([l()],v.prototype,"visualElementOrientation",void 0),o([l()],v.prototype,"triangleCollapseRatioThreshold",void 0),o([l()],v.prototype,"allowVisualElementsOrientationChange",null),o([l()],v.prototype,"labels",null),o([l()],v.prototype,"_labelsText",null),o([l()],v.prototype,"_actualVisualElementsOrientation",null),o([l()],v.prototype,"_measurementArrowStripeLength",null),v=o([ne("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Le=Math.cos(gt(12)),Nt=Pe(),Ht=Pe(),It=oe(),kt=oe(),Qt=oe();let _=class extends _t(ae){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=z.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new $({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=L(this._analysisController),this._analysisVisualization=L(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){return this._analysisVisualization.labels.direct?.text??""}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal?.text??""}get verticalLabelText(){return this._analysisVisualization.labels.vertical?.text??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){}};o([l()],_.prototype,"updating",null),o([l({readOnly:!0})],_.prototype,"type",void 0),o([l({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),o([l()],_.prototype,"result",void 0),o([l()],_.prototype,"measurementMode",void 0),o([l()],_.prototype,"elevationAlignedStartPoint",void 0),o([l()],_.prototype,"elevationAlignedEndPoint",void 0),o([l({readOnly:!0})],_.prototype,"viewMode",null),o([l({readOnly:!0})],_.prototype,"actualVisualizedMeasurement",null),o([l()],_.prototype,"visualElementOrientation",null),o([l()],_.prototype,"allowVisualElementsOrientationChange",null),o([l()],_.prototype,"triangleCollapseRatioThreshold",null),o([l({readOnly:!0})],_.prototype,"directLabelText",null),o([l({readOnly:!0})],_.prototype,"horizontalLabelText",null),o([l({readOnly:!0})],_.prototype,"verticalLabelText",null),o([l()],_.prototype,"_analysisVisualization",void 0),o([l()],_.prototype,"_analysisController",void 0),o([l()],_.prototype,"unit",null),o([l(pt)],_.prototype,"_defaultUnit",void 0),_=o([ne("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],_);const Wt=_,si=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"}));export{si as D,At as n};