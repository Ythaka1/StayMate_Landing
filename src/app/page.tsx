import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Features } from "@/components/sections/Features"
import { Demo } from "@/components/sections/Demo"
import { Pricing } from "@/components/sections/Pricing"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Demo />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
