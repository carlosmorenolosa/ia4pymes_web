"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

/**
 * The hero argument, rendered: a field of scattered nodes (manual work) that
 * connects and aligns into a reticle (an automated system) as the page scrolls.
 * Density and motion are reduced on small screens and disabled entirely under
 * `prefers-reduced-motion`, where the static CSS fallback stays visible.
 */

const NODES = 144
const COLS = 16
const ROWS = Math.ceil(NODES / COLS)

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

function useNodeCount() {
  const [count, setCount] = useState(NODES)
  useEffect(() => {
    const small = window.matchMedia("(max-width: 768px)").matches
    setCount(small ? 72 : NODES)
  }, [])
  return count
}

/** 0 at the top of the hero, 1 once the hero has mostly scrolled away. */
function useScrollOrder() {
  const ref = useRef(0)
  useEffect(() => {
    const update = () => {
      const span = window.innerHeight * 0.85
      ref.current = Math.min(1, Math.max(0, window.scrollY / span))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])
  return ref
}

type NetworkProps = {
  count: number
  order: React.RefObject<number>
  pointer: React.RefObject<{ x: number; y: number }>
}

function Network({ count, order, pointer }: NetworkProps) {
  const group = useRef<THREE.Group>(null)
  const points = useRef<THREE.Points>(null)
  const lines = useRef<THREE.LineSegments>(null)
  const { viewport } = useThree()

  const { chaos, grid, pairs } = useMemo(() => {
    const cols = COLS
    const rows = Math.ceil(count / cols)
    const chaos = new Float32Array(count * 3)
    const grid = new Float32Array(count * 3)

    // Deterministic pseudo-random so the composition is stable between renders.
    let seed = 1337
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }

    for (let i = 0; i < count; i++) {
      const radius = 5.2 + rand() * 3.4
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(2 * rand() - 1)
      chaos[i * 3] = Math.cos(theta) * Math.sin(phi) * radius
      chaos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * radius * 0.72
      chaos[i * 3 + 2] = Math.cos(phi) * radius * 0.6

      const col = i % cols
      const row = Math.floor(i / cols)
      grid[i * 3] = (col - (cols - 1) / 2) * 1.08
      grid[i * 3 + 1] = (row - (rows - 1) / 2) * 1.08
      grid[i * 3 + 2] = 0
    }

    const pairs: number[] = []
    for (let i = 0; i < count; i++) {
      const col = i % cols
      if (col < cols - 1 && i + 1 < count) pairs.push(i, i + 1)
      if (i + cols < count) pairs.push(i, i + cols)
    }

    return { chaos, grid, pairs }
  }, [count])

  const positions = useMemo(() => chaos.slice(), [chaos])
  const linePositions = useMemo(() => new Float32Array(pairs.length * 3), [pairs])

  useFrame(() => {
    const t = order.current ?? 0
    const eased = t * t * (3 - 2 * t) // smoothstep

    const pos = positions
    for (let i = 0; i < pos.length; i++) {
      pos[i] = chaos[i] + (grid[i] - chaos[i]) * eased
    }

    if (points.current) {
      points.current.geometry.attributes.position.needsUpdate = true
      const material = points.current.material as THREE.PointsMaterial
      material.opacity = 0.85 - eased * 0.25
    }

    if (lines.current) {
      for (let k = 0; k < pairs.length; k++) {
        const n = pairs[k]
        linePositions[k * 3] = pos[n * 3]
        linePositions[k * 3 + 1] = pos[n * 3 + 1]
        linePositions[k * 3 + 2] = pos[n * 3 + 2]
      }
      lines.current.geometry.attributes.position.needsUpdate = true
      const material = lines.current.material as THREE.LineBasicMaterial
      material.opacity = Math.max(0, (eased - 0.28) / 0.72) * 0.32
    }

    if (group.current) {
      // Slow drift while scattered, settling as the system forms.
      const drift = 1 - eased
      group.current.rotation.y += (0.0016 + (pointer.current?.x ?? 0) * 0.0009) * drift
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        (pointer.current?.y ?? 0) * 0.18 * drift,
        0.05,
      )
    }
  })

  return (
    <group ref={group} scale={Math.min(1, viewport.width / 12)}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#1d4ed8"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#1d4ed8" transparent opacity={0} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

export default function NodeSystem() {
  const reduced = usePrefersReducedMotion()
  const count = useNodeCount()
  const order = useScrollOrder()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  if (reduced) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      <Network count={count} order={order} pointer={pointer} />
    </Canvas>
  )
}
