"use client"

import { motion } from "framer-motion"
import { fadeUp, viewport } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"

const steps = [
  {
    title: "Add your hotel info",
    desc: "Fill in WiFi, hours, rules, and local tips. Takes 10 minutes. No technical knowledge required.",
  },
  {
    title: "Print your QR code",
    desc: "We generate a beautiful QR card for your reception desk, room door, or welcome packet.",
  },
  {
    title: "Guests scan and go",
    desc: "Instant access to everything. AI answers questions 24/7 in any language.",
  },
]

export function HowItWorks() {
  return (
    <section
      className="py-32 px-6"
      id="how-it-works"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionLabel>02 — How It Works</SectionLabel>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-lg mb-20"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--g-dark)",
            lineHeight: 1.15,
          }}
        >
          Up and running in under ten minutes.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute h-px pointer-events-none"
            style={{
              top: "40px",
              left: "16.67%",
              right: "16.67%",
              background: "linear-gradient(to right, transparent, var(--gold), transparent)",
              opacity: 0.3,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: i * 0.15 }}
            >
              {/* Step number block */}
              <motion.div
                className="mb-7 flex items-center justify-center rounded-2xl"
                style={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid var(--border)",
                  background: "white",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--gold-d)",
                }}
                whileHover={{
                  borderColor: "var(--gold)",
                  boxShadow: "0 8px 32px rgba(200,168,130,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                0{i + 1}
              </motion.div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "var(--g-dark)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
