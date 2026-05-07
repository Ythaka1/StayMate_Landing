"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger, viewport } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"

const pains = [
  {
    stat: "+18%",
    text: "Average uplift in ancillary revenue when hotels offer in-stay digital upsells.",
  },
  {
    stat: "73%",
    text: "Of guests prefer self-service for simple requests over calling the front desk.",
  },
  {
    stat: "+0.4★",
    text: "Typical review score lift when guests get instant, accurate answers 24/7.",
  },
]

export function Problem() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6"
      id="problem"
      style={{ background: "var(--g-dark)" }}
    >
      {/* Green orb */}
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(42,107,66,0.3), transparent)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(15,36,25,0.4))",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionLabel light>01 — The Problem</SectionLabel>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl mb-6"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            color: "var(--cream)",
            lineHeight: 1.15,
          }}
        >
          Every unanswered question is lost revenue.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 max-w-xl"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "17px",
            fontWeight: 300,
            color: "rgba(244,238,224,0.55)",
            lineHeight: 1.7,
          }}
        >
          Guests who can&apos;t find spa hours don&apos;t book the spa. Guests
          who don&apos;t know about your restaurant eat elsewhere. Your front
          desk can&apos;t be everywhere — StayMate can.
        </motion.p>

        {/* Pain cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl p-7"
              style={{
                border: "1px solid rgba(244,238,224,0.08)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
              }}
              whileHover={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(200,168,130,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "var(--gold)",
                }}
              >
                {pain.stat}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "rgba(244,238,224,0.72)",
                  lineHeight: 1.7,
                }}
              >
                {pain.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 text-center"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(244,238,224,0.35)",
            letterSpacing: "0.03em",
          }}
        >
          Industry benchmarks. Your results will vary — that&apos;s why the first 30 days are free.
        </motion.p>
      </div>
    </section>
  )
}
