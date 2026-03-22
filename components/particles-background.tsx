"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const ParticlesBackground = () => {
    const [mounted, setMounted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll()

    // Parallax values for depth
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
    const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
    const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white">
            {/* 3D Infinity Grids */}
            <motion.div 
                style={{ y: gridY }}
                className="absolute inset-0 opacity-[0.03]"
            >
                {/* Floor Grid */}
                <div 
                    className="absolute bottom-0 w-full h-[150vh] origin-bottom"
                    style={{
                        backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "rotateX(75deg) translateZ(-50px)",
                    }}
                ></div>
                
                {/* Ceiling Grid */}
                <div 
                    className="absolute top-0 w-full h-[150vh] origin-top"
                    style={{
                        backgroundImage: "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        transform: "rotateX(-75deg) translateZ(-50px)",
                    }}
                ></div>
            </motion.div>

            {/* Immersive Glassmorphism Blobs */}
            <div className="absolute inset-0">
                {/* Main Large Blob */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ y: blob1Y }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square rounded-full bg-blue-600/5 blur-[120px]"
                />

                {/* Accent Blob */}
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ y: blob2Y }}
                    className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-blue-400/5 blur-[100px]"
                />

                {/* Subtle Floating Center Blob */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-blue-50/40 blur-[80px]"
                />
            </div>

            {/* Vignette effect for immersion focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_100%)] shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]"></div>
        </div>
    )
}
