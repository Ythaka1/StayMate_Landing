"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { navStagger, navItem } from "@/lib/animations"
import { Menu, X } from "lucide-react"

const links = ["How it works", "Features", "Pricing"]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40))

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500"
        style={{
          paddingTop: scrolled ? "16px" : "20px",
          paddingBottom: scrolled ? "16px" : "20px",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled ? "rgba(250,250,248,0.85)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(26,77,46,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={navItem}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2.5"
          >
            {/* SVG Icon */}
            <svg width="24" height="20" viewBox="0 0 36 30" fill="none">
              {/* Left building */}
              <rect x="1" y="13" width="9" height="17" rx="1" stroke="var(--g)" strokeWidth="1.4" fill="none"/>
              {/* Right building */}
              <rect x="26" y="13" width="9" height="17" rx="1" stroke="var(--g)" strokeWidth="1.4" fill="none"/>
              {/* Center tall building */}
              <rect x="11" y="3" width="14" height="27" rx="1" stroke="var(--g)" strokeWidth="1.4" fill="none"/>
              {/* Star */}
              <path
                d="M18 6.5 L18.9 8.8 L21.3 8.9 L19.4 10.5 L20.1 12.8 L18 11.5 L15.9 12.8 L16.6 10.5 L14.7 8.9 L17.1 8.8 Z"
                fill="var(--gold)"
              />
            </svg>
            <span
              className="text-[15px] font-medium tracking-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--g-dark)" }}
            >
              Stay<span style={{ color: "var(--gold)" }}>Mate</span> AI
            </span>
          </motion.div>

          {/* Desktop nav links */}
          <motion.div
            variants={navStagger}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-10"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                variants={navItem}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[13px] tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)" }}
                whileHover={{ color: "var(--text)" } as Record<string, string>}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA + mobile menu button */}
          <motion.div
            variants={navItem}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <a
              href="https://wa.me/254704925908"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-[13px] font-medium"
              style={{
                background: "var(--g)",
                color: "var(--cream)",
                fontFamily: "var(--font-instrument)",
                textDecoration: "none",
              }}
            >
              Get 30 days free →
            </a>
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-[72px] left-0 right-0 z-40 px-6 pb-6 pt-4"
          style={{
            background: "rgba(250,250,248,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] py-1"
                style={{ color: "var(--text)", fontFamily: "var(--font-instrument)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="https://wa.me/254704925908"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center rounded-full px-7 py-3.5 text-[14px] font-medium"
              style={{
                background: "var(--g)",
                color: "var(--cream)",
                fontFamily: "var(--font-instrument)",
                textDecoration: "none",
              }}
            >
              Get 30 days free →
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
