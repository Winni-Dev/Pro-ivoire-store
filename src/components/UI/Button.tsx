import { motion } from 'framer-motion'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  onClick,
  type = 'button',
  className
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg cursor-pointer"
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105",
    secondary: "bg-secondary hover:bg-secondary-dark text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </motion.button>
  )
}