'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color="#22d3ee" attach="material" distort={0.4} speed={2} />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
