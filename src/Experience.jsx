import React from "react";
import { DoubleSide } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Lights from "./Lights";
import { Environment, Sparkles } from "@react-three/drei";

export default function Experience() {
  const model = useLoader(GLTFLoader, "./christmas-scene.glb");
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-5, 1.5, 9],
          rotation: [0, 90, 90],
        }}
      >
        <OrbitControls />
        <Environment files="./snowy_park_01_1k.exr" background blur={0.5} />
        <Lights />

        <Perf position="top-left" />
        <Sparkles size={40} scale={[15, 4, 15]} position-y={1} speed={1.2} />

        <primitive object={model.scene} />
      </Canvas>
    </>
  );
}
