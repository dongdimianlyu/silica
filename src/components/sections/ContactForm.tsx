'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ContactFormData } from '@/types'
import { validateEmail, validatePhone } from '@/lib/utils'
import FormField from '@/components/ui/FormField'
import Button from '@/components/ui/Button'

interface ContactFormProps {
  type?: 'contact' | 'quote'
  className?: string
}

const ContactForm: React.FC<ContactFormProps> = ({
  type = 'contact',
  className = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    inquiryType: 'general'
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'support', label: 'Customer Support' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    // Required fields validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    // Optional phone validation
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        inquiryType: 'general'
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formTitle = type === 'quote' ? 'Request a Quote' : 'Get In Touch'
  const formDescription = type === 'quote' 
    ? 'Tell us about your moisture control needs and we\'ll provide a custom solution.'
    : 'Have questions about our silica gel products? We\'re here to help.'

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Form Header */}
      <div className="bg-gradient-blue px-8 py-6">
        <h3 className="text-2xl font-bold text-white mb-2">{formTitle}</h3>
        <p className="text-white/90">{formDescription}</p>
      </div>

      {/* Form Body */}
      <div className="p-8">
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
          >
            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-medium">Message sent successfully!</p>
              <p className="text-green-700 text-sm">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
          >
            <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
            <div>
              <p className="text-red-800 font-medium">Error sending message</p>
              <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <FormField
              label="Company"
              name="company"
              type="text"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <FormField
            label="Inquiry Type"
            name="inquiryType"
            type="select"
            required
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={handleChange}
          />

          <FormField
            label="Message"
            name="message"
            type="textarea"
            placeholder="Tell us about your moisture control needs, required specifications, or any questions you have..."
            required
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  message: '',
                  inquiryType: 'general'
                })
                setErrors({})
              }}
              disabled={isSubmitting}
            >
              Clear Form
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4">
            Prefer to contact us directly? You can reach us at:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">info@silicagelpro.com</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactForm
