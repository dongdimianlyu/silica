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

Card.Header = function CardHeader({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}

Card.Footer = function CardFooter({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('px-6 pb-6', className)}>
      {children}
    </div>
  )
}

Card.Image = function CardImage({
  src,
  alt,
  className
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn('overflow-hidden rounded-t-lg', className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  )
}

export default Card
