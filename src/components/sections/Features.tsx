"use client"

import { motion, type TargetAndTransition } from "framer-motion"
import { fadeUp, stagger, viewport } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"
import {
  MessageSquare,
  Globe,
  QrCode,
  Wifi,
  Clock,
  Zap,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  desc: string
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: "AI-Powered Answers",
    desc: "Instant, accurate answers in any language. Every interaction is a chance to upsell your spa, dining, or late checkout.",
  },
  {
    icon: Globe,
    title: "40+ Languages",
    desc: "Your international guests get answers in their native language. No translation app. No misunderstanding.",
  },
  {
    icon: QrCode,
    title: "QR Code Delivery",
    desc: "One QR code at reception. No app, no login. Guests are inside your concierge in three seconds.",
  },
  {
    icon: Wifi,
    title: "Smart Quick Access",
    desc: "WiFi, pool hours, gym, spa — one tap away. Guests stop calling the front desk for the basics.",
  },
  {
    icon: Clock,
    title: "Always Available",
    desc: "3am arrivals, late checkouts, midnight room service questions — handled. Your staff sleep. StayMate doesn't.",
  },
  {
    icon: Zap,
    title: "Set Up in 24 Hours",
    desc: "We build, configure, and deliver your hotel's concierge in a day. You don't lift a finger.",
  },
]

export function Features() {
  return (
    <section className="py-32 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>03 — Features</SectionLabel>

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
          Built to drive revenue, not just answer questions.
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group p-7 rounded-2xl cursor-default"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 40px rgba(26,77,46,0.08)",
                borderColor: "rgba(26,77,46,0.15)",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Icon */}
              <motion.div
                className="mb-5 flex items-center justify-center rounded-xl"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "var(--g-pale)",
                }}
                whileHover={{ background: "var(--g)", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <f.icon
                  size={18}
                  style={{ color: "var(--g)" }}
                  className="group-hover:text-white transition-colors duration-300"
                />
              </motion.div>

              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "var(--g-dark)",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Coming Soon block ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 w-full rounded-2xl py-8 px-8 md:px-10 flex items-center justify-between gap-8 flex-wrap"
          style={{
            background: "var(--g-pale)",
            border: "1px solid var(--border)",
          }}
        >
          <div>
            <p
              className="mb-2"
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold-d)",
              }}
            >
              ✦ Coming Soon
            </p>
            <h3
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--g-dark)",
              }}
            >
              More powerful features on the way.
            </h3>
            <p
              className="mt-2 max-w-sm"
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              Multi-language menus · Room service ordering · Guest feedback ·
              WhatsApp integration · Analytics dashboard · Custom hotel branding
            </p>
          </div>

          <div className="flex flex-col items-center">
            <motion.a
              href="https://wa.me/254704925908"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 text-[13px] font-medium inline-block"
              style={{
                background: "var(--g)",
                color: "var(--cream)",
                fontFamily: "var(--font-instrument)",
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.02, background: "var(--g-mid)" } as TargetAndTransition}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get 30 days free →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
