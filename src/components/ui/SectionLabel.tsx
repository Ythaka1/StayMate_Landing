"use client"

import { motion } from "framer-motion"
import { fadeUp, viewport } from "@/lib/animations"

interface SectionLabelProps {
  children: string
  light?: boolean
  centered?: boolean
}

export function SectionLabel({ children, light, centered }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`flex items-center gap-3 mb-6 ${centered ? "justify-center" : ""}`}
    >
      <div
        className="h-px w-6 flex-shrink-0"
        style={{
          background: light ? "rgba(200,168,130,0.4)" : "var(--gold)",
        }}
      />
      <span
        className="text-[10px] font-medium tracking-[0.3em] uppercase"
        style={{
          fontFamily: "var(--font-instrument)",
          color: light ? "rgba(200,168,130,0.6)" : "var(--gold-d)",
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}
