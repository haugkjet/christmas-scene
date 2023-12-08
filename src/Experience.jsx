import React from "react";
import { DoubleSide } from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
        }}
        style={{ background: "#8CABFF" }}
      >
        <OrbitControls />
        <mesh
          position={[0, -0.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[50, 50, 1]}
        >
          <planeGeometry attach="geometry" />
          <meshBasicMaterial color="#d0d0d0" side={DoubleSide} />
        </mesh>
      </Canvas>
    </>
  );
}
