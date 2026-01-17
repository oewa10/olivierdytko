import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oliver Dytko - Uitzendgroep voor de Bouw | ZZP'ers Bemiddeling",
  description:
    "Oliver Dytko bemiddelt vakbekwame ZZP'ers in de bouw. Grondwerkers, timmerlieden, loodgieters, elektriciens en meer. Betrouwbaar en snel.",
  keywords: "uitzendgroep, zzp bouw, grondwerkers, timmerlieden, kozijnmonteurs, steigerwerkers, bouw bemiddeling",
  openGraph: {
    title: "Oliver Dytko - Uitzendgroep voor de Bouw",
    description: "Professionele bemiddeling van vakbekwame ZZP'ers in de bouwsector.",
    type: "website",
    locale: "nl_NL",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
