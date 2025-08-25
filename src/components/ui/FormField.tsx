'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { FormFieldProps } from '@/types'

interface ExtendedFormFieldProps extends FormFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const FormField: React.FC<ExtendedFormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  options = [],
  className = '',
  error,
  disabled = false,
  value,
  onChange
}) => {
  const baseClasses = cn(
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-500',
    'focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none',
    'transition-all duration-300',
    error && 'border-red-400 focus:border-red-400 focus:ring-red-100',
    disabled && 'bg-gray-50 cursor-not-allowed opacity-70',
    className
  )

  const labelClasses = cn(
    'block text-sm font-medium text-gray-700 mb-2',
    required && 'after:content-["*"] after:text-red-500 after:ml-1'
  )

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value || ''}
            onChange={onChange}
            className={cn(baseClasses, 'min-h-[120px] resize-y')}
            rows={4}
          />
        )
      
      case 'select':
        return (
          <select
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            value={value || ''}
            onChange={onChange}
            className={cn(baseClasses, 'cursor-pointer')}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            value={value || ''}
            onChange={onChange}
            className={baseClasses}
          />
        )
    }
  }

  return (
    <div className="space-y-1">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      {renderInput()}
      {error && (
        <p className="text-sm text-red-600 mt-1 flex items-center">
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
