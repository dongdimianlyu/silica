'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn, scrollToElement } from '@/lib/utils'
import { NavigationItem } from '@/types'
import Button from '@/components/ui/Button'

const navigationItems: NavigationItem[] = [
  { name: 'Products', href: '#products' },
  { name: 'Applications', href: '#applications' },
  { name: 'Quality', href: '#quality' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.slice(1)
      scrollToElement(elementId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => scrollToElement('hero')}
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">S</span>
              </div>
              <span className={cn(
                'font-bold text-xl lg:text-2xl transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}>
                SilicaGel
                <span className="text-accent">Pro</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 hover:text-accent relative',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className={cn(
                'transition-colors duration-300',
                !isScrolled && 'border-white text-white hover:bg-white hover:text-primary'
              )}
            >
              Get Quote
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#products')}
            >
              View Products
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={cn(
                'h-6 w-6 transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )} />
            ) : (
              <Bars3Icon className={cn(
                'h-6 w-6 transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-accent font-medium text-lg py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get Quote
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => handleNavClick('#products')}
                >
                  View Products
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
