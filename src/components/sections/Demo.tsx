"use client"

import { useState } from "react"
import { motion, type TargetAndTransition } from "framer-motion"
import { fadeUp, scaleIn, viewport, chipFloat } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Lock, Globe, Copy, Check, ExternalLink } from "lucide-react"

export function Demo() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText("http://localhost:3001/the-azure")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      className="py-28 px-6"
      id="demo"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <SectionLabel centered>04 — Live Demo</SectionLabel>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-5"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              color: "var(--g-dark)",
              lineHeight: 1.1,
            }}
          >
            See it working. Right now.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "17px",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            This is the exact experience your guests will have after scanning
            the QR code at your reception desk.
          </motion.p>
        </div>

        {/* ── Browser chrome + iframe ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            boxShadow: "0 24px 80px rgba(26,77,46,0.1)",
          }}
        >
          {/* Chrome bar */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{
              background: "var(--g-pale)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-red-300 flex-shrink-0" />
            <div className="w-3 h-3 rounded-full bg-yellow-300 flex-shrink-0" />
            <div className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />

            {/* URL pill */}
            <div
              className="flex-1 mx-4 flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: "white",
                border: "1px solid var(--border)",
              }}
            >
              <Lock size={12} style={{ color: "var(--muted)", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontSize: "11px",
                  color: "var(--muted)",
                }}
              >
                staymate.ai/the-azure
              </span>
            </div>
          </div>

          {/* Supademo iframe */}
          <iframe
            src="https://app.supademo.com/demo/cmnojvz9t01qazi0jayr6ba7l"
            width="100%"
            className="h-[480px] md:h-[600px]"
            frameBorder={0}
            allowFullScreen
            style={{ display: "block" }}
            title="StayMate AI Live Demo"
          />
        </motion.div>

        {/* ── CTA block below embed ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "11px",
              color: "var(--gold-d)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            ✦ No login required · No app download · Works on any device
          </p>

          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "28px",
              fontWeight: 400,
              color: "var(--g-dark)",
            }}
          >
            Your guests experience this in seconds.
          </h3>

          <div className="flex gap-4 flex-wrap justify-center">
            <motion.a
              href="https://wa.me/254704925908"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 text-[13px] font-medium inline-flex items-center gap-2"
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
              Book a Free Setup
            </motion.a>

            <motion.a
              href="https://calendly.com/hakimcastro41/staymate-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 text-[13px] font-medium inline-flex items-center gap-2"
              style={{
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text)",
                fontFamily: "var(--font-instrument)",
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.02, borderColor: "var(--g)", color: "var(--g)" } as TargetAndTransition}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>

        {/* ── Try It Yourself block ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16"
        >
          {/* Label */}
          <p
            className="text-center mb-6"
            style={{
              fontFamily: "var(--font-instrument)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold-d)",
            }}
          >
            ✦ Try It Yourself
          </p>

          {/* Dark card */}
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: "var(--g-dark)",
              border: "1px solid rgba(200,168,130,0.15)",
              boxShadow: "0 40px 80px rgba(15,36,25,0.3)",
            }}
          >
            {/* Decorative gold orb top-right */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(200,168,130,0.08), transparent 70%)",
              }}
            />
            {/* Decorative green orb bottom-left */}
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,107,66,0.15), transparent 70%)",
              }}
            />
            {/* Liquid glass sweep */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "60%",
                  background:
                    "linear-gradient(105deg, transparent, rgba(255,255,255,0.03) 50%, transparent)",
                  skewX: -12,
                }}
                animate={{ x: ["-100%", "350%"] }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              />
            </div>

            {/* Split layout */}
            <div className="flex flex-col md:flex-row relative">

              {/* ── Left content ── */}
              <div className="flex-1 p-8 md:p-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span
                    style={{
                      fontFamily: "var(--font-instrument)",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    Live Preview
                  </span>
                </div>

                {/* Heading */}
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "var(--cream)",
                    lineHeight: 1.15,
                  }}
                >
                  Open the app.
                  <br />
                  Feel it yourself.
                </h3>

                {/* Body */}
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(244,238,224,0.6)",
                    lineHeight: 1.7,
                    maxWidth: "280px",
                  }}
                >
                  This is the live demo environment. Tap the tiles, ask the AI
                  a question, explore the way your guests will — the moment they
                  scan your QR code.
                </p>

                {/* URL display box */}
                <div
                  className="rounded-2xl p-4 mb-6 flex items-center gap-3"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Globe
                    size={16}
                    style={{ color: "var(--gold)", flexShrink: 0 }}
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      style={{
                        fontFamily: "var(--font-instrument)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(244,238,224,0.4)",
                        marginBottom: "2px",
                      }}
                    >
                      Demo URL
                    </div>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: "13px",
                        color: "var(--gold-l)",
                      }}
                    >
                      https://stay-mate-ai.vercel.app/the-azure
                    </div>
                  </div>
                  <motion.button
                    onClick={handleCopy}
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(244,238,224,0.5)",
                      border: "none",
                      cursor: "pointer",
                    }}
                    whileHover={{ background: "rgba(255,255,255,0.12)" } as TargetAndTransition}
                    transition={{ duration: 0.15 }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </motion.button>
                </div>

                {/* Open button */}
                <motion.a
                  href="https://stay-mate-ai.vercel.app/the-azure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-[13px] font-medium"
                  style={{
                    background: "var(--cream)",
                    color: "var(--g-dark)",
                    fontFamily: "var(--font-instrument)",
                    textDecoration: "none",
                    display: "flex",
                  }}
                  whileHover={{ background: "white", scale: 1.01 } as TargetAndTransition}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={14} />
                  Open Live Demo
                </motion.a>

                {/* Trust micro-badges */}
                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  {["No login", "No app download", "Works on any device"].map(
                    (t) => (
                      <span
                        key={t}
                        className="flex items-center gap-1.5"
                        style={{
                          fontFamily: "var(--font-instrument)",
                          fontSize: "10px",
                          color: "rgba(244,238,224,0.3)",
                        }}
                      >
                        ✓ {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* ── Right — phone visual ── */}
              <div className="hidden md:flex w-72 flex-shrink-0 items-end justify-center pt-8">
                <div className="relative">
                  {/* Floating badge */}
                  <motion.div
                    {...chipFloat(0)}
                    className="absolute -left-8 top-1/3 rounded-xl px-3 py-2 flex items-center gap-2"
                    style={{
                      background: "white",
                      border: "1px solid var(--border)",
                      boxShadow: "0 8px 24px rgba(26,77,46,0.15)",
                      zIndex: 10,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span
                      className="whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-instrument)",
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      Pool is Open
                    </span>
                  </motion.div>

                  {/* Phone frame */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="w-52 rounded-[36px] overflow-hidden"
                    style={{
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 -20px 60px rgba(0,0,0,0.4)",
                      transform: "rotate(-2deg)",
                    }}
                  >
                    {/* Notch */}
                    <div className="mx-auto mt-2 mb-1 w-20 h-5 bg-[#0a0a0a] rounded-full" />

                    {/* Screen */}
                    <div
                      className="overflow-hidden"
                      style={{
                        background: "#FAFAF8",
                        borderRadius: "28px",
                        margin: "0 6px 6px",
                      }}
                    >
                      {/* App content — scaled */}
                      <div
                        style={{
                          transformOrigin: "top left",
                          transform: "scale(0.72)",
                          width: "289px",
                        }}
                      >
                        {/* Green header */}
                        <div
                          style={{
                            background: "var(--g)",
                            padding: "12px 16px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-playfair)",
                              fontSize: "12px",
                              color: "var(--cream)",
                            }}
                          >
                            Welcome to The Azure
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-instrument)",
                              fontSize: "8px",
                              color: "rgba(244,238,224,0.5)",
                              fontStyle: "italic",
                              marginTop: "2px",
                            }}
                          >
                            Where luxury meets every quiet moment
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "8px",
                              fontSize: "8px",
                              color: "var(--cream)",
                              fontFamily: "var(--font-instrument)",
                            }}
                          >
                            <span>☀ 24°</span>
                            <span>7 April</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div
                          style={{
                            padding: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            background: "#FAFAF8",
                          }}
                        >
                          {/* AI bar */}
                          <div
                            style={{
                              background: "var(--g-dark)",
                              borderRadius: "8px",
                              padding: "10px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <span style={{ color: "var(--gold)", fontSize: "10px" }}>
                              ✦
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-instrument)",
                                fontSize: "10px",
                                color: "var(--cream)",
                              }}
                            >
                              Ask me anything...
                            </span>
                          </div>

                          {/* Quick tiles */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(5, 1fr)",
                              gap: "4px",
                            }}
                          >
                            {[
                              { e: "🏊", l: "Pool" },
                              { e: "🍳", l: "Breakfast" },
                              { e: "🍽", l: "Dinner" },
                              { e: "💆", l: "Spa" },
                              { e: "📶", l: "WiFi" },
                            ].map((t) => (
                              <div
                                key={t.l}
                                style={{
                                  background: "white",
                                  borderRadius: "6px",
                                  padding: "6px 2px",
                                  textAlign: "center",
                                  border: "1px solid var(--border)",
                                }}
                              >
                                <div style={{ fontSize: "10px" }}>{t.e}</div>
                                <div
                                  style={{
                                    fontFamily: "var(--font-instrument)",
                                    fontSize: "7px",
                                    color: "var(--muted)",
                                    marginTop: "2px",
                                  }}
                                >
                                  {t.l}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Info rows */}
                          {[
                            { e: "📍", l: "Explore Nearby" },
                            { e: "📊", l: "Hotel Activities" },
                          ].map((item) => (
                            <div
                              key={item.l}
                              style={{
                                background: "white",
                                border: "1px solid var(--border)",
                                borderRadius: "8px",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              <span style={{ fontSize: "10px" }}>{item.e}</span>
                              <span
                                style={{
                                  fontFamily: "var(--font-instrument)",
                                  fontSize: "10px",
                                  color: "var(--g-dark)",
                                }}
                              >
                                {item.l}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
