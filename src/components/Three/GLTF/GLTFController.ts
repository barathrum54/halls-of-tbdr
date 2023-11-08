import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
class GLTFController {
  private model: THREE.Object3D | undefined;

  constructor() {
    this.model = undefined;
  }

  public loadModel(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const loader = new GLTFLoader();
    loader.load("the_dining_room/scene.gltf", (gltf) => {
      console.log("MODEL LOADED");
      this.model = gltf.scene;
      scene.add(this.model);
      const of = this.degreesToRadians(30);
      this.model.rotation.set(0, of, 0);
      this.model.position.set(0, 0, 0);
      this.model.scale.set(1, 1, 1);
      camera.rotation.order = "XYZ";
    });
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}

export default GLTFController;
