"use client";

import { m, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function AnimatedChip() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const xPos = (clientX - left - width / 2) / 10;
    const yPos = -(clientY - top - height / 2) / 10;
    
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useMotionTemplate`${mouseY}deg`;
  const rotateY = useMotionTemplate`${mouseX}deg`;

  return (
    <div className="relative w-full max-w-sm aspect-square mx-auto" style={{ perspective: "1000px" }}>
      <m.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="relative w-full h-full rounded-3xl bg-white/40 border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden cursor-pointer group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-400/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Inner circuit lines (decorative) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* Diagonal Light reflection */}
        <div 
          className="absolute inset-0 pointer-events-none transition-transform duration-700 group-hover:translate-x-full" 
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 25%, transparent 30%)",
            backgroundSize: "200% 100%",
            transform: "translateZ(1px) translateX(-100%)"
          }}
        ></div>

        {/* 3D Content */}
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Chip visual body */}
          <div className="w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-inner flex items-center justify-center border border-slate-200/50">
            <div className="w-16 h-16 rounded-xl bg-slate-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] flex items-center justify-center relative overflow-hidden">
               {/* Microchip internal lines */}
               <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
               <div className="w-8 h-8 bg-blue-600 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10"></div>
            </div>
          </div>
          
          <div className="flex items-center text-5xl font-extrabold tracking-tighter">
            <span className="text-blue-600 drop-shadow-sm">IA</span>
            <span className="text-slate-800 drop-shadow-sm">4</span>
          </div>
          <p className="text-[0.65rem] text-center text-slate-500 tracking-[0.3em] font-semibold mt-2 font-mono uppercase">
            Inteligencia Activa
          </p>
        </div>
      </m.div>
    </div>
  );
}
