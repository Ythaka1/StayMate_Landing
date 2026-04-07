"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger, phoneReveal, viewport } from "@/lib/animations"
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/ui/PhoneMockup"

const hotelNames = [
  "The Grand Meridian",
  "Azure Sands Resort",
  "Villa Lumière",
  "The Harbour House",
  "Maison Céleste",
  "The Clifton Estate",
]

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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Button variant="primary" size="lg">
            Book a Free Demo
          </Button>
          <Button variant="ghost" size="lg">
            See it live →
          </Button>
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

      {/* Trusted by marquee strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div
          className="text-[10px] font-medium tracking-[0.25em] uppercase text-center mb-2"
          style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)" }}
        >
          Trusted by hotels in
        </div>
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...hotelNames, ...hotelNames].map((name, i) => (
            <span
              key={i}
              className="text-[12px] font-medium tracking-widest uppercase flex-shrink-0"
              style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)", opacity: 0.45 }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
