# Landing Page — Framer Motion Animation System

## Core Rule
ALL animations live in `src/lib/animations.ts`.
Import from there. Never write ad-hoc animation values.
Consistency is what makes motion feel premium.

---

## lib/animations.ts — Paste This Entire File

```typescript
import { Variants } from "framer-motion"

// ── EASING CURVES ──
export const ease = {
  smooth: [0.16, 1, 0.3, 1],        // Main ease — snappy settle
  gentle: [0.25, 0.46, 0.45, 0.94], // Soft — for large elements
  bounce: [0.34, 1.56, 0.64, 1],    // Spring feel
  linear: [0, 0, 1, 1],
}

// ── BASE VARIANTS ──

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: ease.smooth }
  }
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: ease.smooth }
  }
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: ease.smooth }
  }
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: ease.smooth }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.7, ease: ease.smooth }
  }
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: ease.bounce }
  }
}

// ── STAGGER CONTAINERS ──

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
  }
}

// ── HERO WORD REVEAL ──
export const heroWord: Variants = {
  hidden: {
    opacity: 0, y: 50, rotateX: -20,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: ease.smooth }
  }
}

export const heroWordStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }
  }
}

// ── NAVBAR ──
export const navItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: ease.smooth }
  }
}

export const navStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

// ── PHONE MOCKUP ──
export const phoneReveal: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.92, rotateX: 8 },
  visible: {
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { duration: 1.4, ease: ease.gentle, delay: 0.6 }
  }
}

// ── FLOATING CHIPS (phone mockup decoration) ──
export const chipFloat = (delay: number) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }
  }
})

// ── CARD HOVER ──
export const cardHover = {
  rest: { y: 0, boxShadow: "0 2px 8px rgba(26,77,46,0.04)" },
  hover: {
    y: -6,
    boxShadow: "0 16px 48px rgba(26,77,46,0.1)",
    transition: { duration: 0.35, ease: ease.smooth }
  }
}

// ── NUMBER COUNTER ──
// Usage with useMotionValue + useTransform:
// const count = useMotionValue(0)
// const rounded = useTransform(count, (v) => Math.round(v))
// useEffect(() => { if (inView) animate(count, target, { duration: 2, ease: ease.gentle }) }, [inView])

// ── SECTION DIVIDER ──
export const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1, opacity: 1,
    transition: { duration: 1, ease: ease.gentle }
  }
}

// ── PRICING CARD ──
export const pricingCard: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: ease.smooth, delay: i * 0.12 }
  })
}

// ── TESTIMONIAL ──
export const testimonialReveal: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: ease.smooth, delay: i * 0.15 }
  })
}

// ── MARQUEE ──
// No variants needed — use CSS or framer-motion x animation
// animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}

// ── VIEWPORT DEFAULTS ──
// Always use: viewport={{ once: true, margin: "-100px" }}
// This triggers when 100px into viewport — feels responsive
export const viewport = { once: true, margin: "-100px" }
export const viewportEarly = { once: true, margin: "-50px" }
```

---

## How to Use in Components

### Single element:
```tsx
import { fadeUp, viewport } from "@/lib/animations"

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewport}>
  Content
</motion.div>
```

### Staggered list:
```tsx
import { stagger, fadeUp, viewport } from "@/lib/animations"

<motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hero headline (word by word):
```tsx
import { heroWordStagger, heroWord } from "@/lib/animations"

const words = headline.split(" ")

<motion.h1
  variants={heroWordStagger}
  initial="hidden"
  animate="visible"
  style={{ perspective: 1200 }}>
  {words.map((word, i) => (
    <motion.span
      key={i}
      variants={heroWord}
      style={{ display: "inline-block", marginRight: "0.28em" }}>
      {word}
    </motion.span>
  ))}
</motion.h1>
```

### Phone mockup:
```tsx
import { phoneReveal, chipFloat } from "@/lib/animations"

<motion.div variants={phoneReveal} initial="hidden" animate="visible">
  <PhoneMockup />
</motion.div>

// Floating chips
<motion.div {...chipFloat(0)}>chip 1</motion.div>
<motion.div {...chipFloat(0.5)}>chip 2</motion.div>
```

### Pricing cards with custom delay:
```tsx
import { pricingCard, viewport } from "@/lib/animations"

{plans.map((plan, i) => (
  <motion.div
    key={i}
    custom={i}
    variants={pricingCard}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}>
    {/* card content */}
  </motion.div>
))}
```

### Number counter (Stats section):
```tsx
"use client"
import { useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] })
    }
  }, [isInView])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}
```

### Infinite marquee (Logo strip):
```tsx
function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[var(--muted)] text-[13px] tracking-widest
            uppercase font-medium opacity-40 flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
```

### Magnetic button (from 21st.dev):
```tsx
// Install: npx shadcn add "https://21st.dev/r/magnetic-button"
// Wraps around your button — subtle cursor-following effect
<MagneticButton>
  <Button variant="primary">Book a Demo</Button>
</MagneticButton>
```

---

## Scroll-based Parallax (Hero image)
```tsx
import { useScroll, useTransform, motion } from "framer-motion"

function ParallaxPhone() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <motion.div style={{ y, opacity }}>
      <PhoneMockup />
    </motion.div>
  )
}
```

---

## Navbar scroll behavior
```tsx
"use client"
import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { useState } from "react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40))

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-500
        ${scrolled
          ? "backdrop-blur-xl bg-[var(--bg)]/85 border-b border-[var(--border)] py-4"
          : "bg-transparent"
        }`}>
      {/* content */}
    </motion.nav>
  )
}
```