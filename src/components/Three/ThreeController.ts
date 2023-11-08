import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { CharacterPositions } from "@/types/ThreeScene";
import SkillsController from "./Skills/SkillsController";
import GLTFController from "./GLTF/GLTFController";
import CharacterController from "./Character/CharacterController";
import POVController from "./POVController/POVController";

class ThreeController {
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private currentCharacterPos: any;
  private container: HTMLElement;
  private characterPos: CharacterPositions;
  public characterController: CharacterController;
  private skillsController: SkillsController;
  private gltfController: GLTFController;
  private povController: POVController; // Create an instance of POVController
  private isStarted: boolean = false; // Add isStarted flag

  constructor(
    container: HTMLElement,
    currentCharacterPos: any,
    characterPos: CharacterPositions
  ) {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    this.currentCharacterPos = currentCharacterPos;
    this.container = container;
    this.characterPos = characterPos;
    this.skillsController = new SkillsController(this.scene);
    this.gltfController = new GLTFController();
    this.characterController = new CharacterController(
      this.scene,
      this.camera,
      currentCharacterPos,
      characterPos
    );
    this.povController = new POVController(this.scene, this.camera); // Initialize POVController

    this.initScene();
  }

  private initScene() {
    this.camera.position.set(-1.3, 1.6, 4);
    this.camera.rotation.set(0, 0, 0);

    if (this.container) {
      this.container.appendChild(this.renderer.domElement);
    }

    this.gltfController.loadModel(this.scene, this.camera);

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
  public async intro() {
    // Trigger the fadeIn effect in the POVController with a duration of 1000 ms
    await this.povController.fadeOut(4);
    for (let index = 0; index < 2; index++) {
      await this.povController.blink();
    }
  }

  private waitForStart() {
    return new Promise<void>((resolve) => {
      const checkIsStarted = () => {
        if (this.isStarted) {
          clearInterval(checkInterval);
          resolve();
        }
      };

      const checkInterval = setInterval(checkIsStarted, 100);
    });
  }

  public async startScene() {
    await this.intro().then(() => {
      console.log("scene started");
      this.isStarted = true;
    });
  }

  public async changeCharacterPos(
    targetState: string,
    currentState: string
  ): Promise<string> {
    if (!this.isStarted) {
      await this.waitForStart();
    }

    return this.characterController
      .changeCharacterPos(targetState)
      .then((res) => {
        if (res == "skills") {
          this.skillsController.toggleSkillsLight();
        }
        if (currentState == "skills" && targetState != "skills") {
          this.skillsController.toggleSkillsLight();
        }
        return res;
      });
  }
  public searchSkills(name: string) {
    this.skillsController.searchSkills(name);
  }
}

export default ThreeController;
