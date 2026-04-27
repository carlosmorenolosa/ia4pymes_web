"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while splash is visible
    document.body.style.overflow = "hidden";
    
    // Ultra-fast splash for Lighthouse
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 300);

    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ y: 0, borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
          exit={{ 
            y: "-110%", 
            borderBottomLeftRadius: "50%", 
            borderBottomRightRadius: "50%",
            opacity: 1 // We want to maintain opacity and let it slide out like a solid curtain
          }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Ambient Glowing Orb removed for pure white theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-transparent pointer-events-none" />

          {/* Logo Container that shrinks slightly before exiting */}
          <motion.div 
            className="relative flex items-center justify-center flex-col z-10"
            exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative text-[7rem] sm:text-[10rem] md:text-[14rem] font-extrabold tracking-tighter flex items-center justify-center leading-none">
              
              {/* Outline Text Layer */}
              <div 
                className="flex tracking-[-0.04em]" 
                style={{ 
                  WebkitTextStroke: "2px rgba(255,255,255,0.15)", 
                  color: "transparent" 
                }}
              >
                <span>IA</span>
                <span style={{ WebkitTextStroke: "0px" }} className="text-white/5">4</span>
              </div>

              {/* Filled Text Layer (Animates from left to right) */}
              <motion.div 
                className="absolute top-0 left-0 flex overflow-hidden whitespace-nowrap tracking-[-0.04em] drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="text-white">IA</span>
                <span className="text-blue-600">4</span>
              </motion.div>
            </div>
            
            {/* Minimalist Tech Loading Text */}
            <motion.div 
              className="mt-6 md:mt-10 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex gap-1.5">
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-[0.3em] uppercase">
                Optimizando Procesos...
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
