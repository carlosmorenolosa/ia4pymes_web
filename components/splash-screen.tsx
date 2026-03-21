"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while splash is visible
    document.body.style.overflow = "hidden";
    
    // The fill animation takes 2.2s, let's wait 2.6s then start exit
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    // Call onComplete after the exit animation finishes (~0.8s)
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 3400);

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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem] font-black tracking-tighter flex items-center justify-center">
            {/* Outline Text Layer */}
            <div 
              className="flex" 
              style={{ 
                WebkitTextStroke: "3px #e2e8f0", 
                color: "transparent" 
              }}
            >
              <span>I</span>
              <span>A</span>
              <span className="text-[#e2e8f0]" style={{ WebkitTextStroke: "0px" }}>4</span>
            </div>

            {/* Filled Text Layer (Animates from left to right) */}
            <motion.div 
              className="absolute top-0 left-0 flex overflow-hidden whitespace-nowrap text-slate-900"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              <span>I</span>
              <span>A</span>
              <span className="text-blue-600">4</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 text-xs md:text-sm font-bold text-slate-400 tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Iniciando Entorno...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
