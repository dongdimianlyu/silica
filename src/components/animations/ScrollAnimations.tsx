'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
  stagger?: number
}

// Animation variants for different directions
const variants = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className = '',
  stagger = 0
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
        staggerChildren: stagger
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
interface StaggerContainerProps {
  children: React.ReactNode
  stagger?: number
  className?: string
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  className = ''
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Counter animation for numbers
interface CounterAnimationProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  className?: string
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + duration * 1000
    const range = to - from

    const updateCounter = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      
      // Easing function (ease out)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(from + range * easedProgress)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(to)
      }
    }

    requestAnimationFrame(updateCounter)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

// Parallax scroll effect
interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const elementTop = rect.top + scrollY
      const elementHeight = rect.height
      const windowHeight = window.innerHeight
      
      // Calculate if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const yPos = -(scrollY - elementTop) * speed
        setOffsetY(yPos)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          transform: `translateY(${offsetY}px)`
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Intersection Observer hook for custom animations
export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}

// Text reveal animation
interface TextRevealProps {
  text: string
  delay?: number
  className?: string
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  className = ''
}) => {
  const words = text.split(' ')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
