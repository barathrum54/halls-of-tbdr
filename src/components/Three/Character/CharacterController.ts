import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { CharacterPositions } from "@/types/ThreeScene";
import { degreesToRadians } from "../Helpers/HelperFunctions";

class CharacterController {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private currentCharacterPos: any;
  private characterPos: CharacterPositions;

  constructor(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    currentCharacterPos: any,
    characterPos: CharacterPositions
  ) {
    this.scene = scene;
    this.camera = camera;
    this.currentCharacterPos = currentCharacterPos;
    this.characterPos = characterPos;
  }

  public async changeCharacterPos(targetState: string): Promise<string> {
    const index = this.characterPos.findIndex(
      (pos: any) => pos.name === targetState
    );
    if (index !== -1) {
      return this.moveCharacter(index, 0);
    }
    return Promise.reject("Character position not found");
  }

  private moveCharacter(targetState: number, step: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const position = this.characterPos[targetState];
      if (step < position.keys.length) {
        const key = position.keys[step];
        const pos: THREE.Vector3 = key.position;
        const rotation: { x: number; y: number; z: number } = key.rotation;
        const delay: number = key.delay || 0;
        const speed: number = key.speed || 1;

        const rotationInRadians = {
          x: degreesToRadians(rotation.x),
          y: degreesToRadians(rotation.y),
          z: degreesToRadians(rotation.z),
        };
        this.camera.rotation.order = "YXZ";

        new TWEEN.Tween(this.camera.position)
          .to(pos, 2000 / speed)
          .easing(TWEEN.Easing.Quadratic.In)
          .onUpdate(() => this.camera.position.copy(this.camera.position))
          .start();

        new TWEEN.Tween(this.camera.rotation)
          .to(rotationInRadians, 2000 / speed)
          .easing(TWEEN.Easing.Quartic.InOut)
          .onUpdate(() => this.camera.rotation.copy(this.camera.rotation))
          .onComplete(() => {
            setTimeout(() => {
              this.moveCharacter(targetState, step + 1).then((result) => {
                resolve(result);
              });
            }, delay);
          })
          .start();
      } else {
        this.currentCharacterPos.value = targetState;
        resolve(position.name || "undefined");
      }
    });
  }


}

export default CharacterController;
