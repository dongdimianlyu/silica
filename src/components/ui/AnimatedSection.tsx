'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionProps, AnimationConfig } from '@/types'

interface AnimatedSectionProps extends SectionProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'none'
  config?: AnimationConfig
}

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  none: {
    hidden: {},
    visible: {}
  }
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  className,
  children,
  animation = 'slideUp',
  config = { duration: 0.6, delay: 0, once: true }
}) => {
  const {
    duration = 0.6,
    delay = 0,
    ease = 'easeOut',
    stagger = 0,
    once = true
  } = config

  return (
    <motion.section
      id={id}
      className={cn('relative', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease,
        staggerChildren: stagger
      }}
    >
      {children}
    </motion.section>
  )
}

AnimatedSection.Item = function AnimatedItem({
  children,
  className,
  animation = 'slideUp',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  animation?: keyof typeof animationVariants
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={animationVariants[animation]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
