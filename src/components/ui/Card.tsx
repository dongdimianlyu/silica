'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/types'

const shadowVariants = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  glow: 'shadow-glow'
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  hover = false,
  glass = false,
  gradient = false,
  shadow = 'md'
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white transition-all duration-300',
        hover && 'hover:scale-105 hover:shadow-xl cursor-pointer',
        glass && 'glass-morphism border-white/20',
        gradient && 'gradient-blue text-white border-none',
        shadowVariants[shadow],
        className
      )}
    >
      {children}
    </div>
  )
}



export default Card
