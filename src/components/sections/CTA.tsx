"use client"

import { motion, type TargetAndTransition } from "framer-motion"
import { fadeUp, stagger, viewport } from "@/lib/animations"


export function CTA() {
  return (
    <section
      className="py-36 px-6 relative overflow-hidden"
      style={{ background: "var(--g)" }}
    >
      {/* Top orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(42,107,66,0.6), transparent 70%)",
        }}
      />

      {/* Bottom orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(200,168,130,0.08), transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="text-[10px] font-medium tracking-[0.3em] uppercase"
              style={{
                fontFamily: "var(--font-instrument)",
                color: "rgba(200,168,130,0.6)",
              }}
            >
              Get Started Today
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              color: "var(--cream)",
              lineHeight: 1.1,
            }}
          >
            Your guests are waiting for a better experience.
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl mx-auto mb-12"
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "17px",
              fontWeight: 300,
              color: "rgba(244,238,224,0.6)",
              lineHeight: 1.7,
            }}
          >
            Join hotels already using StayMate AI. Set up in minutes, delight
            guests from day one.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary — WhatsApp */}
            <motion.a
              href="https://wa.me/254704925908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-medium"
              style={{
                background: "var(--cream)",
                color: "var(--g-dark)",
                fontFamily: "var(--font-instrument)",
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.02, background: "white" } as TargetAndTransition}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get 30 days free →
            </motion.a>

            {/* Secondary — Calendly */}
            <motion.a
              href="https://calendly.com/hakimcastro41/staymate-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[15px] font-medium"
              style={{
                fontFamily: "var(--font-instrument)",
                color: "rgba(244,238,224,0.7)",
                border: "1px solid rgba(244,238,224,0.15)",
                textDecoration: "none",
              }}
              whileHover={{
                color: "rgba(244,238,224,1)",
                borderColor: "rgba(244,238,224,0.35)",
                scale: 1.02,
              } as TargetAndTransition}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Prefer a call? Schedule 10 minutes →
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.p
            variants={fadeUp}
            className="mt-10"
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "12px",
              color: "rgba(244,238,224,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
