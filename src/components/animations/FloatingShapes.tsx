'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FloatingShape } from '@/types'
import { getRandomFloat, getRandomInt } from '@/lib/utils'

interface FloatingShapesProps {
  count?: number
  className?: string
}

const shapes = ['circle', 'square', 'triangle', 'hexagon'] as const

const FloatingShapes: React.FC<FloatingShapesProps> = ({
  count = 15,
  className = ''
}) => {
  const [floatingShapes, setFloatingShapes] = useState<FloatingShape[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setFloatingShapes(
      Array.from({ length: count }, (_, index) => ({
        id: `shape-${index}`,
        x: getRandomFloat(0, 100),
        y: getRandomFloat(0, 100),
        size: getRandomInt(20, 80),
        opacity: getRandomFloat(0.1, 0.3),
        animationDelay: getRandomFloat(0, 5),
        animationDuration: getRandomFloat(8, 15),
        shape: shapes[getRandomInt(0, shapes.length - 1)]
      }))
    )
  }, [count])

  if (!isClient) {
    return <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
  }

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "absolute animate-pulse-glow"
    const glowClasses = "shadow-glow"
    
    switch (shape.shape) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} ${glowClasses} rounded-full bg-gradient-blue`}
            style={{
              width: shape.size,
              height: shape.size,
            }}
          />
        )
      case 'square':
        return (
          <div
            className={`${baseClasses} ${glowClasses} rounded-lg bg-gradient-blue rotate-45`}
            style={{
              width: shape.size,
              height: shape.size,
            }}
          />
        )
      case 'triangle':
        return (
          <div
            className={`${baseClasses} ${glowClasses}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid #00D4FF`,
              filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))',
            }}
          />
        )
      case 'hexagon':
        return (
          <div
            className={`${baseClasses} ${glowClasses} bg-gradient-blue`}
            style={{
              width: shape.size,
              height: shape.size * 0.866,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            scale: 1,
            y: [0, -30, 0],
            rotate: shape.shape === 'square' ? [45, 135, 45] : [0, 360, 0],
          }}
          transition={{
            duration: shape.animationDuration,
            delay: shape.animationDelay,
            repeat: Infinity,
            ease: "easeInOut",
            y: {
              duration: shape.animationDuration * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: shape.animationDuration * 1.2,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 1,
              ease: "easeOut",
            },
            scale: {
              duration: 1,
              ease: "easeOut",
            }
          }}
          style={{ zIndex: -1 }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingShapes
