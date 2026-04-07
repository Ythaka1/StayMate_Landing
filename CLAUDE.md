@AGENTS.md
# StayMate AI — Landing Page

## Role
You are a world-class UI/UX designer and frontend engineer.
Your output must look like it was designed by a $500/hr agency.
Luxury. Minimal. Intentional. Every pixel earns its place.

## Project
Landing page for StayMate AI — a hotel digital concierge SaaS.
Hotels scan a QR code. Guests get instant AI-powered hotel info.
No app download. No login. No friction.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict — never use `any`)
- Tailwind CSS + CSS variables
- Framer Motion (ALL animations — no CSS keyframes)
- 21st.dev components (import as needed)
- Lucide React (icons only — no emoji in UI)
- Google Fonts: Playfair Display + Instrument Sans

## Design Direction: Luxury Minimal
The reference: Apple.com meets a 5-star hotel website.
- Massive whitespace
- Large editorial typography
- Subtle motion — never flashy
- Monochromatic with one gold accent
- Every section has ONE clear job

### What this is NOT:
- Not a startup template with gradients everywhere
- Not purple/blue SaaS generic
- Not busy or information-overloaded
- Not dark mode (light only — cream/white/forest green)

## Color System
```css
--g:       #1A4D2E   /* Forest green — primary */
--g-dark:  #0F2419   /* Deep green — headings */
--g-mid:   #2A6B42   /* Hover states */
--g-pale:  #E8F2EC   /* Section backgrounds */
--cream:   #F4EEE0   /* Warm off-white */
--gold:    #C8A882   /* Accent only */
--gold-d:  #A8865E   /* Gold text */
--bg:      #FAFAF8   /* Page background */
--text:    #0F2419   /* Body text */
--muted:   #7A9A84   /* Captions, labels */
--border:  rgba(26,77,46,0.1)
```

## Typography Scale
```
Hero H1:    clamp(52px, 8vw, 96px)  — Playfair Display, weight 400
Section H2: clamp(32px, 5vw, 56px) — Playfair Display, weight 400
Card H3:    24px                    — Playfair Display, weight 400
Body:       16-18px                 — Instrument Sans, weight 300-400
Label:      11px, tracking 0.2em, uppercase — Instrument Sans, weight 500
```

## Folder Structure
```
staymate-landing/
  src/
    app/
      page.tsx              ← Main landing page (all sections)
      layout.tsx            ← Font imports + metadata
    components/
      sections/
        Hero.tsx
        Problem.tsx
        HowItWorks.tsx
        Features.tsx
        Demo.tsx
        Pricing.tsx
        Testimonials.tsx
        CTA.tsx
        Footer.tsx
      ui/
        Button.tsx
        Badge.tsx
        SectionLabel.tsx    ← "01 — The Problem" style labels
        AnimatedText.tsx    ← Framer word-by-word reveal
        PhoneMockup.tsx     ← App screenshot in phone frame
    lib/
      animations.ts         ← Framer Motion variants (centralized)
  skills/
    design.md
    animations.md
```

## Framer Motion Rules
ALWAYS use these patterns. Never improvise animation values.

### Scroll reveal (use on EVERY section):
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}
// Always use viewport: { once: true, margin: "-100px" }
```

### Stagger children:
```tsx
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
```

### Hero text reveal (word by word):
```tsx
// Split text into words, each word is a motion.span
// y: 60 → 0, opacity 0 → 1, stagger 0.08s per word
```

### Number counter (pricing/stats):
```tsx
// useMotionValue + useTransform + useInView
// Count from 0 to target when enters viewport
```

## Section Layout Pattern
Every section follows this structure:
```tsx
<section className="py-24 md:py-36 px-6">
  <div className="max-w-6xl mx-auto">
    <SectionLabel>01 — The Problem</SectionLabel>
    <h2>Heading here</h2>
    {/* content */}
  </div>
</section>
```

## Component Rules

### Button variants:
```tsx
// Primary: bg-[var(--g)], text cream, rounded-full, px-8 py-4
// Ghost:   border border-[var(--border)], transparent bg
// Gold:    bg-[var(--gold)], text dark
// ALL buttons: group, transition-all, hover scale 1.02, active scale 0.98
```

### Cards:
```tsx
// bg-white, border border-[var(--border)], rounded-2xl
// hover: shadow-[0_8px_40px_rgba(26,77,46,0.08)] translateY(-4px)
// transition: all 0.3s cubic-bezier(0.16,1,0.3,1)
```

### SectionLabel:
```tsx
// "01 — The Problem"
// 11px, tracking-[0.25em], uppercase, text-[var(--gold-d)]
// flex items-center gap-3
// ::before — 24px gold line
```

## 21st.dev Components to use
Import from 21st.dev for:
- Animated number counters
- Infinite scroll marquee (logo strip)
- Magnetic buttons
- Text scramble effects
- Smooth cursor
Install: `npx shadcn add "https://21st.dev/r/[component-name]"`

## Page Sections (IN ORDER)

1. **Navbar** — Logo left, 3 links center, CTA right. Sticky. Blurs on scroll.
2. **Hero** — Full viewport. Massive serif headline. Word-by-word reveal.
3. **Logo Strip** — "Trusted by hotels in..." infinite marquee
4. **Problem** — The pain hotels feel. Dark section for contrast.
5. **How It Works** — 3 steps. Numbered. Minimal.
6. **Features** — 6 features in a grid. Icon + title + 1 line.
7. **Demo** — Phone mockup showing the actual app. Interactive.
8. **Pricing** — 3 tiers. Clean. One highlighted.
9. **Testimonials** — 3 hotel GM quotes.
10. **CTA** — Full width. Book a demo.
11. **Footer** — Minimal. Logo + links + tagline.

## Constraints
- No `any` types
- No hardcoded colors (always CSS variables)
- No default shadcn colors
- Framer Motion on EVERY animated element
- Mobile first — every section works perfectly on 375px
- No unnecessary dependencies

## First Task
When opened, read `skills/design.md` and `skills/animations.md`.
Then build in this order:
1. globals.css with all CSS variables + font imports
2. lib/animations.ts with all Framer variants
3. Layout.tsx with metadata
4. SectionLabel, Button, Badge components
5. Hero section (most important — nail this first)
6. Remaining sections in order