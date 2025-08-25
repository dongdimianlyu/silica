export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  applications: string[]
  specifications?: Specification[]
  image?: string
  category: ProductCategory
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface Specification {
  property: string
  value: string
  unit?: string
}

export interface Application {
  id: string
  title: string
  description: string
  industry: string
  benefits: string[]
  icon?: React.ComponentType<{ className?: string }>
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  inquiryType: 'general' | 'quote' | 'technical' | 'support'
}

export interface QuoteFormData extends ContactFormData {
  productType: string
  quantity: string
  specifications?: string
  timeline?: string
  packaging?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating?: number
}

export interface QualityStandard {
  id: string
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface FloatingShape {
  id: string
  x: number
  y: number
  size: number
  opacity: number
  animationDelay: number
  animationDuration: number
  shape: 'circle' | 'square' | 'triangle' | 'hexagon'
}

export interface Particle {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string
  stagger?: number
  once?: boolean
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  disabled?: boolean
  loading?: boolean
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
  glass?: boolean
  gradient?: boolean
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'glow'
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  className?: string
  error?: string
  disabled?: boolean
}
