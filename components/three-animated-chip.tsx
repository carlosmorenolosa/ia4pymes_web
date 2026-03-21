"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox, Text, ContactShadows, SpotLight } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function InteractiveChip() {
  const group = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
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

    // Animate the AI core
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.01;
      coreRef.current.rotation.x += 0.01;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.005;
      ringRef.current.rotation.x = Math.sin(t) * 0.1;
    }
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
            roughness={0.1} 
            thickness={2.5} 
            ior={1.5} 
            color="#ffffff" 
            clearcoat={1} 
            clearcoatRoughness={0.1}
          />
        </RoundedBox>

        {/* AI Holographic Core (Octahedron + Rings) */}
        <group position={[0, 0, -0.05]}>
          {/* Base dark chip substrate */}
          <RoundedBox args={[2.5, 2.5, 0.1]} radius={0.1} smoothness={4}>
            <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
          </RoundedBox>

          {/* Glowing central node */}
          <mesh ref={coreRef} position={[0, 0.2, 0.2]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial 
              color="#3b82f6" 
              emissive="#60a5fa" 
              emissiveIntensity={hovered ? 3 : 1.5} 
              wireframe={hovered}
            />
          </mesh>

          {/* Tech Ring */}
          <mesh ref={ringRef} position={[0, 0.2, 0.2]}>
            <torusGeometry args={[0.8, 0.02, 16, 64]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.5} />
          </mesh>

          {/* Particles/Dots grid representing neural net */}
          <points position={[-0.8, -0.5, 0.1]}>
            <bufferGeometry>
              <bufferAttribute 
                attach="attributes-position"
                args={[new Float32Array([
                  0,0,0, 0.5,0,0, 1.0,0,0,
                  0,0.5,0, 0.5,0.5,0, 1.0,0.5,0,
                  0,1.0,0, 0.5,1.0,0, 1.0,1.0,0,
                ]), 3]}
              />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#3b82f6" sizeAttenuation transparent opacity={0.6} />
          </points>
        </group>

        {/* Main Logo Text on Glass */}
        <group position={[0, -0.8, 0.35]} scale={0.5}>
          <Text 
            position={[-0.5, 0, 0]} 
            fontSize={1.8} 
            fontWeight="bold" 
            letterSpacing={-0.05}
            color="#ffffff" 
            outlineWidth={0.02}
            outlineColor="#333333"
            sdfGlyphSize={64}
            font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
          >
            IA
          </Text>
          <Text 
            position={[1.0, 0, 0]} 
            fontSize={1.8} 
            fontWeight="bold" 
            color="#60a5fa" 
            outlineWidth={0.02}
            outlineColor="#1e3a8a"
            sdfGlyphSize={64}
            font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
          >
            4
          </Text>
        </group>
        
        <Text 
          position={[0, -1.3, 0.35]} 
          fontSize={0.2} 
          letterSpacing={0.4}
          color="#94a3b8" 
          fontWeight="bold"
        >
          PYMES NEURAL CORE
        </Text>
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
