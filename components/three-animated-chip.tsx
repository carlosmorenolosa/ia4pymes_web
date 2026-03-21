"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, RoundedBox, Text, ContactShadows, SpotLight, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import { FunctionalChatbot } from "./functional-chatbot";

function InteractiveChip() {
  const group = useRef<THREE.Group>(null);
  const [isInteracting, setIsInteracting] = useState(false);
 
  // Smooth rotation based on mouse or idle state
  useFrame((state) => {
    if (!group.current) return;
    
    // Idle rotation + follow mouse
    const t = state.clock.getElapsedTime();
    
    // If interacting, target 0 rotation. Otherwise target mouse-based rotation.
    const targetRotY = isInteracting ? 0 : (state.pointer.x * Math.PI) / 6;
    const targetRotX = isInteracting ? 0 : -(state.pointer.y * Math.PI) / 8;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05);
    
    // Disable bobbing while interacting
    const targetPosY = isInteracting ? 0 : Math.sin(t * 1.5) * 0.1;
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPosY, 0.05);
  });

  return (
    <group ref={group}>
      <Float speed={isInteracting ? 0 : 2} rotationIntensity={isInteracting ? 0 : 0.5} floatIntensity={isInteracting ? 0 : 0.5}>
        {/* The background panel is removed as requested */}
      </Float>

      {/* The 3D Projected Chatbot - Now centered and larger */}
        <Html 
          transform
          position={[0, 0, 0]} 
          scale={0.55}
          className="pointer-events-auto"
          center
        >
          <div 
            style={{ width: '340px', height: '480px', backgroundColor: 'white' }}
            className="rounded-[40px] shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <FunctionalChatbot is3D={true} onInteractionChange={setIsInteracting} />
          </div>
        </Html>
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
