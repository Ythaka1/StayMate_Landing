import type { Metadata } from "next"
import { Playfair_Display, Instrument_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "StayMate AI — Hotel Digital Concierge",
  description:
    "Replace your hotel manual with a QR code. Guests get instant AI-powered answers — no app, no login, no friction.",
  openGraph: {
    title: "StayMate AI — Hotel Digital Concierge",
    description:
      "Replace your hotel manual with a QR code. Guests get instant AI-powered answers — no app, no login, no friction.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
