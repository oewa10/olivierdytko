"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SpecializationsSection } from "@/components/specializations-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecializationsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  )
}
