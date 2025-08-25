'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Particle } from '@/types'
import { getRandomFloat, getRandomInt } from '@/lib/utils'

interface ParticleSystemProps {
  count?: number
  speed?: number
  className?: string
  density?: 'low' | 'medium' | 'high'
  color?: string
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 50,
  speed = 1,
  className = '',
  density = 'medium',
  color = 'rgba(0, 212, 255, 0.4)'
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  const densityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5
  }

  const particleCount = Math.floor(count * densityMultiplier[density])

  // Initialize particles
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    particlesRef.current = Array.from({ length: particleCount }, (_, index) => ({
      id: `particle-${index}`,
      x: getRandomFloat(0, rect.width),
      y: getRandomFloat(0, rect.height),
      vx: getRandomFloat(-0.5, 0.5) * speed,
      vy: getRandomFloat(-0.8, -0.2) * speed,
      size: getRandomFloat(1, 4),
      opacity: getRandomFloat(0.2, 0.6),
      color
    }))
  }, [particleCount, speed, color])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const rect = container.getBoundingClientRect()

      particlesRef.current = particlesRef.current.map(particle => {
        let newX = particle.x + particle.vx
        let newY = particle.y + particle.vy

        // Wrap around edges
        if (newX < 0) newX = rect.width
        if (newX > rect.width) newX = 0
        if (newY < 0) newY = rect.height
        if (newY > rect.height) newY = 0

        return {
          ...particle,
          x: newX,
          y: newY
        }
      })

      // Re-render particles
      const canvas = container.querySelector('canvas') as HTMLCanvasElement
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          particlesRef.current.forEach(particle => {
            ctx.globalAlpha = particle.opacity
            ctx.fillStyle = particle.color
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()
          })
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const canvas = container.querySelector('canvas') as HTMLCanvasElement
      
      if (canvas) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      <canvas
        className="w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}

// Simpler React-based particle system as fallback
export const ReactParticleSystem: React.FC<ParticleSystemProps> = ({
  count = 30,
  speed = 1,
  className = '',
  density = 'medium',
  color = '#00D4FF'
}) => {
  const [particles, setParticles] = useState<any[]>([])
  const [isClient, setIsClient] = useState(false)

  const densityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5
  }

  const particleCount = Math.floor(count * densityMultiplier[density])

  useEffect(() => {
    setIsClient(true)
    setParticles(
      Array.from({ length: particleCount }, (_, index) => ({
        id: `react-particle-${index}`,
        x: getRandomFloat(0, 100),
        y: getRandomFloat(0, 100),
        size: getRandomInt(2, 6),
        opacity: getRandomFloat(0.1, 0.4),
        duration: getRandomFloat(20, 40),
        delay: getRandomFloat(0, 10)
      }))
    )
  }, [particleCount])

  if (!isClient) {
    return <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} />
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: particle.opacity,
            zIndex: -1
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, getRandomInt(-50, 50), 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default ParticleSystem
