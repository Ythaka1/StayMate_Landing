"use client"

import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "gold" | "green" | "muted"
  pulse?: boolean
}

export function Badge({ children, variant = "gold", pulse }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    gold: {
      border: "1px solid rgba(200,168,130,0.3)",
      background: "rgba(200,168,130,0.06)",
      color: "var(--gold-d)",
    },
    green: {
      border: "1px solid rgba(26,77,46,0.15)",
      background: "var(--g-pale)",
      color: "var(--g)",
    },
    muted: {
      border: "1px solid var(--border)",
      background: "rgba(255,255,255,0.5)",
      color: "var(--muted)",
    },
  }

  const dotColor: Record<string, string> = {
    gold: "var(--gold)",
    green: "var(--g)",
    muted: "var(--muted)",
  }

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2"
      style={{
        ...styles[variant],
        fontSize: "11px",
        fontFamily: "var(--font-instrument)",
        fontWeight: 500,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
      }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${pulse ? "animate-pulse" : ""}`}
        style={{ background: dotColor[variant] }}
      />
      {children}
    </span>
  )
}
