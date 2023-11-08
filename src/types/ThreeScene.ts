import * as THREE from "three";

export type CharacterPosition = {
  name?:string;
  keys: {
    position: THREE.Vector3;
    rotation: { x: number; y: number; z: number };
    delay?: number;
    speed?: number;
  }[];
};

export type CharacterPositions = CharacterPosition[];
