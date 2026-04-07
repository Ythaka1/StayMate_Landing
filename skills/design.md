-# Landing Page — Luxury Minimal Design System

## The Single Most Important Rule
Every section must have generous whitespace.
When in doubt: add more padding. Double it. Then add more.
Whitespace IS the luxury. Cramped = cheap. Spacious = premium.

---

## Navbar
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5
  transition-all duration-500"
  // On scroll: backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]
>
  <div className="max-w-6xl mx-auto flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2.5">
      {/* SVG building logo */}
      <span className="font-['Playfair_Display'] text-[15px] font-medium
        text-[var(--g-dark)]">
        Stay<span className="text-[var(--gold)]">Mate</span> AI
      </span>
    </div>

    {/* Links — hidden on mobile */}
    <div className="hidden md:flex items-center gap-10">
      {["How it works", "Features", "Pricing"].map(link => (
        <a className="text-[13px] text-[var(--muted)] hover:text-[var(--text)]
          transition-colors tracking-wide">{link}</a>
      ))}
    </div>

    {/* CTA */}
    <Button variant="primary" size="sm">Book a Demo</Button>
  </div>
</nav>
```

---

## Hero Section — The Most Important Section

### Layout
```tsx
<section className="min-h-screen flex flex-col items-center justify-center
  text-center px-6 pt-24 pb-16 relative overflow-hidden">

  {/* Subtle background texture */}
  <div className="absolute inset-0 bg-[var(--bg)]
    bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(26,77,46,0.06),transparent)]
    pointer-events-none" />

  {/* Eyebrow label */}
  <motion.div variants={fadeUp} className="mb-8">
    <span className="inline-flex items-center gap-2 text-[11px] font-medium
      tracking-[0.25em] uppercase text-[var(--gold-d)]
      border border-[rgba(200,168,130,0.3)] rounded-full px-4 py-2
      bg-[rgba(200,168,130,0.06)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
      Hotel Digital Concierge
    </span>
  </motion.div>

  {/* Main headline — word by word reveal */}
  <AnimatedHeadline
    text="Your guests deserve answers, not waiting."
    className="font-['Playfair_Display'] text-[clamp(42px,7vw,88px)]
      font-normal leading-[1.05] tracking-tight text-[var(--g-dark)]
      max-w-4xl mx-auto mb-8"
  />

  {/* Subheadline */}
  <motion.p variants={fadeUp}
    className="text-[clamp(16px,2vw,20px)] text-[var(--muted)]
      font-light max-w-xl mx-auto mb-12 leading-relaxed">
    Replace the hotel manual with a QR code.
    Guests get everything instantly — no app, no login, no friction.
  </motion.p>

  {/* CTA buttons */}
  <motion.div variants={fadeUp}
    className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
    <Button variant="primary" size="lg">
      Book a Free Demo
    </Button>
    <Button variant="ghost" size="lg">
      See it live →
    </Button>
  </motion.div>

  {/* Hero image — phone mockup */}
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>
    <PhoneMockup />
  </motion.div>
</section>
```

### AnimatedHeadline component (word-by-word):
```tsx
function AnimatedHeadline({ text, className }) {
  const words = text.split(" ")
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  }
  const wordVariant = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }
  return (
    <motion.h1 variants={container} initial="hidden" animate="visible"
      className={className} style={{ perspective: 1000 }}>
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant}
          style={{ display: "inline-block", marginRight: "0.3em" }}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
```

---

## Problem Section — Dark Contrast Section

```tsx
<section className="bg-[var(--g-dark)] py-32 px-6 relative overflow-hidden">
  {/* Subtle green orb */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
    bg-[radial-gradient(ellipse,rgba(42,107,66,0.3),transparent)]
    pointer-events-none" />

  <div className="max-w-5xl mx-auto relative">
    <SectionLabel light>01 — The Problem</SectionLabel>

    <h2 className="font-['Playfair_Display'] text-[clamp(32px,5vw,56px)]
      font-normal text-[var(--cream)] leading-tight max-w-3xl mb-16">
      Your front desk spends 4 hours a day
      answering the same <em className="text-[var(--gold-l)]">12 questions.</em>
    </h2>

    {/* Pain points grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pains.map((pain, i) => (
        <motion.div key={i}
          variants={fadeUp} viewport={{ once: true }}
          className="border border-[rgba(244,238,224,0.08)] rounded-2xl p-6
            bg-[rgba(255,255,255,0.03)] backdrop-blur-sm">
          <div className="text-[var(--gold)] text-3xl font-['Playfair_Display']
            font-light mb-3">
            {pain.stat}
          </div>
          <p className="text-[var(--cream)] text-[15px] font-light leading-relaxed
            opacity-80">
            {pain.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

// Pain data:
const pains = [
  { stat: "68%", text: "of guests say they couldn't find basic hotel info during their stay." },
  { stat: "4hrs", text: "Average time staff spend daily answering repetitive guest questions." },
  { stat: "3.2×", text: "More likely to leave a bad review when a simple question goes unanswered." },
]
```

---

## How It Works — 3 Steps

```tsx
<section className="py-32 px-6 bg-[var(--cream)]">
  <div className="max-w-5xl mx-auto">
    <SectionLabel>02 — How It Works</SectionLabel>
    <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,52px)]
      max-w-lg mb-20 font-normal text-[var(--g-dark)]">
      Up and running in under ten minutes.
    </h2>

    <div className="grid md:grid-cols-3 gap-12 relative">
      {/* Connecting line (desktop) */}
      <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%]
        h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent
        opacity-30" />

      {steps.map((step, i) => (
        <motion.div key={i} variants={fadeUp}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: i * 0.15 }}>

          {/* Step number */}
          <div className="w-20 h-20 rounded-2xl border border-[var(--border)]
            bg-white flex items-center justify-center mb-6
            font-['Playfair_Display'] text-[28px] font-light text-[var(--gold-d)]">
            0{i+1}
          </div>

          <h3 className="font-['Playfair_Display'] text-[22px] font-normal
            text-[var(--g-dark)] mb-3">{step.title}</h3>
          <p className="text-[15px] text-[var(--muted)] font-light leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

const steps = [
  { title: "Add your hotel info", desc: "Fill in WiFi, hours, rules, and local tips. Takes 10 minutes. No technical knowledge required." },
  { title: "Print your QR code", desc: "We generate a beautiful QR card for your reception desk, room door, or welcome packet." },
  { title: "Guests scan and go", desc: "Instant access to everything. AI answers questions 24/7 in any language." },
]
```

---

## Features Grid — 6 Features

```tsx
<section className="py-32 px-6">
  <div className="max-w-6xl mx-auto">
    <SectionLabel>03 — Features</SectionLabel>
    <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,52px)]
      max-w-lg mb-20 font-normal text-[var(--g-dark)]">
      Everything your guest needs. Nothing they don't.
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f, i) => (
        <motion.div key={i}
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={{ delay: i * 0.08 }}
          className="group p-7 bg-white border border-[var(--border)]
            rounded-2xl hover:shadow-[0_8px_40px_rgba(26,77,46,0.08)]
            hover:-translate-y-1 transition-all duration-500 cursor-default">

          <div className="w-10 h-10 rounded-xl bg-[var(--g-pale)]
            flex items-center justify-center mb-5">
            <f.icon size={18} className="text-[var(--g)]" />
          </div>
          <h3 className="text-[16px] font-medium text-[var(--g-dark)] mb-2">
            {f.title}
          </h3>
          <p className="text-[14px] text-[var(--muted)] leading-relaxed font-light">
            {f.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## Pricing Section

```tsx
<section className="py-32 px-6 bg-[var(--g-pale)]">
  <div className="max-w-5xl mx-auto text-center">
    <SectionLabel centered>05 — Pricing</SectionLabel>
    <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,52px)]
      font-normal text-[var(--g-dark)] mb-4">
      Simple, honest pricing.
    </h2>
    <p className="text-[var(--muted)] mb-16 font-light">
      No setup fees. No contracts. Cancel anytime.
    </p>

    <div className="grid md:grid-cols-3 gap-6 items-start">
      {plans.map((plan, i) => (
        <motion.div key={i} variants={fadeUp}
          className={`rounded-2xl p-8 text-left
            ${plan.featured
              ? 'bg-[var(--g)] border-2 border-[var(--g)] relative'
              : 'bg-white border border-[var(--border)]'
            }`}>

          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2
              bg-[var(--gold)] text-[var(--g-dark)] text-[10px] font-semibold
              tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
              Most Popular
            </div>
          )}

          <div className={`text-[11px] font-medium tracking-[0.2em] uppercase mb-4
            ${plan.featured ? 'text-[var(--gold)]' : 'text-[var(--muted)]'}`}>
            {plan.name}
          </div>

          <div className={`font-['Playfair_Display'] text-[42px] font-normal mb-1
            ${plan.featured ? 'text-[var(--cream)]' : 'text-[var(--g-dark)]'}`}>
            {plan.price}
            <span className={`text-[16px] font-['Instrument_Sans']
              ${plan.featured ? 'text-[rgba(244,238,224,0.5)]' : 'text-[var(--muted)]'}`}>
              /mo
            </span>
          </div>

          <p className={`text-[13px] mb-8 font-light
            ${plan.featured ? 'text-[rgba(244,238,224,0.65)]' : 'text-[var(--muted)]'}`}>
            {plan.desc}
          </p>

          <ul className="space-y-3 mb-8">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3">
                <Check size={14} className={plan.featured
                  ? 'text-[var(--gold)]' : 'text-[var(--g)]'} />
                <span className={`text-[13px] font-light
                  ${plan.featured ? 'text-[rgba(244,238,224,0.8)]' : 'text-[var(--text)]'}`}>
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <Button
            variant={plan.featured ? 'cream' : 'outline'}
            className="w-full">
            Get started
          </Button>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

## Phone Mockup Component

```tsx
// src/components/ui/PhoneMockup.tsx
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Glow behind phone */}
      <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse,rgba(26,77,46,0.15),transparent_70%)]
        pointer-events-none" />

      {/* Phone frame */}
      <div className="relative bg-[#1a1a1a] rounded-[44px] p-3
        shadow-[0_40px_80px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2
          w-24 h-6 bg-[#0a0a0a] rounded-full z-10" />

        {/* Screen */}
        <div className="rounded-[36px] overflow-hidden w-full aspect-[9/19]
          bg-[#FAFAF8]">
          {/* Screenshot of your app goes here */}
          <img
            src="/app-screenshot.png"
            alt="StayMate AI App"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Floating info chips */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-1/3
          bg-white rounded-xl shadow-lg px-3 py-2
          flex items-center gap-2 border border-[var(--border)]">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[11px] font-medium text-[var(--text)]">
          Pool is Open
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-6 top-1/2
          bg-[var(--g)] rounded-xl shadow-lg px-3 py-2
          border border-[rgba(200,168,130,0.2)]">
        <span className="text-[11px] font-medium text-[var(--cream)]">
          WiFi: Azure_5G ✓
        </span>
      </motion.div>
    </div>
  )
}
```

---

## SectionLabel Component

```tsx
export function SectionLabel({
  children, light, centered
}: { children: string; light?: boolean; centered?: boolean }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible"
      viewport={{ once: true }}
      className={`flex items-center gap-3 mb-6
        ${centered ? 'justify-center' : ''}`}>
      <div className={`h-px w-6
        ${light ? 'bg-[rgba(200,168,130,0.4)]' : 'bg-[var(--gold)]'}`} />
      <span className={`text-[10px] font-medium tracking-[0.3em] uppercase
        ${light ? 'text-[rgba(200,168,130,0.6)]' : 'text-[var(--gold-d)]'}`}>
        {children}
      </span>
    </motion.div>
  )
}
```