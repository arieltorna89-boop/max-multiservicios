import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  dark?: boolean
}

export default function Badge({ children, dark = true }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${
        dark
          ? 'border-white/20 text-white/90 bg-white/5'
          : 'border-brand/20 text-brand bg-brand/5'
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {children}
    </span>
  )
}