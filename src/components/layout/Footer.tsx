'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { scrollToElement } from '@/lib/utils'
import Button from '@/components/ui/Button'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Applications', href: '#applications' },
    { name: 'Quality Standards', href: '#quality' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const productCategories = [
    { name: 'Indicating Silica Gel', href: '#products' },
    { name: 'Non-Indicating Silica Gel', href: '#products' },
    { name: 'Specialty Grades', href: '#products' },
    { name: 'Bulk Industrial', href: '#products' },
    { name: 'Custom Solutions', href: '#contact' }
  ]



  const contactInfo = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'info@silicagelpro.com',
      href: 'mailto:info@silicagelpro.com'
    },
    {
      icon: MapPinIcon,
      label: 'Address',
      value: '123 Industrial Blvd, Manufacturing City, MC 12345',
      href: '#contact'
    },
    {
      icon: GlobeAltIcon,
      label: 'Website',
      value: 'www.silicagelpro.com',
      href: '/'
    }
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.slice(1)
      scrollToElement(elementId)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Silica Gel Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance and custom solutions for your industrial moisture control needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleNavClick('#contact')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Request Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavClick('#products')}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Browse Products
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-2xl">
                  SilicaGel<span className="text-accent">Pro</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading manufacturer and distributor of premium silica gel solutions for industrial applications. 
                Committed to quality, reliability, and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <span className="text-white font-bold">F</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                {productCategories.map((product) => (
                  <li key={product.name}>
                    <button
                      onClick={() => handleNavClick(product.href)}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href.startsWith('#') ? (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-white hover:text-accent transition-colors"
                        >
                          {item.value}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="text-white hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SilicaGel Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/quality" className="text-gray-400 hover:text-accent transition-colors">
                Quality Standards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
