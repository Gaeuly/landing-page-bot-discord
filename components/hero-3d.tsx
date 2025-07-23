'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MoonveilLogo3D() {
  const logoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={logoRef}>
      <Center>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial 
            color="#9B59B6" 
            emissive="#C97BFF"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Center>
      <pointLight position={[10, 10, 10]} intensity={1} color="#C97BFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9B59B6" />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="h-96 w-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <MoonveilLogo3D />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}