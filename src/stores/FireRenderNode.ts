import {
  AdditiveBlending,
  AmbientLight,
  Color,
  DirectionalLight,
  InstancedMesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  TextureLoader,
  Vector3,
} from "three";
import {
  color,
  mix,
  positionLocal,
  range,
  SpriteNodeMaterial,
  texture,
  timerLocal,
  uv,
} from "three/examples/jsm/nodes/Nodes";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer";
// import WebGLState from "three/examples/jsm/renderers/webgl/utils/WebGLState";

import { Point } from "@arcgis/core/geometry";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { toRenderCoordinates } from "@arcgis/core/views/3d/webgl";
import ManagedFBO from "@arcgis/core/views/3d/webgl/ManagedFBO";
import RenderNode from "@arcgis/core/views/3d/webgl/RenderNode";

@subclass("UC2024-real-time-occupancy.stores.FireRenderNode")
export class FireRenderNode extends RenderNode {
  initialize(): void {
    this.consumes.required.push("transparent-color");
    this.produces = "disabled"!;
    this._renderer = new WebGPURenderer({ forceWebGL: true, context: this.gl, premultipliedAlpha: false });

    // prevent three.js from clearing the buffers provided by the ArcGIS JS API.
    this._renderer.autoClearDepth = this._renderer.autoClearStencil = this._renderer.autoClearColor = false;

    // The ArcGIS JS API renders to custom offscreen buffers, and not to the default framebuffers.
    // We have to inject this bit of code into the three.js runtime in order for it to bind those
    // buffers instead of the default ones.
    var originalSetRenderTarget = this._renderer.setRenderTarget.bind(this._renderer);
    const me = this;
    this._renderer.setRenderTarget = function (target) {
      originalSetRenderTarget(target);
      if (target == null) {
        me.bindRenderTarget();
      }
    };

    this._scene.add(this._ambient);
    this._scene.add(this._sun);
    this._renderer.init();
    this._renderer.autoClear = false;
  }

  render(inputs: ManagedFBO[]): ManagedFBO {
    const viewport = this.camera.viewport;

    const camera = this.camera;
    this._camera.position.set(camera.eye[0], camera.eye[1], camera.eye[2]);
    this._camera.up.set(camera.up[0], camera.up[1], camera.up[2]);
    this._camera.lookAt(new Vector3(camera.center[0], camera.center[1], camera.center[2]));
    this._camera.projectionMatrix.fromArray(camera.projectionMatrix);

    const light = this.sunLight;
    this._sun.position.set(light.direction[0], light.direction[1], light.direction[2]);
    this._sun.intensity = light.diffuse.intensity;
    this._sun.color = new Color(light.diffuse.color[0], light.diffuse.color[1], light.diffuse.color[2]);
    this._ambient.intensity = light.ambient.intensity;
    this._ambient.color = new Color(light.ambient.color[0], light.ambient.color[1], light.ambient.color[2]);

    this._renderer.setDrawingBufferSize(viewport[2], viewport[3], window.devicePixelRatio);

    const output = this.bindRenderTarget();
    this.resetWebGLState();

    this._renderer._renderScene(this._scene, this._camera, false);

    this.requestRender();
    return output;
  }

  resetWebGLState(): void {
    const gl = this.gl;
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.depthFunc(gl.LEQUAL);

    const state: any = this._renderer.backend.state;
    for (const slot in state.currentBoundTextures) {
      const value = state.currentBoundTextures[slot];
      if (typeof value === "object" && "texture" in value && "type" in value) {
        gl.activeTexture(Number(slot));
        gl.bindTexture(value.type, value.texture);
      }
    }
  }

  addFire(point: Point) {
    var renderPos = [0, 0, 0];
    if (!toRenderCoordinates(this.view, [point.x, point.y, point.z ?? 0], 0, point.spatialReference, renderPos, 0, 1)) {
      return;
    }

    const textureLoader = new TextureLoader();
    const map = textureLoader.load("textures/opengameart/smoke1.png");

    // create nodes

    const lifeRange = range(0.1, 1);
    const offsetRange = range(new Vector3(-0.02, 0.03, -0.02), new Vector3(0.02, 0.05, 0.02));

    const timer = timerLocal(0.2, 1 /*100000*/); // @TODO: need to work with 64-bit precision

    const lifeTime = timer.mul(lifeRange).mod(1);
    const scaleRange = range(0.003, 0.02);
    const rotateRange = range(0.001, 0.04);

    const life = lifeTime.div(lifeRange);

    const fakeLightEffect = positionLocal.y.oneMinus().max(0.2);

    const textureNode = texture(map, uv().rotateUV(timer.mul(rotateRange)));
    const opacityNode = textureNode.a.mul(life.oneMinus());
    const smokeColor = mix(color(0x2c1501), color(0x222222), positionLocal.y.mul(3).clamp());

    // create particles

    const smokeNodeMaterial = new SpriteNodeMaterial();
    smokeNodeMaterial.colorNode = mix(color(0xf27d0c), smokeColor, life.mul(2.5).min(1)).mul(fakeLightEffect);
    smokeNodeMaterial.opacityNode = opacityNode;
    smokeNodeMaterial.positionNode = offsetRange.mul(lifeTime);
    smokeNodeMaterial.scaleNode = scaleRange.mul(lifeTime.max(0.3));
    smokeNodeMaterial.depthWrite = false;
    smokeNodeMaterial.transparent = true;

    const smokeInstancedSprite = new InstancedMesh(new PlaneGeometry(1, 1), smokeNodeMaterial, 2000);
    smokeInstancedSprite.scale.setScalar(400);
    smokeInstancedSprite.position.x = renderPos[0];
    smokeInstancedSprite.position.y = renderPos[1];
    smokeInstancedSprite.position.z = renderPos[2];
    this._scene.add(smokeInstancedSprite);

    //

    const fireNodeMaterial = new SpriteNodeMaterial();
    fireNodeMaterial.colorNode = mix(color(0xb72f17), color(0xb72f17), life);
    fireNodeMaterial.positionNode = range(new Vector3(-0.01, 0.01, -0.01), new Vector3(0.01, 0.02, 0.01)).mul(lifeTime);
    fireNodeMaterial.scaleNode = smokeNodeMaterial.scaleNode;
    fireNodeMaterial.opacityNode = opacityNode;
    fireNodeMaterial.blending = AdditiveBlending;
    fireNodeMaterial.transparent = true;
    fireNodeMaterial.depthWrite = false;

    const fireInstancedSprite = new InstancedMesh(new PlaneGeometry(1, 1), fireNodeMaterial, 100);
    fireInstancedSprite.scale.setScalar(400);
    fireInstancedSprite.position.x = renderPos[0];
    fireInstancedSprite.position.y = renderPos[1];
    fireInstancedSprite.position.z = renderPos[2] - 1;
    fireInstancedSprite.renderOrder = 1;
    this._scene.add(fireInstancedSprite);
    this.produces = "transparent-color";
  }

  private _renderer: WebGPURenderer;
  private _scene = new Scene();
  private _camera = new PerspectiveCamera();
  private _ambient = new AmbientLight(0xffffff, 0.5);
  private _sun = new DirectionalLight(0xffffff, 0.5);
}
