"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Planet } from "../renders/Planet"

export const PlanetCanva = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <Canvas
        className="w-full h-full"
        shadows
        camera={{ position: [3, 3, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight position={[8, 8, 8]} angle={0.2} penumbra={0.3} intensity={1} castShadow />
        <pointLight position={[-8, -8, -8]} intensity={0.5} color="#4f46e5" />
        <pointLight position={[8, -8, 8]} intensity={0.3} color="#06b6d4" />

        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          target={[0, 0, 0]}
          makeDefault
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Planet />
      </Canvas>
    </div>
  )
}
