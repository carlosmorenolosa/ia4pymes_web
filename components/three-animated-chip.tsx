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

        {/* The 3D Projected Chatbot */}
        {/* We use scale={0.01} so a 340x440 px div fits the frame */}
        <Html 
          position={[0, 0, 0.1]} 
          prepend
          center
          distanceFactor={6}
          className="pointer-events-auto"
        >
          <div 
            className="w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <FunctionalChatbot is3D={true} />
          </div>
        </Html>
      </Float>
    </group>
  );
}

export function ThreeAnimatedChip() {
  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto cursor-pointer relative z-40">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} intensity={2} angle={0.2} penumbra={1} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={1} color="#60a5fa" />
        
        <InteractiveChip />
        
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
