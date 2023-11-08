import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

class POVController {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.scene = scene;
    this.camera = camera;
  }

  public async fadeIn(duration: number) {
    return new Promise<void>((resolve) => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "black"; // Change to your desired color or image
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      overlay.style.transition = `opacity ${duration}ms`;
      overlay.style.zIndex = "9999";

      document.body.appendChild(overlay);

      setTimeout(() => {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
      }, 0);

      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  public async fadeOut(duration: number) {
    return new Promise<void>((resolve) => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "black"; // Change to your desired color or image
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
      overlay.style.transition = `opacity ${duration}s ease-in-out`;
      overlay.style.zIndex = "9999";
      document.body.appendChild(overlay);

      setTimeout(() => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }, 1);

      setTimeout(() => {
        document.body.removeChild(overlay);
        resolve();
      }, duration + 100);
    });
  }
  public async blink() {
    return new Promise<void>((resolve) => {
      const blinkOverlay = document.createElement("div");
      blinkOverlay.id = "blink";
      blinkOverlay.style.position = "fixed";
      blinkOverlay.style.top = "0";
      blinkOverlay.style.left = "0";
      blinkOverlay.style.width = "100%";
      blinkOverlay.style.height = "100%";
      blinkOverlay.style.backgroundColor = "black"; // Change to your desired color or image
      blinkOverlay.style.opacity = "0";
      blinkOverlay.style.pointerEvents = "auto";
      blinkOverlay.style.transition = `all .5s ease-in-out`;
      blinkOverlay.style.zIndex = "9999";
      document.body.appendChild(blinkOverlay);
      setTimeout(() => {
        blinkOverlay.style.opacity = "1";
      }, 100);
      setTimeout(() => {
        blinkOverlay.style.opacity = "0";
      }, 700);
      setTimeout(() => {
        document.body.removeChild(blinkOverlay);
        resolve();
      }, 1200);
    });
  }
}

export default POVController;
