"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../renders/Planet.jsx";
import React from "react";
 
export const PlanetCanva = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        shadows
        camera={{ position: [2, 2, 7], fov: 40 }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />

        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={0.8}
          castShadow
        />

        <pointLight position={[-5, -5, -5]} intensity={0.3} />

        <OrbitControls enableZoom={false} enableRotate={false} target={[0, 0.8, 0]} makeDefault />
        <Planet />
      </Canvas>
    </div>
  );
};