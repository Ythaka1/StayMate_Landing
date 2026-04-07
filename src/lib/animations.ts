import { Variants, Transition } from "framer-motion"

// ── EASING CURVES ──
export const ease = {
  smooth: [0.16, 1, 0.3, 1],        // Main ease — snappy settle
  gentle: [0.25, 0.46, 0.45, 0.94], // Soft — for large elements
  bounce: [0.34, 1.56, 0.64, 1],    // Spring feel
  linear: [0, 0, 1, 1],
} as const

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
export const chipFloat = (delay: number): { animate: { y: number[]; transition: Transition } } => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3 + delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  },
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

// ── VIEWPORT DEFAULTS ──
// Always use: viewport={{ once: true, margin: "-100px" }}
export const viewport = { once: true, margin: "-100px" }
export const viewportEarly = { once: true, margin: "-50px" }
