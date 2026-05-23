'use client';

import { Float, MeshDistortMaterial, Sparkles, Stars, Torus, TorusKnot } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group, Mesh } from 'three';

function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.15) * 0.4;
    camera.position.y = Math.cos(t * 0.12) * 0.25;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function CoreShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.14;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.3}>
      <mesh ref={meshRef} scale={1.4}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0e7490"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.88}
          distort={0.4}
          speed={2.2}
        />
      </mesh>
    </Float>
  );
}

function SecondaryKnot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.2} floatIntensity={0.8}>
      <mesh ref={ref} position={[2.2, -0.8, -1]} scale={0.45}>
        <torusKnotGeometry args={[0.55, 0.14, 128, 16]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#5b21b6"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.14;
    group.current.rotation.x = Math.PI / 3.2;
  });

  return (
    <group ref={group}>
      <Torus args={[2.15, 0.025, 16, 120]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
      </Torus>
      <Torus args={[2.55, 0.018, 16, 120]} rotation={[0.5, 0, 0]}>
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
      </Torus>
      <TorusKnot args={[1.1, 0.04, 64, 8]} rotation={[1, 0.3, 0]}>
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.2} wireframe />
      </TorusKnot>
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 44 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <CameraRig />
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} intensity={1.3} color="#22d3ee" />
        <pointLight position={[-4, -2, 2]} intensity={0.85} color="#a78bfa" />
        <Stars radius={80} depth={40} count={2500} factor={3} fade speed={0.6} />
        <CoreShape />
        <SecondaryKnot />
        <OrbitRings />
        <Sparkles count={160} scale={9} size={2.2} speed={0.45} color="#67e8f9" opacity={0.65} />
        <Sparkles count={80} scale={5} size={1.2} speed={0.25} color="#c4b5fd" opacity={0.45} />
      </Canvas>
    </div>
  );
}
