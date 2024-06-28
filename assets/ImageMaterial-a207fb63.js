import{l4 as $,l5 as I,l6 as O,f7 as l,l7 as c,l8 as A,l9 as b,la as C,lb as S,lc as p,ld as w,le as D,lf as u,lg as x,aA as N,lh as R,li as y,aj as i,lj as o,lk as m,ll as L,lm as V,ln as F,lo as M,lp as B,lq as U,lr as j,ls as z,lt as G,lu as W,lv as H,lw as k,lx as q,ly as J,lz as K,lA as Q,lB as g,lC as E,lD as _,lE as X,lF as Y,lG as Z,lH as ee,lI as te,lJ as se,lK as ae,lL as re,lM as ie}from"./index-ab96db07.js";function oe(s){const e=new $,{vertex:t,fragment:a}=e;return I(t,s),e.include(O,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(A,s),e.include(b,s),a.uniforms.add(new C("tex",n=>n.texture),new S("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.transparencyPassType===p.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.include(w),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(D)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===p.ColorAlpha?c`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
      ${s.output===u.ObjectAndLayerIdColor?c`
              fragColor = vec4(0,0,0,1);`:""}
    }
    `),e}const ne=Object.freeze(Object.defineProperty({__proto__:null,build:oe},Symbol.toStringTag,{value:"Module"}));class P extends L{initializeProgram(e){return new V(e.rctx,P.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const a=this.configuration,n=e===p.NONE,d=e===p.FrontFace;return F({blending:a.output===u.Color&&a.transparent?n?le:M(e):null,culling:B(a.cullFace),depthTest:{func:U(e)},depthWrite:n?a.writeDepth?j:null:z(e),drawBuffers:G(e),colorWrite:W,stencilWrite:a.hasOccludees?H:null,stencilTest:a.hasOccludees?t?k:q:null,polygonOffset:n||d?null:J(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}P.shader=new x(ne,()=>N(()=>import("./ImageMaterial.glsl-544ab7a0.js"),["./ImageMaterial.glsl-544ab7a0.js","./index-ab96db07.js","./index-74ab7f40.css"],import.meta.url));const le=R(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends K{constructor(){super(...arguments),this.output=u.Color,this.cullFace=m.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:u.COUNT})],r.prototype,"output",void 0),i([o({count:m.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:p.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);let he=class extends Q{constructor(e){super(e,new ue),this.supportsEdges=!0,this.produces=new Map([[g.OPAQUE_MATERIAL,t=>E(t)||_(t)&&!this.parameters.transparent],[g.TRANSPARENT_MATERIAL,t=>_(t)&&this.parameters.transparent&&this.parameters.writeDepth],[g.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>_(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[g.DRAPED_MATERIAL,t=>_(t)||E(t)]]),this._vertexAttributeLocations=T,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<X,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new pe(e)}createBufferWriter(){const e=Y.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new ce(e)}};class pe extends Z{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(P,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output===u.Color&&this._updateOccludeeState(e),this._updateParameters(e)}}class ce extends ee{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){te(f.size===1);const v=n.getField(h,se);v&&ae(f,v,d)}else re(h,f,e,t,n,d)}}}class ue extends ie{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=m.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{he as g,oe as v};
