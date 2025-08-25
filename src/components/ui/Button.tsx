'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-sm hover:shadow-md',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/10',
  link: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline'
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  href,
  target = '_self',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left'
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variant !== 'link' && 'rounded-lg',
    buttonVariants[variant],
    buttonSizes[size],
    loading && 'cursor-wait',
    className
  )

  const content = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-4 h-4" />
      )}
      {children}
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-4 h-4" />
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={baseClasses}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      type="button"
    >
      {content}
    </button>
  )
}

export default Button
