export interface Service {
  slug: string
  title: string
  shortDescription: string
  icon: string
  image: string
  benefits: string[]
  priceRange?: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  rating: number
  quote: string
  avatar?: string
}

export interface Project {
  id: string
  title: string
  category: string
  beforeImage: string
  afterImage: string
  metric?: string
  description: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FormFieldError {
  message?: string
}
