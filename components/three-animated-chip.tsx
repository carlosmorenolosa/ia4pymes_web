"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox, Text, ContactShadows, SpotLight, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import { FunctionalChatbot } from "./functional-chatbot";

function InteractiveChip() {
  const group = useRef<THREE.Group>(null);

  // Smooth rotation based on mouse or idle state
  useFrame((state) => {
    if (!group.current) return;
    
    // Idle rotation + follow mouse a bit
    const t = state.clock.getElapsedTime();
    
    // Reduce rotation significantly so the chat is readable and usable
    const targetRotY = (state.pointer.x * Math.PI) / 12;
    const targetRotX = -(state.pointer.y * Math.PI) / 16;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.1);
    
    // Slight idle bob
    group.current.position.y = Math.sin(t * 1.5) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Glass Screen Frame */}
        <RoundedBox args={[3.4, 4.4, 0.1]} radius={0.15} smoothness={8}>
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

        {/* Backplate to ensure the chat is opaque from behind if it rotates too much */}
        <RoundedBox args={[3.3, 4.3, 0.05]} position={[0, 0, -0.05]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.8} />
        </RoundedBox>

        {/* The 3D Projected Chatbot */}
        {/* We use scale={0.01} so a 330x430 px div exactly fits a 3.3x4.3 3D unit space */}
        <Html 
          transform 
          position={[0, 0, 0.06]} 
          scale={0.01}
          className="pointer-events-auto"
        >
          {/* Prevent standard 3D gestures from capturing clicks on the HTML */}
          <div 
            className="w-[330px] h-[430px] bg-transparent"
            onPointerDown={(e) => e.stopPropagation()}
            onPointerOver={(e) => e.stopPropagation()}
          >
            {/* Remove the white background from FunctionalChatbot wrapper by forcing it to fill this container */}
            <div className="w-full h-full scale-100 origin-center">
              <FunctionalChatbot />
            </div>
          </div>
        </Html>
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
