"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function checkIsBot() {
  if (typeof window === "undefined") return false
  return !!(window as any).__IS_BOT
}

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const isBot = checkIsBot()
  const [isVisible, setIsVisible] = useState(!isBot);
  const onCompleteRef = useRef(onComplete);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // Bot already has isVisible=false and splashFinished=true from parent
    if (isBot) {
      onCompleteRef.current()
      return
    }

    // Lock scroll while splash is visible
    document.body.style.overflow = "hidden";
    
    // Super fast animations to minimize FCP/LCP impact for users and tests
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 300);

    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onCompleteRef.current();
    }, 500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, []);

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
          className="splash-overlay fixed inset-0 z-[999999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Ambient Glowing Orb removed for pure white theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-transparent pointer-events-none" />

          {/* Logo Container that shrinks slightly before exiting */}
          <motion.div 
            className="relative flex items-center justify-center flex-col z-10"
            exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
                transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
              >
                <span className="text-white">IA</span>
                <span className="text-blue-600">4</span>
              </motion.div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
