import{bm as Me,ah as o,ai as d,ak as ce,ao as de,bn as b,gP as De,aG as ge,aL as A,aR as z,nW as Q,i0 as le,hN as Te,nX as xe,nY as pe,nZ as Re,n_ as je,jB as Ge,jC as Ne,jI as q,b3 as L,jE as X,n$ as Y,jN as He,aA as ke,jQ as J,jM as he,jS as Ie,jT as Ue,o0 as We,jU as Be,o1 as Fe,jV as Qe,kA as qe,jY as Xe,j_ as Ye,o2 as Je,k3 as Ke,o3 as Ze,o4 as et,jJ as _e,k6 as me,o5 as tt,ke as it,ls as K,bl as Z,bk as ee,lu as ze,bj as st,fU as te,fV as nt,lr as G,nF as ve,o6 as ye,lt as be,nN as at,am as f,lA as N,lz as rt,o7 as we,o8 as ot,o9 as fe,oa as lt,ob as Le,oc as ie,od as ct,ag as dt,gX as ht,gY as ut,gp as gt,oe as pt,gj as _t,of as mt,og as Pe,oh as vt,mF as Ve,nS as ue}from"./index-6a39f5fd.js";import{t as yt,e as x,M as bt,y as wt,b as ft,R as Lt,i as se,a as Pt}from"./UnitNormalizer-f7181d2a.js";import{r as Ct,a as At,b as St,u as H,s as Et}from"./LineVisualElement-66a841fd.js";import{r as k,f as ne}from"./unitFormatUtils-b39bfd7b.js";import{g as ae,_ as Ce,m as j,h as I,R as re,y as Ot,L as oe,d as zt,C as Ae}from"./Segment-de6d8e50.js";import{z as Vt}from"./RightAngleQuadVisualElement-177e7a1f.js";const $e="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",$t=Me.getLogger($e),Mt=1e5;let M=class extends de{constructor(e){super(e),this._unitNormalizer=new yt,this._tempStartPosition=b(),this._tempEndPosition=b(),this._tempCornerPosition=b()}initialize(){const e=this.view.spatialReference,i=De(e),n=i===Re?je:i;this._sphericalPCPF=n;const s=ge(e,n);this._unitNormalizer.spatialReference=s?n:e,this.addHandles([A(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:a,startPoint:r})=>{a.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(r)},z),A(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:a,endPoint:r})=>{a.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(r)},z),A(()=>({result:this._computedResult,viewData:this.viewData}),({result:a,viewData:r})=>{r.result=a},z)])}_applyProjectionAndElevationAlignment(e){if(e==null)return e;const{spatialReference:i,elevationProvider:n}=this.view;return Ct(e,i,n)??(At(this.analysis,e.spatialReference,$t),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:i,measurementMode:n}=this.viewData;if(e==null||i==null)return null;const s=this._euclideanDistances(e,i),a=this._geodesicDistance(e,i,s.horizontal.value),r=n===x.Geodesic||n===x.Auto&&s.horizontal.value>Mt?"geodesic":"euclidean";return{mode:r,distance:r==="euclidean"?s.direct:a,directDistance:s.direct,horizontalDistance:s.horizontal,verticalDistance:s.vertical,geodesicDistance:a}}_euclideanDistances(e,i){const n=e.clone();n.z=i.z;const s=this._tempStartPosition,a=this._tempEndPosition,r=this._tempCornerPosition,u=this.view.spatialReference,c=this._sphericalPCPF,h=ge(u,c)?c:u;Q(e,s,h),Q(i,a,h),Q(n,r,h);const l=le(s,a),g=le(r,a),m=Math.abs(i.z-e.z),p=P=>this._unitNormalizer.normalizeDistance(P),S=p(l),D=p(g),E=p(m);return{direct:k(S,"meters"),horizontal:k(D,"meters"),vertical:k(E,"meters")}}_geodesicDistance(e,i,n){const s=e.spatialReference,a=new Te({spatialReference:s});a.addPath([e,i]);const r=s.isGeographic&&bt(s)?wt([a],"meters")[0]:s.isWebMercator?xe(a,"meters"):null,u=r??this._fallbackGeodesicDistance(e,i,n);return k(u,"meters")}_fallbackGeodesicDistance(e,i,n){if(pe(e,Se)&&pe(i,Ee)){const s=new Lt;return ft(s,Se,Ee),s.distance}return n}};o([d()],M.prototype,"view",void 0),o([d()],M.prototype,"analysis",void 0),o([d()],M.prototype,"viewData",void 0),o([d()],M.prototype,"_computedResult",null),M=o([ce($e)],M);const Se=b(),Ee=b();var y,C;(function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"})(y||(y={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(C||(C={}));function Dt(t){const e=new Ge,{vertex:i,fragment:n}=e;Ne(i,t),i.uniforms.add(new q("width",a=>a.width)),e.attributes.add(L.POSITION,"vec3"),e.attributes.add(L.NORMAL,"vec3"),e.attributes.add(L.UV0,"vec2"),e.attributes.add(L.AUXPOS1,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.code.add(X`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),n.uniforms.add(new q("outlineSize",a=>a.outlineSize),new Y("outlineColor",a=>a.outlineColor),new q("stripeLength",a=>a.stripeLength),new Y("stripeEvenColor",a=>a.stripeEvenColor),new Y("stripeOddColor",a=>a.stripeOddColor));const s=1/Math.sqrt(2);return n.code.add(X`
    const float INV_SQRT2 = ${X.float(s)};

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
  `),e}const Tt=Object.freeze(Object.defineProperty({__proto__:null,build:Dt},Symbol.toStringTag,{value:"Module"}));class W extends Ie{constructor(e,i,n){super(e,i,n)}initializeProgram(e){return new Ue(e.rctx,W.shader.get().build(this.configuration),We)}_setPipelineState(e){const i=e===he.NONE,n=this.configuration;return Be({blending:n.transparent?i?Fe:Qe(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:qe.LESS},depthWrite:Xe,colorWrite:Ye})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Je.TRIANGLE_STRIP}}W.shader=new He(Tt,()=>ke(()=>import("./MeasurementArrow.glsl-e2c944cd.js"),["./MeasurementArrow.glsl-e2c944cd.js","./index-6a39f5fd.js","./index-c3d91843.css","./UnitNormalizer-f7181d2a.js","./Segment-de6d8e50.js","./unitFormatUtils-b39bfd7b.js","./LineVisualElement-66a841fd.js","./elevationInfoUtils-d136536c.js","./RightAngleQuadVisualElement-177e7a1f.js"],import.meta.url));let U=class extends Ke{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=he.NONE}};o([J()],U.prototype,"polygonOffsetEnabled",void 0),o([J()],U.prototype,"transparent",void 0),o([J({count:he.COUNT})],U.prototype,"transparencyPassType",void 0);class xt extends et{constructor(e){super(e,new jt),this._configuration=new U}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}intersect(){}produces(e,i){return i===_e.Color||i===_e.Alpha?e===(this._transparent?me.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:me.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Rt(e)}createBufferWriter(){return new Wt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class Rt extends tt{beginSlot(e){return this.ensureTechnique(W,e)}}class jt extends it{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=K(1,.5,0,1),this.stripeEvenColor=K(1,1,1,1),this.stripeOddColor=K(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const Gt=Ze().vec3f(L.POSITION).vec3f(L.NORMAL).vec2f(L.UV0).f32(L.AUXPOS1),Nt=b(),Ht=b(),kt=b(),It=b(),Ut=b();let Wt=class{constructor(){this.vertexBufferLayout=Gt}elementCount(e){return 2*(e.attributes.get(L.POSITION).indices.length/2+1)}write(e,i,n,s,a){const{data:r,indices:u}=n.attributes.get(L.POSITION),c=n.attributes.get(L.NORMAL).data,h=r.length/3;u&&u.length!==2*(h-1)&&console.warn("MeasurementArrowMaterial does not support indices");const l=Nt,g=Ht,m=kt,p=It,S=Ut,D=s.position,E=s.normal,P=s.uv0;let O=0;for(let w=0;w<h;++w){const R=3*w;if(Z(l,r[R],r[R+1],r[R+2]),w<h-1){const T=3*(w+1);Z(g,r[T],r[T+1],r[T+2]),Z(S,c[T],c[T+1],c[T+2]),ee(S,S),ze(m,g,l),ee(m,m),st(p,S,m),ee(p,p)}const F=le(l,g);e&&i&&(te(l,l,e),te(g,g,e),te(p,p,i));const V=a+2*w,$=V+1;D.setVec(V,l),D.setVec($,l),E.setVec(V,p),E.setVec($,p),P.set(V,0,O),P.set(V,1,-1),P.set($,0,O),P.set($,1,1),w<h-1&&(O+=F)}const B=s.auxpos1;for(let w=0;w<2*h;++w)B.set(a+w,O)}},Bt=class extends St{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=b(),this._originTransform=nt(),this._arrowCenter=b(),this._renderOccluded=G.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=ve(),this._contrastColor=ve(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){ye(e,this._color)||(be(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){ye(e,this._color)||(be(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,n=this._stripesEnabled?i:e;this._arrowMaterial=new xt({outlineColor:e,stripeEvenColor:n,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new at,this._handles.add(A(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=f(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(this._geometry?.startRenderSpace==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,n,s){const a=this.view.renderCoordsHelper,r=[],u=[],c=(h,l)=>{const g=N.get();ze(g,h,n),r.push(g),u.push(l)};if(s.type==="euclidean"){s.eval(.5,this._arrowCenter);const h=N.get();a.worldUpAtPosition(this._arrowCenter,h),c(e,h),c(i,h)}else{s.eval(.5,this._arrowCenter);const h=this._arrowSubdivisions+1&-2;for(let l=0;l<h;++l){const g=l/(h-1),m=N.get(),p=N.get();s.eval(g,m),a.worldUpAtPosition(m,p),c(m,p)}}return rt(this._arrowMaterial,r,u)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,n=this._stripesEnabled?i:e,s=e,a=e;this._arrowMaterial.setParameters({stripeEvenColor:n,outlineColor:s,stripeOddColor:a})}},v=class extends de{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,n=we(e),s=ot(e,.75),a=we(fe(e)),r=fe(i,lt.Low);return{accentColor:n,contrastColor:a,translucentAccentColor:s,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:Le(r,.6),textCalloutColor:Le(r,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(i.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:n,horizontalDistance:s}=i,a=n.value,r=s.value;return Math.min(a/r,r/a)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){if(this.analysisView.result==null)switch(this.analysisView.measurementMode){case x.Auto:case x.Euclidean:default:return"euclidean";case x.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const t=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:t?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=b(),this._endPosition=b(),this._cornerPosition=b(),this._startPositionAtSeaLevel=b(),this._endPositionAtSeaLevel=b(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=C.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:n,triangleLineWidth:s,geodesicProjectionLineWidth:a,directLabelFontSize:r,verticalLabelFontSize:u,horizontalLabelFontSize:c}=t;this._segmentVisualElement=new Bt({...e,geometry:null,renderOccluded:G.OccludeAndTransparent}),this._triangleVisualElement=new H({...e,width:s,renderOccluded:G.OccludeAndTransparent}),this._rightAngleQuad=new Vt({...e,renderOccluded:G.OccludeAndTransparent});const h={...e,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent};this._projectedGeodesicLine=new H({...h,width:a,stipplePattern:ie(n)}),this._geodesicStartHint=new H({...h,width:i,stipplePattern:ie(n)}),this._geodesicEndHint=new H({...h,width:i,stipplePattern:ie(n)}),this._segmentLabel=new ae({...e,fontSize:r}),this._verticalLabel=new ae({...e,fontSize:u}),this._horizontalLabel=new ae({...e,fontSize:c}),this.addHandles([A(()=>{const{elevationAlignedStartPoint:l,elevationAlignedEndPoint:g}=this.analysisView,m=this.view;return{view:m,camera:m.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:l,elevationAlignedEndPoint:g,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},l=>this._updateGeometryAndViewMode(l),z),A(()=>({visible:this.visible,viewMode:this.viewMode}),l=>this._updateVisualElementVisibility(l),z),A(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),l=>this._updateLabelText(l),z),A(()=>({visible:this.visible,viewMode:this.viewMode}),l=>this._updateLabelVisibility(l),z),A(()=>this._measurementArrowStripeLength,l=>this._updateSegmentStripeLength(l),z),ct(async()=>this._updateMessageBundle()),A(()=>this._parameters,({textBackgroundColor:l,textCalloutColor:g,textColor:m,translucentAccentColor:p,accentColor:S,contrastColor:D})=>{const{_segmentLabel:E,_verticalLabel:P,_horizontalLabel:O,_triangleVisualElement:B,_rightAngleQuad:w,_projectedGeodesicLine:R,_geodesicStartHint:F,_geodesicEndHint:V,_segmentVisualElement:$}=this;E.backgroundColor=l,E.calloutColor=g,E.textColor=m,P.backgroundColor=l,P.calloutColor=g,P.textColor=m,O.backgroundColor=l,O.calloutColor=g,O.textColor=m,B.color=p,w.color=p,R.color=p,F.color=p,V.color=p,$.color=S,$.contrastColor=D},dt)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:n,elevationAlignedEndPoint:s,orientation:a,visualizedMeasurement:r,stripeLength:u}){const c=t.renderCoordsHelper;if(c==null||n==null||s==null||n.equals(s))return;let h=this._startPosition,l=this._endPosition;c.toRenderCoords(n,h),c.toRenderCoords(s,l);const g=a===C.AboveSegment?1:-1,m=g*(c.getAltitude(l)-c.getAltitude(h));m<0&&(h=this._endPosition,l=this._startPosition);const p=r==="geodesic"?new Ce(this._startPosition,this._endPosition,c.spatialReference):new j(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=p,this._updateSegmentStripeLength(u),i){case y.Direct:this._updateSegment(p,a);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:p,orientation:a,startPosition:h,endPosition:l,deltaSign:g,altitudeDelta:m});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:a,startPosition:h,endPosition:l})}}_updateSegment(t,e){this._segmentLabel.anchor=e===C.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:n,startPosition:s,endPosition:a,deltaSign:r,altitudeDelta:u}){const c=this._cornerPosition;t.worldUpAtPosition(s,c),ht(c,c,r*Math.abs(u)),ut(c,c,s),this._triangleVisualElement.geometry=[[[s[0],s[1],s[2]],[c[0],c[1],c[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:s,center:c,next:a};const h=new j(s,c),l=new j(c,a),g=Ft(s,a,c,n,e);this._segmentLabel.anchor=g.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=g.vertical,this._horizontalLabel.geometry={type:"segment",segment:l,sampleLocation:"center"},this._horizontalLabel.anchor=g.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:n}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,n);const s=new Ce(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(s),this._geodesicStartHint.setGeometryFromSegment(new j(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new j(this._endPositionAtSeaLevel,n)),this._segmentLabel.geometry={type:"segment",segment:s,sampleLocation:"center"},this._segmentLabel.anchor=e===C.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.euclideanDistance:t.geodesicDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,n=this._horizontalLabel,s=this._verticalLabel;if(i.visible=!1,n.visible=!1,s.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,n.visible=!0,s.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:n,verticalDistance:s,geodesicDistance:a}=e,r=this.analysisView.unit,u=c=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...c});switch(r){case"metric":return u({euclideanDistance:i&&oe(t,i),geodesicDistance:a&&oe(t,a),horizontalDistance:n&&oe(t,n),verticalDistance:s&&zt(t,s)});case"imperial":return u({euclideanDistance:i&&re(t,i),geodesicDistance:a&&re(t,a),horizontalDistance:n&&re(t,n),verticalDistance:s&&Ot(t,s)});default:return u({euclideanDistance:i&&I(t,i,r),geodesicDistance:a&&I(t,a,r),horizontalDistance:n&&I(t,n,r),verticalDistance:s&&I(t,s,r)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===C.Auto?this.view.state.camera.aboveGround?C.AboveSegment:C.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!e?.state)return!1;const i=e.state.camera,n=e.renderCoordsHelper;if(!n)return!1;const s=i.computeScreenPixelSizeAt(t);return n.getAltitude(t)/s>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const n=t.directDistance;switch(e){case"metric":i=n&&ne(n,"meters");break;case"imperial":i=n&&ne(n,gt(n.value,n.unit));break;default:i=n&&ne(n,e)}return i==null?null:pt(i.value/30)*_t(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,mt("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}};function Ft(t,e,i,n,s){const a=Qt,r=qt;s.projectToRenderScreen(i,a),s.projectToRenderScreen(e,r);const u={segment:"bottom",horizontal:"top",vertical:a[0]<r[0]?"left":"right"};{const c=Xt,h=Yt;if(se(t,i,c,s),se(t,e,h,s),Pe(c,h)>=Oe){const l=Math.sign(c[1])===Math.sign(h[1]);u.segment=l?Ae(u.vertical):u.vertical}else{const l=Jt;se(i,e,l,s),Pe(l,h)>=Oe&&(u.segment=Math.sign(l[0])===Math.sign(h[0])?Ae(u.horizontal):u.horizontal)}}if(n===C.BelowSegment){const c=h=>h==="top"?"bottom":"top";u.segment=c(u.segment),u.horizontal=c(u.horizontal),u.vertical=c(u.vertical)}return u}o([d()],v.prototype,"_parameters",null),o([d()],v.prototype,"_triangleOrientationOverride",void 0),o([d()],v.prototype,"messages",void 0),o([d()],v.prototype,"view",void 0),o([d()],v.prototype,"analysis",void 0),o([d()],v.prototype,"analysisView",void 0),o([d()],v.prototype,"loadingMessages",void 0),o([d()],v.prototype,"visible",null),o([d()],v.prototype,"viewMode",null),o([d()],v.prototype,"actualVisualizedMeasurement",null),o([d()],v.prototype,"visualElementOrientation",void 0),o([d()],v.prototype,"triangleCollapseRatioThreshold",void 0),o([d()],v.prototype,"allowVisualElementsOrientationChange",null),o([d()],v.prototype,"labels",null),o([d()],v.prototype,"_labelsText",null),o([d()],v.prototype,"_actualVisualElementsOrientation",null),o([d()],v.prototype,"_measurementArrowStripeLength",null),v=o([ce("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Oe=Math.cos(vt(12)),Qt=Ve(),qt=Ve(),Xt=ue(),Yt=ue(),Jt=ue();let _=class extends Et(de){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=x.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new M({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){return this._analysisVisualization.labels.direct?.text??""}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal?.text??""}get verticalLabelText(){return this._analysisVisualization.labels.vertical?.text??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};o([d()],_.prototype,"updating",null),o([d({readOnly:!0})],_.prototype,"type",void 0),o([d({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),o([d()],_.prototype,"result",void 0),o([d()],_.prototype,"measurementMode",void 0),o([d()],_.prototype,"elevationAlignedStartPoint",void 0),o([d()],_.prototype,"elevationAlignedEndPoint",void 0),o([d({readOnly:!0})],_.prototype,"viewMode",null),o([d({readOnly:!0})],_.prototype,"actualVisualizedMeasurement",null),o([d()],_.prototype,"visualElementOrientation",null),o([d()],_.prototype,"allowVisualElementsOrientationChange",null),o([d()],_.prototype,"triangleCollapseRatioThreshold",null),o([d({readOnly:!0})],_.prototype,"directLabelText",null),o([d({readOnly:!0})],_.prototype,"horizontalLabelText",null),o([d({readOnly:!0})],_.prototype,"verticalLabelText",null),o([d()],_.prototype,"_analysisVisualization",void 0),o([d()],_.prototype,"_analysisController",void 0),o([d()],_.prototype,"unit",null),o([d(Pt)],_.prototype,"_defaultUnit",void 0),_=o([ce("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],_);const Kt=_,ci=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"}));export{ci as D,Dt as n};
