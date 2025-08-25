'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { scrollToElement } from '@/lib/utils'
import Button from '@/components/ui/Button'
import ClientOnly from '@/components/ui/ClientOnly'
import FloatingShapes from '@/components/animations/FloatingShapes'

const Hero: React.FC = () => {
  const handleGetQuote = () => {
    scrollToElement('contact')
  }

  const handleViewProducts = () => {
    scrollToElement('products')
  }

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Industrial Clients' },
    { value: '99.9%', label: 'Purity Standard' },
    { value: '24/7', label: 'Technical Support' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-gray-900 overflow-hidden">
      {/* Background Elements */}
{/* Temporarily disabled - fixing CSS styling issue */}
      {/* <ClientOnly>
        <FloatingShapes count={20} className="opacity-60" />
      </ClientOnly> */}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-transparent to-primary-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Trusted by 500+ Industrial Companies
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Premium{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Silica Gel
              </span>{' '}
              Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              Reliable moisture control and desiccant products for manufacturing, 
              packaging, and industrial processes. Engineered for performance, 
              trusted for results.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {[
                'ISO-certified manufacturing processes',
                'Custom particle sizes and specifications',
                'Technical support and expert consultation',
                'Fast delivery and reliable supply chain'
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center text-white/90"
                >
                  <ChevronRightIcon className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={handleGetQuote}
                className="bg-accent hover:bg-accent-dark text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                icon={ChevronRightIcon}
                iconPosition="right"
              >
                Get Industrial Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleViewProducts}
                className="border-white text-white hover:bg-white hover:text-primary shadow-lg"
                icon={PlayCircleIcon}
                iconPosition="left"
              >
                Product Specifications
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Central Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-accent/10 to-transparent rounded-full blur-3xl scale-150" />
            
            {/* Main Visual Container */}
            <div className="relative z-10 aspect-square max-w-lg mx-auto">
              {/* Central Circle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-white/20 backdrop-blur-md border border-white/30"
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-accent to-primary shadow-2xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-6xl lg:text-8xl font-bold text-white"
                  >
                    SiO₂
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="absolute w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(150px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 rounded-full bg-accent"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        onClick={() => scrollToElement('products')}
      >
        <div className="flex flex-col items-center space-y-2 hover:text-accent transition-colors">
          <span className="text-sm uppercase tracking-wide">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
