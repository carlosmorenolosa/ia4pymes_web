"use client"

import { FunctionalChatbot } from "./functional-chatbot"

export function ThreeAnimatedChip() {
  return (
    <div className="w-full flex items-center justify-center p-4 lg:p-8 pointer-events-auto">
      {/* 3D Perspective Wrapper */}
      <div 
        className="relative w-[280px] h-[400px] xs:w-[320px] xs:h-[450px] sm:w-[380px] sm:h-[540px]"
        style={{
          perspective: "2000px", 
        }}
      >
        {/* The 3D Object Container */}
        <div 
          className="w-full h-full relative transition-transform duration-1000 ease-out"
          style={{
            transformStyle: "preserve-3d",
            // Fixed isometric-like orientation
            transform: "rotateY(-14deg) rotateX(6deg) rotateZ(-1deg)", 
          }}
        >
          {/* Floor Shadow (Creates depth relative to the page) */}
          <div 
            className="absolute inset-0 bg-blue-900/15 blur-[40px] rounded-[40px] pointer-events-none"
            style={{ transform: "translateZ(-60px) translateY(40px) translateX(-20px)" }}
          ></div>

          {/* 3D Extrusion (Thickness of the device) */}
          {/* Using 12 layers to simulate a solid block of depth */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-[40px] pointer-events-none ${
                i === 0 ? "bg-slate-300" : "bg-slate-100 border border-slate-200/50"
              }`}
              style={{ transform: `translateZ(${-i * 1.5}px)` }}
            ></div>
          ))}

          {/* Device Backplate / Outer Rim */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-200/80 rounded-[40px] pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"
            style={{ transform: "translateZ(-1px)" }}
          ></div>

          {/* Front Face (The actual Chatbot UI) */}
          <div 
            className="absolute inset-0 bg-white rounded-[40px] shadow-sm flex flex-col overflow-hidden border border-slate-100"
            style={{ transform: "translateZ(1px)" }}
          >
            <FunctionalChatbot />
          </div>
          
          {/* Subtle screen glare/reflection effect over the chatbot */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[40px] pointer-events-none"
            style={{ transform: "translateZ(2px)" }}
          ></div>

        </div>
      </div>
    </div>
  )
}
