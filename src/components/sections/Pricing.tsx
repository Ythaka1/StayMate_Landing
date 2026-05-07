"use client"

import { useRef } from "react"
import { motion, useInView, type TargetAndTransition } from "framer-motion"
import { scaleIn, fadeUp, viewport, ease } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Check } from "lucide-react"

const included = [
  "Full setup done for you in 24 hours",
  "AI trained on your hotel's specific information",
  "Custom QR code + printable assets included",
  "Unlimited guest conversations for 30 days",
  "Revenue & engagement report at day 30",
  "Direct WhatsApp support from the founder",
  "No credit card. No contract. Cancel anytime.",
]

// Stagger variants for the checklist
const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ease.smooth },
  },
}

export function Pricing() {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: "-80px" })

  return (
    <section
      className="py-32 px-6"
      id="pricing"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel centered>05 — Pricing</SectionLabel>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-5"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--g-dark)",
          }}
        >
          Start free. Pay only when you love it.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-lg mx-auto mb-16"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "17px",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          We set everything up for you. No contracts.
          <br />
          No credit card. Just scan and go.
        </motion.p>

        {/* ── Hero offer card ── */}
        <motion.div
          ref={cardRef}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "var(--g)",
            border: "1px solid rgba(200,168,130,0.2)",
          }}
        >
          {/* Pulsing glow ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(200,168,130,0)",
                "0 0 0 8px rgba(200,168,130,0.12)",
                "0 0 0 0 rgba(200,168,130,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Gold orb decoration */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,168,130,0.1), transparent 70%)",
            }}
          />
          {/* Bottom green orb */}
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(42,107,66,0.4), transparent 70%)",
            }}
          />

          {/* Sweep shimmer on card */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "50%",
                background:
                  "linear-gradient(105deg, transparent, rgba(255,255,255,0.04) 50%, transparent)",
                skewX: -12,
              }}
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
            />
          </div>

          <div className="relative">
            {/* ① Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <span
                className="inline-block rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase"
                style={{
                  background: "rgba(200,168,130,0.15)",
                  border: "1px solid rgba(200,168,130,0.25)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-instrument)",
                }}
              >
                ✦ Limited pilot offer — only 10 spots
              </span>
            </motion.div>

            {/* ② Main heading with animated "30" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(44px, 7vw, 64px)",
                  fontWeight: 400,
                  color: "var(--cream)",
                  lineHeight: 1,
                }}
              >
                30 Days Free
              </h2>
            </motion.div>

            {/* ③ Sub-heading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "20px",
                fontStyle: "italic",
                color: "var(--gold-l)",
              }}
            >
              Fully set up by us. Zero effort from you.
            </motion.p>

            {/* ④ Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto mb-10"
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(244,238,224,0.7)",
                lineHeight: 1.7,
              }}
            >
              We build your hotel&apos;s digital concierge, configure the AI
              with your hotel info, and hand you a QR code ready to place at
              reception. You just watch your guests use it.
            </motion.p>

            {/* ⑤ Staggered checklist */}
            <motion.ul
              variants={listContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-left inline-block mb-10 space-y-3"
            >
              {included.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex items-center justify-center shrink-0 rounded-full"
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "rgba(200,168,130,0.2)",
                    }}
                  >
                    <Check size={12} style={{ color: "var(--gold)" }} />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-instrument)",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "rgba(244,238,224,0.8)",
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* ⑥ CTA button with shimmer */}
            <div className="flex justify-center mb-3">
              <motion.a
                href="https://wa.me/254704925908"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-full px-10 py-5 text-[15px] font-medium inline-flex items-center gap-2"
                style={{
                  background: "var(--cream)",
                  color: "var(--g-dark)",
                  fontFamily: "var(--font-instrument)",
                  textDecoration: "none",
                  maxWidth: "320px",
                  width: "100%",
                  justifyContent: "center",
                }}
                whileHover={{ scale: 1.02, background: "white" } as TargetAndTransition}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Button shimmer */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(26,77,46,0.06) 50%, transparent 60%)",
                    skewX: -12,
                  }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                />
                <span className="relative">Get 30 days free →</span>
              </motion.a>
            </div>

            {/* ⑦ Below-button note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "11px",
                color: "rgba(244,238,224,0.4)",
              }}
            >
              WhatsApp Hakim directly · Usually replies within 1 hour
            </motion.p>
          </div>
        </motion.div>

        {/* Pricing teaser below card */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mt-10"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "13px",
            fontWeight: 300,
            color: "var(--muted)",
          }}
        >
          After your free trial, plans start from $49/month. Only pay if you see results.
        </motion.p>
      </div>
    </section>
  )
}
