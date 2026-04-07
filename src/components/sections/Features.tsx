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
  BarChart3,
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
    desc: "Instant, accurate responses to any guest question, 24 hours a day.",
  },
  {
    icon: Globe,
    title: "40+ Languages",
    desc: "Your guests speak their language. StayMate handles the translation.",
  },
  {
    icon: QrCode,
    title: "QR Code Delivery",
    desc: "No app download. No login. Guests scan and get answers in seconds.",
  },
  {
    icon: Wifi,
    title: "WiFi & Amenities",
    desc: "Passwords, pool hours, gym access — all organised in one place.",
  },
  {
    icon: Clock,
    title: "Always Available",
    desc: "No more 3am front desk calls. StayMate is on duty around the clock.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "See what your guests ask most and continuously improve your service.",
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
          Everything your guest needs. Nothing they don&apos;t.
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
              href="mailto:hakimcastro41@gmail.com?subject=StayMate AI Waitlist"
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
              Join the Waitlist →
            </motion.a>
            <p
              className="mt-2 text-center"
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "10px",
                color: "var(--muted)",
              }}
            >
              We&apos;ll notify you first
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
