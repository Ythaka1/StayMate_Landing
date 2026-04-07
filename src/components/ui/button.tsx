"use client"

import { motion } from "framer-motion"
import { ReactNode, CSSProperties } from "react"

export type ButtonVariant = "primary" | "ghost" | "gold" | "cream" | "outline"
export type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-7 py-3.5 text-[14px]",
  lg: "px-9 py-4 text-[15px]",
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: { background: "var(--g)", color: "var(--cream)", border: "none" },
  ghost: { background: "transparent", color: "var(--text)", border: "1px solid var(--border)" },
  gold: { background: "var(--gold)", color: "var(--g-dark)", border: "none" },
  cream: { background: "var(--cream)", color: "var(--g-dark)", border: "none" },
  outline: { background: "transparent", color: "var(--g)", border: "1px solid var(--border)" },
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={variantStyles[variant]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-medium tracking-wide
        cursor-pointer select-none transition-colors duration-200
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
}
