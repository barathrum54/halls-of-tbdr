import TWEEN from "@tweenjs/tween.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as THREE from "three";
import { TextPositions, UpperTextPositions } from "@/constants/SkillsThree"; // Import your TextPositions from the appropriate source
import { degreesToRadians } from "../Helpers/HelperFunctions";
import * as robotTypeface from "@/assets/fonts/roboto_slab.typeface.json";
import * as crystal from "@/assets/shaders/textures/crystal.png";
class SkillsController {
  private scene;
  private skillsTexts: THREE.Mesh[] = [];
  private skillsLightOn: boolean;
  private selectedSkill: THREE.Mesh | null = null; // A variable to store the currently selected skill

  constructor(scene: any) {
    this.scene = scene;
    this.createSkillTextMeshes();
    this.createUpperSkillTextMeshes();
    this.animate();
    this.skillsLightOn = false;
  }

  public createSkillTextMeshes() {
    const fontLoader = new FontLoader();
    const plane = new THREE.PlaneGeometry(2, 1, 1, 1);
    const planeMaterial = new THREE.ShadowMaterial({
      transparent: true,
      side: THREE.DoubleSide,
    });

    const planeMesh = new THREE.Mesh(plane, planeMaterial);
    planeMesh.position.set(1.9, 1.39, -0.4);
    planeMesh.receiveShadow = true;
    planeMesh.rotateX(degreesToRadians(90));
    planeMesh.rotateZ(-1.5);
    this.scene.add(planeMesh);
    const spotLight = new THREE.PointLight("yellow", 55, 0);

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    spotLight.position.set(1.8, 4, 0.1);
    this.scene.add(spotLight);

    TextPositions.forEach((textPosition, index) => {
      const font = fontLoader.parse(robotTypeface);
      const geometry = new TextGeometry(textPosition.text, {
        font,
        size: 0.03,
        height: 0.005,
      });
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(crystal.default);

      const textMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          randomOffset: { value: Math.random() * 100 }, // Randomize the start time
          glowBase: { value: 0.1 },
          yourTexture: { value: texture },
        },
        // Vertex Shader
        vertexShader: `      varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,

        // Fragment Shader
        fragmentShader: `   varying vec3 vPosition;
uniform float time;
uniform float randomOffset; // Random start time offset
uniform float glowBase;

void main() {
    // Define a color transition between white and transparent
    float alpha = 0.6 + 0.35 * sin(time + randomOffset);

    // Check the glowBase value
    if (glowBase == 1.0) {
        // If glowBase is 1, use a constant value of 1.0
        alpha = 1.0;
    }

    // Add some glowing effect
    float radius = length(vPosition);
    float glow = glowBase / (1.0 + exp(-radius));

    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * glow);
}


`,
      });

      textMaterial.transparent = true;
      textMaterial.side = THREE.DoubleSide;

      const textMesh = new THREE.Mesh(geometry, textMaterial);
      if (index % 3 === 0) {
        textMesh.position.set(2.05, 1.4, -1.4 + index * 0.05);
      } else if (index % 3 === 1) {
        textMesh.position.set(2.1, 1.4, -1.4 + index * 0.05);
      } else {
        textMesh.position.set(2, 1.4, -1.4 + index * 0.05);
      }
      if (index > TextPositions.length / 2) {
        textMesh.rotation.set(0, -1.65, 0); // Reset the initial rotation
      } else {
        textMesh.rotation.set(0, -1.35, 0); // Reset the initial rotation
      }
      textMesh.name = textPosition.text;
      this.skillsTexts.push(textMesh);
      textMesh.userData = {
        originalPosition: new THREE.Vector3(
          textMesh.position.x,
          textMesh.position.y,
          textMesh.position.z
        ),
      };
      textMesh.castShadow = true;
      this.scene.add(textMesh); // Add the created text mesh to the scene
    });
  }
  public createUpperSkillTextMeshes() {
    const fontLoader = new FontLoader();
    const font = fontLoader.parse(robotTypeface);
    const plane = new THREE.PlaneGeometry(2, 1, 1, 1);
    const planeMaterial = new THREE.ShadowMaterial({
      transparent: true,
      side: THREE.DoubleSide,
    });

    const planeMesh = new THREE.Mesh(plane, planeMaterial);
    planeMesh.position.set(1.9, 1.39, -0.4);
    planeMesh.receiveShadow = true;
    planeMesh.rotateX(degreesToRadians(90));
    planeMesh.rotateZ(-1.5);
    this.scene.add(planeMesh);
    const spotLight = new THREE.PointLight("yellow", 55, 0);

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    spotLight.position.set(1.8, 4, 0.1);
    this.scene.add(spotLight);

    UpperTextPositions.forEach((textPosition, index) => {
      const geometry = new TextGeometry(textPosition.text, {
        font: font,
        size: 0.03,
        height: 0.005,
      });

      const textMaterial = new THREE.MeshPhongMaterial({
        opacity: 0.2,
        transparent: true,
      });

      textMaterial.transparent = true;
      textMaterial.side = THREE.DoubleSide;

      const textMesh = new THREE.Mesh(geometry, textMaterial);
      if (index % 3 === 0) {
        textMesh.position.set(2.215, 1.53, -1.4 + index * 0.25);
      } else if (index % 3 === 1) {
        textMesh.position.set(2.215, 1.53, -1.4 + index * 0.25);
      } else {
        textMesh.position.set(2.215, 1.53, -1.4 + index * 0.25);
      }
      if (index > UpperTextPositions.length / 2) {
        textMesh.rotation.set(0, -1.65, 0); // Reset the initial rotation
      } else {
        textMesh.rotation.set(0, -1.35, 0); // Reset the initial rotation
      }

      textMesh.name = textPosition.text;
      textMesh.castShadow = true;
      this.scene.add(textMesh); // Add the created text mesh to the scene
    });
  }

  public toggleSkillsLight() {
    this.skillsLightOn = !this.skillsLightOn;
    const glowBaseValue = this.skillsLightOn ? 0.7 : 0.1;
    this.skillsTexts.forEach((element) => {
      if (
        element instanceof THREE.Mesh &&
        element.material instanceof THREE.ShaderMaterial
      ) {
        new TWEEN.Tween(element.material.uniforms.glowBase)
          .to({ value: glowBaseValue }, 1500)
          .easing(TWEEN.Easing.Quadratic.In)
          .start();
      }
    });
  }

  private animateShaders() {
    // This function updates the shader uniforms
    this.skillsTexts.forEach((textMesh) => {
      // Update the "time" uniform to animate the shader
      if (
        textMesh instanceof THREE.Mesh &&
        textMesh.material instanceof THREE.ShaderMaterial
      ) {
        // Increment the "time" uniform for each text material
        textMesh.material.uniforms.time.value += 0.02; // Adjust the increment value as needed
      }
    });
  }
  public searchSkills(text: string) {
    console.log("searching skills", text);
    if (text == "" || text == null || text == " ") {
      this.selectSkill(null);
      return;
    }

    const textMesh = this.skillsTexts.find((mesh) => {
      return mesh.name.toLowerCase().includes(text.toLowerCase());
    });
    if (textMesh) {
      // If a skill is found, update the currently selected skill
      this.selectSkill(textMesh);
    }
  }

  private selectSkill(textMesh: THREE.Mesh | null) {
    console.log(textMesh);
    if (this.selectedSkill) {
      // If there is a previously selected skill, descend it
      this.descend(this.selectedSkill);
    }

    if (!textMesh) {
      this.selectedSkill = null;
    }
    // Elevate the newly selected skill
    textMesh && this.elevate(textMesh);

    // Update the selected skill
    this.selectedSkill = textMesh;
  }

  private elevate(textMesh: THREE.Mesh) {
    const targetY = 1.5;
    const targetZ = -0.5;
    new TWEEN.Tween(textMesh.position)
      .to({ y: targetY, z: targetZ }, 1500)
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
    if (
      textMesh instanceof THREE.Mesh &&
      textMesh.material instanceof THREE.ShaderMaterial
    ) {
      new TWEEN.Tween(textMesh.scale)
        .to({ x: 2, y: 2, z: 2 }, 1500) // Set your target scale values
        .easing(TWEEN.Easing.Quadratic.In)
        .start();
      new TWEEN.Tween(textMesh.material.uniforms.glowBase)
        .to({ value: 1 }, 1500) // Set your target scale values
        .easing(TWEEN.Easing.Quadratic.In)
        .start();
    }
  }

  private descend(textMesh: THREE.Mesh) {
    console.log(textMesh.userData.originalPosition);
    new TWEEN.Tween(textMesh.position)
      .to(textMesh.userData.originalPosition, 1500)
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
    if (
      textMesh instanceof THREE.Mesh &&
      textMesh.material instanceof THREE.ShaderMaterial
    ) {
      new TWEEN.Tween(textMesh.scale)
        .to({ x: 1, y: 1, z: 1 }, 1500) // Set your target scale values
        .easing(TWEEN.Easing.Quadratic.In)
        .start();
      new TWEEN.Tween(textMesh.material.uniforms.glowBase)
        .to({ value: 0.3 }, 1500) // Set your target scale values
        .easing(TWEEN.Easing.Quadratic.In)
        .start();
    }
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.animateShaders();
  }
}

export default SkillsController;
