"use client"

import { motion, type TargetAndTransition } from "framer-motion"
import { fadeUp, stagger, phoneReveal } from "@/lib/animations"
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline"
import { Badge } from "@/components/ui/Badge"
import { PhoneMockup } from "@/components/ui/PhoneMockup"

export function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative overflow-hidden"
      id="hero"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(26,77,46,0.06), transparent)",
          backgroundColor: "var(--bg)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(var(--g) 1px, transparent 1px), linear-gradient(90deg, var(--g) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Eyebrow badge */}
        <motion.div variants={fadeUp} className="mb-10">
          <Badge variant="gold" pulse>
            Hotel Digital Concierge
          </Badge>
        </motion.div>

        {/* Hero headline — word by word */}
        <AnimatedHeadline
          text="Your guests deserve answers, not waiting."
          className="mb-8 max-w-4xl mx-auto"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(42px, 7vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--g-dark)",
          }}
        />

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl mx-auto mb-12 leading-relaxed"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--muted)",
            fontWeight: 300,
            fontFamily: "var(--font-instrument)",
          }}
        >
          Replace the hotel manual with a QR code. Guests get everything
          instantly — no app, no login, no friction.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center mb-20"
        >
          <motion.a
            href="https://wa.me/254704925908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-[15px] font-medium"
            style={{
              background: "var(--g)",
              color: "var(--cream)",
              fontFamily: "var(--font-instrument)",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.02, background: "var(--g-mid)" } as TargetAndTransition}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Get 30 days free →
          </motion.a>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          variants={phoneReveal}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1200 }}
        >
          <PhoneMockup />
        </motion.div>
      </motion.div>

    </section>
  )
}
