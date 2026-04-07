"use client"

import { motion } from "framer-motion"
import { fadeUp, viewport } from "@/lib/animations"

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Live Demo", href: "#demo" },
  ],
  Contact: [
    { label: "WhatsApp Us", href: "https://wa.me/254704925908" },
    { label: "Book a Call", href: "https://calendly.com/hakimcastro41/staymate-ai" },
    { label: "Email Us", href: "mailto:hakimcastro41@gmail.com" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookie policy", href: "#" },
  ],
}

function LogoMark() {
  return (
    <svg width="26" height="22" viewBox="0 0 36 30" fill="none">
      {/* Left building */}
      <rect x="1" y="13" width="9" height="17" rx="1" fill="var(--gold)" opacity="0.75" />
      {/* Right building */}
      <rect x="26" y="13" width="9" height="17" rx="1" fill="var(--gold)" opacity="0.75" />
      {/* Center tall building */}
      <rect x="11" y="3" width="14" height="27" rx="1" fill="var(--gold)" />
      {/* Star in center building */}
      <path
        d="M18 6.5 L18.9 8.8 L21.3 8.9 L19.4 10.5 L20.1 12.8 L18 11.5 L15.9 12.8 L16.6 10.5 L14.7 8.9 L17.1 8.8 Z"
        fill="var(--g-dark)"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="px-6 pt-20 pb-10"
      style={{
        background: "var(--g-dark)",
        borderTop: "1px solid rgba(244,238,224,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="md:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <LogoMark />
              <span
                className="text-[15px] font-medium"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--cream)",
                }}
              >
                Stay<span style={{ color: "var(--gold)" }}>Mate</span> AI
              </span>
            </div>

            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-instrument)",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(244,238,224,0.45)",
                maxWidth: "200px",
              }}
            >
              The digital concierge for hotels that care about every guest
              moment.
            </p>

            {/* Tagline */}
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{
                fontFamily: "var(--font-instrument)",
                color: "rgba(200,168,130,0.45)",
              }}
            >
              Luxury without friction.
            </span>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links], gi) => (
            <motion.div
              key={group}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: gi * 0.08 }}
            >
              <div
                className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5"
                style={{
                  fontFamily: "var(--font-instrument)",
                  color: "rgba(244,238,224,0.3)",
                }}
              >
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "var(--font-instrument)",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "rgba(244,238,224,0.5)",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                      whileHover={{ color: "rgba(244,238,224,0.85)" } as Record<string, string>}
                      transition={{ duration: 0.15 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(244,238,224,0.06)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(244,238,224,0.3)",
            }}
          >
            © {new Date().getFullYear()} StayMate AI. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(244,238,224,0.25)",
              letterSpacing: "0.05em",
            }}
          >
            Crafted with intention.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
