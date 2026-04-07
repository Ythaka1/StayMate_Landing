"use client"

import { motion } from "framer-motion"
import { pricingCard, viewport } from "@/lib/animations"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface Plan {
  name: string
  price: string
  desc: string
  features: string[]
  featured: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$49",
    desc: "Perfect for boutique hotels and B&Bs.",
    features: [
      "1 property",
      "Up to 500 guests / mo",
      "AI concierge",
      "QR code kit",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$149",
    desc: "For growing hotels that demand more.",
    features: [
      "3 properties",
      "Unlimited guests",
      "AI concierge",
      "Custom branding",
      "Analytics dashboard",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    desc: "Full-service for hotel groups and chains.",
    features: [
      "Unlimited properties",
      "Unlimited guests",
      "White-label solution",
      "Custom AI training",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section
      className="py-32 px-6"
      id="pricing"
      style={{ background: "var(--g-pale)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <SectionLabel centered>04 — Pricing</SectionLabel>

        <motion.h2
          variants={pricingCard}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--g-dark)",
          }}
        >
          Simple, honest pricing.
        </motion.h2>

        <motion.p
          variants={pricingCard}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "16px",
            fontWeight: 300,
            color: "var(--muted)",
          }}
        >
          No setup fees. No contracts. Cancel anytime.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 items-start text-left">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={pricingCard}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="rounded-2xl p-8 relative"
              style={
                plan.featured
                  ? { background: "var(--g)", border: "2px solid var(--g)" }
                  : { background: "white", border: "1px solid var(--border)" }
              }
              whileHover={
                !plan.featured
                  ? { y: -4, boxShadow: "0 16px 48px rgba(26,77,46,0.1)" }
                  : { y: -4, boxShadow: "0 16px 48px rgba(15,36,25,0.3)" }
              }
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Most popular badge */}
              {plan.featured && (
                <div
                  className="absolute text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full"
                  style={{
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--gold)",
                    color: "var(--g-dark)",
                    fontFamily: "var(--font-instrument)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div
                className="text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "var(--font-instrument)",
                  color: plan.featured ? "var(--gold)" : "var(--muted)",
                }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-1 flex items-end gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "48px",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: plan.featured ? "var(--cream)" : "var(--g-dark)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="pb-1.5"
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontSize: "16px",
                    color: plan.featured
                      ? "rgba(244,238,224,0.5)"
                      : "var(--muted)",
                  }}
                >
                  /mo
                </span>
              </div>

              {/* Desc */}
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-instrument)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: plan.featured
                    ? "rgba(244,238,224,0.65)"
                    : "var(--muted)",
                }}
              >
                {plan.desc}
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check
                      size={14}
                      style={{
                        color: plan.featured ? "var(--gold)" : "var(--g)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-instrument)",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: plan.featured
                          ? "rgba(244,238,224,0.8)"
                          : "var(--text)",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.featured ? "cream" : "outline"} className="w-full">
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
