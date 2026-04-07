"use client"

import { motion } from "framer-motion"
import { chipFloat } from "@/lib/animations"
import { Wifi, Clock } from "lucide-react"

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Glow behind phone */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-40px",
          background: "radial-gradient(ellipse, rgba(26,77,46,0.15), transparent 70%)",
        }}
      />

      {/* Phone frame */}
      <div
        className="relative rounded-[44px] p-3"
        style={{
          background: "#1a1a1a",
          boxShadow: "0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute z-10"
          style={{
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "96px",
            height: "24px",
            background: "#0a0a0a",
            borderRadius: "9999px",
          }}
        />

        {/* Screen */}
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "36px",
            aspectRatio: "9/19",
            background: "var(--bg)",
          }}
        >
          {/* App UI mockup */}
          <div className="w-full h-full flex flex-col" style={{ background: "var(--bg)" }}>
            {/* Status bar spacer */}
            <div className="h-10 flex-shrink-0" />

            {/* App header */}
            <div className="px-5 pb-4 flex-shrink-0">
              <div
                className="text-[11px] font-medium mb-1"
                style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)", letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                The Grand Hotel
              </div>
              <div
                className="text-[20px] leading-tight"
                style={{ color: "var(--g-dark)", fontFamily: "var(--font-playfair)" }}
              >
                Good evening, welcome.
              </div>
            </div>

            {/* Quick access tiles */}
            <div className="px-4 grid grid-cols-2 gap-2 flex-shrink-0">
              {[
                { label: "WiFi", value: "Azure_5G", icon: "wifi" },
                { label: "Pool", value: "Open until 10pm", icon: "pool" },
                { label: "Checkout", value: "11:00 AM", icon: "clock" },
                { label: "Dining", value: "Closes at 10pm", icon: "fork" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3"
                  style={{ background: "white", border: "1px solid var(--border)" }}
                >
                  <div
                    className="text-[9px] font-medium mb-0.5"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[11px] font-medium leading-tight"
                    style={{ color: "var(--g-dark)", fontFamily: "var(--font-instrument)" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat bubble */}
            <div className="px-4 mt-3 flex-shrink-0">
              <div
                className="rounded-2xl rounded-tl-sm px-4 py-3"
                style={{ background: "var(--g-pale)" }}
              >
                <div
                  className="text-[11px] leading-relaxed"
                  style={{ color: "var(--g-dark)", fontFamily: "var(--font-instrument)" }}
                >
                  The spa is open 9am–8pm. Shall I book you a massage for tomorrow morning?
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="px-4 mt-auto mb-4 flex-shrink-0">
              <div
                className="rounded-full px-4 py-2.5 flex items-center gap-2"
                style={{ background: "white", border: "1px solid var(--border)" }}
              >
                <div
                  className="flex-1 text-[11px]"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-instrument)" }}
                >
                  Ask anything...
                </div>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--g)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip — left */}
      <motion.div
        {...chipFloat(0)}
        className="absolute flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          left: "-48px",
          top: "33%",
          background: "white",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 24px rgba(26,77,46,0.1)",
          zIndex: 10,
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: "#22c55e" }}
        />
        <span
          className="text-[11px] font-medium whitespace-nowrap"
          style={{ color: "var(--text)", fontFamily: "var(--font-instrument)" }}
        >
          Pool is Open
        </span>
      </motion.div>

      {/* Floating chip — right */}
      <motion.div
        {...chipFloat(0.5)}
        className="absolute rounded-xl px-3 py-2"
        style={{
          right: "-40px",
          top: "52%",
          background: "var(--g)",
          border: "1px solid rgba(200,168,130,0.2)",
          boxShadow: "0 8px 24px rgba(15,36,25,0.25)",
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5">
          <Wifi size={10} style={{ color: "var(--gold)" }} />
          <span
            className="text-[11px] font-medium whitespace-nowrap"
            style={{ color: "var(--cream)", fontFamily: "var(--font-instrument)" }}
          >
            WiFi: Azure_5G
          </span>
        </div>
      </motion.div>

      {/* Floating chip — bottom right */}
      <motion.div
        {...chipFloat(1)}
        className="absolute flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          right: "-32px",
          bottom: "22%",
          background: "white",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 24px rgba(26,77,46,0.1)",
          zIndex: 10,
        }}
      >
        <Clock size={10} style={{ color: "var(--gold-d)" }} />
        <span
          className="text-[11px] font-medium whitespace-nowrap"
          style={{ color: "var(--text)", fontFamily: "var(--font-instrument)" }}
        >
          Check-out: 11am
        </span>
      </motion.div>
    </div>
  )
}
