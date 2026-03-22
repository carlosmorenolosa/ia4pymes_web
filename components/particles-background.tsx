"use client"

import { useEffect, useState, useRef } from "react"

export const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (typeof window === "undefined") return

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * 2 + 1.5
                this.speedX = Math.random() * 0.4 - 0.2
                this.speedY = Math.random() * -0.4 - 0.2
                this.opacity = Math.random() * 0.4 + 0.4
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.y < 0) {
                    this.y = canvas!.height
                    this.x = Math.random() * canvas!.width
                }
                if (this.x < 0 || this.x > canvas!.width) {
                    this.speedX *= -1
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            init()
        }

        const init = () => {
            particles = []
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()
            }
            animationFrameId = requestAnimationFrame(animate)
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    if (!mounted) return null

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-white"
        />
    )
}

