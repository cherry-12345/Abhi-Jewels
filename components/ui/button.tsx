import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'luxury'
type ButtonSize = 'default' | 'sm' | 'lg' | 'xl' | 'icon'

const buttonVariants = (variant: ButtonVariant = 'default', size: ButtonSize = 'default') => {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variants: Record<ButtonVariant, string> = {
    default: 'bg-gold-500 text-white shadow hover:bg-gold-600 hover:shadow-lg',
    destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-600',
    outline: 'border border-gold-500 bg-transparent text-gold-600 shadow-sm hover:bg-gold-50',
    secondary: 'bg-platinum-200 text-gray-900 shadow-sm hover:bg-platinum-300',
    ghost: 'hover:bg-gold-50 hover:text-gold-600',
    link: 'text-gold-600 underline-offset-4 hover:underline',
    luxury: 'luxury-gradient text-white shadow-luxury hover:shadow-xl transform hover:scale-105 hover:glow border-0 font-semibold tracking-wide',
  }
  
  const sizes: Record<ButtonSize, string> = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-12 rounded-lg px-8',
    xl: 'h-14 rounded-xl px-10 text-base',
    icon: 'h-10 w-10',
  }
  
  return `${baseStyles} ${variants[variant]} ${sizes[size]}`
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants(variant, size), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }