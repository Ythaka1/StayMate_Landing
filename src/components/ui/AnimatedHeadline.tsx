"use client"

import { motion } from "framer-motion"
import { CSSProperties } from "react"
import { heroWordStagger, heroWord } from "@/lib/animations"

interface AnimatedHeadlineProps {
  text: string
  className?: string
  style?: CSSProperties
  as?: "h1" | "h2"
}

export function AnimatedHeadline({
  text,
  className = "",
  style,
  as = "h1",
}: AnimatedHeadlineProps) {
  const words = text.split(" ")
  const Tag = motion[as]

  return (
    <Tag
      variants={heroWordStagger}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ perspective: 1200, ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={heroWord}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
