"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox, Text, ContactShadows, SpotLight } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function InteractiveChip() {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth rotation based on mouse or idle state
  useFrame((state) => {
    if (!group.current) return;
    
    // Idle rotation + follow mouse a bit
    const t = state.clock.getElapsedTime();
    const targetRotY = (state.pointer.x * Math.PI) / 4;
    const targetRotX = -(state.pointer.y * Math.PI) / 4;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.1);
    
    // Slight idle bob and spin
    group.current.position.y = Math.sin(t * 2) * 0.1;
  });

  return (
    <group 
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Glass Chip Body */}
        <RoundedBox args={[3.5, 3.5, 0.4]} radius={0.3} smoothness={8}>
          <meshPhysicalMaterial 
            transmission={1} 
            transparent 
            opacity={1} 
            roughness={0.15} 
            thickness={2.5} 
            ior={1.4} 
            color="#ffffff" 
            clearcoat={1} 
            clearcoatRoughness={0.1}
          />
        </RoundedBox>

        {/* Inner Core (dark processor) */}
        <RoundedBox args={[2, 2, 0.2]} position={[0, 0, -0.05]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color="#0f172a" 
            metalness={0.8} 
            roughness={0.4} 
          />
        </RoundedBox>
        
        {/* Emissive core accent */}
        <RoundedBox args={[0.5, 0.5, 0.22]} position={[0, 0, -0.05]} radius={0.05} smoothness={4}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={hovered ? 2 : 1.2} 
            toneMapped={false} 
          />
        </RoundedBox>

        {/* Main Logo Text on Glass */}
        <Text 
          position={[0, 0.3, 0.25]} 
          fontSize={1.2} 
          fontWeight="bold" 
          letterSpacing={-0.05}
          color="#1e293b" // slate-800
        >
          IA<span style={{color: '#2563eb'}}>4</span>
        </Text>
        
        <Text 
          position={[0, -0.8, 0.25]} 
          fontSize={0.25} 
          letterSpacing={0.3}
          color="#64748b" // slate-500
        >
          PYMES CORE
        </Text>

        {/* Decorative Lines/Circuits on the glass */}
        {/* Horizontal */}
        <mesh position={[0, 1.2, 0.2]}>
          <boxGeometry args={[1.5, 0.02, 0.01]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[0, -1.2, 0.2]}>
          <boxGeometry args={[1.5, 0.02, 0.01]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        {/* Vertical */}
        <mesh position={[-1.2, 0, 0.2]}>
          <boxGeometry args={[0.02, 1.5, 0.01]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[1.2, 0, 0.2]}>
          <boxGeometry args={[0.02, 1.5, 0.01]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
      </Float>
    </group>
  );
}

export function ThreeAnimatedChip() {
  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto cursor-pointer relative z-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} intensity={2.5} angle={0.2} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        
        <InteractiveChip />
        
        <Environment preset="city" />
        
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={5} 
          color="#94a3b8"
        />
      </Canvas>
    </div>
  );
}
