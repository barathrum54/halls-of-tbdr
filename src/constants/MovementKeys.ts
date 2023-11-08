import { CharacterPositions } from "@/types/ThreeScene";
import * as THREE from "three";

export const characterPos: CharacterPositions = [
  {
    name: "intro",
    keys: [
      {
        position: new THREE.Vector3(-1.3, 1.6, 4),
        rotation: { x: 0, y: 0, z: 0 },
      },
      {
        position: new THREE.Vector3(-1.3, 1.6, 4),
        rotation: { x: 0, y: 0, z: 0 },
      },
    ],
  },

  {
    name: "hero",
    keys: [
      {
        position: new THREE.Vector3(-1.5, 1.9, -0.4),
        rotation: { x: -5, y: 0, z: 0 },
        speed: 1,
      },
      {
        position: new THREE.Vector3(-1.6, 1.9, 0),
        rotation: { x: -20, y: 95, z: 0 },
        speed: 2,
      },
    ],
  },
  // {
  //   name: "history",
  //   keys: [
  //     {
  //       position: new THREE.Vector3(-1, 1.9, 1),
  //       rotation: { x: -20, y: -30, z: 0 },
  //       speed: 1,
  //     },
  //   ],
  // },
  // desk
  {
    name: "faq",
    keys: [
      {
        position: new THREE.Vector3(0.8, 1.9, -2.7),
        rotation: { x: -20, y: -10, z: 0 },
        speed: 1,
      },
      {
        position: new THREE.Vector3(0.5, 1.9, -2.6),
        rotation: { x: 20, y: -25, z: 0 },
        speed: 1.5,
      },
    ],
  },
  {
    name: "history",
    keys: [
      {
        position: new THREE.Vector3(0.8, 1.9, -1.5),
        rotation: { x: 0, y: -10, z: 0 },
        speed: 1,
      },
      {
        position: new THREE.Vector3(-0.3, 1.9, -3),
        rotation: { x: -20, y: 10, z: 0 },
        speed: 2,
      },
      {
        position: new THREE.Vector3(-0.3, 1.9, -3.2),
        rotation: { x: -30, y: 5, z: 0 },
        speed: 1.5,
      },
    ],
  },
  {
    name: "contact",
    keys: [
      {
        position: new THREE.Vector3(1.3, 1.9, 0),
        rotation: { x: 0, y: -15, z: 0 },
        speed: 1,
      },

      {
        position: new THREE.Vector3(0.8, 2.3, -0.2),
        rotation: { x: 20, y: -90, z: 0 },
        speed: 1,
      },
    ],
  },
  {
    name: "skills",
    keys: [
      {
        position: new THREE.Vector3(1.3, 1.9, 0),
        rotation: { x: 0, y: 0, z: 0 },
        speed: 1,
      },
      {
        position: new THREE.Vector3(1.4, 1.8, -0.35),
        rotation: { x: -20, y: -88, z: 0 },
        speed: 2,
      },
    ],
  },
];
