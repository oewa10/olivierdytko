import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oliver Dytko - Arbeidsbemiddeling voor de Bouw | ZZP'ers Bemiddeling",
  description:
    "Oliver Dytko bemiddelt vakbekwame ZZP'ers in de bouw. Grondwerkers, timmerlieden, loodgieters, elektriciens en meer. Betrouwbaar en snel.",
  keywords: "arbeidsbemiddeling, zzp bouw, grondwerkers, timmerlieden, kozijnmonteurs, steigerwerkers, bouw bemiddeling, Zaandam",
  authors: [{ name: "Oliver Dytko" }],
  creator: "Oliver Dytko",
  publisher: "Oliver Dytko",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Oliver Dytko - Arbeidsbemiddeling voor de Bouw",
    description: "Professionele bemiddeling van vakbekwame ZZP'ers in de bouwsector.",
    type: "website",
    locale: "nl_NL",
    url: "https://oliverdytko-arbeidsbemiddeling.nl",
    images: [
      {
        url: "https://oliverdytko-arbeidsbemiddeling.nl/about-us.jpeg",
        width: 1200,
        height: 630,
        alt: "Oliver Dytko - Arbeidsbemiddeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Dytko - Arbeidsbemiddeling voor de Bouw",
    description: "Professionele bemiddeling van vakbekwame ZZP'ers in de bouwsector.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
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
