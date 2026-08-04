import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white text-navy hover:bg-bone',
  secondary: 'bg-brand text-white hover:bg-navy-light',
  outline: 'border border-white/25 text-white hover:bg-white/10',
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy'

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 cursor-pointer whitespace-nowrap'

  const inner = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`inline-block rounded-full ${focusRing}`}>
        {inner}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`appearance-none bg-transparent border-none p-0 rounded-full ${focusRing}`}
    >
      {inner}
    </button>
  )
}