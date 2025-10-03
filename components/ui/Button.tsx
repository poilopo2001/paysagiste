import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary'
  size?: 'default' | 'xl'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'btn'
  const variantStyles = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    secondary: 'btn-secondary'
  }
  const sizeStyles = {
    default: '',
    xl: 'btn-xl'
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
