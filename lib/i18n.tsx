"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "nl" | "en"

interface Translations {
  [key: string]: {
    nl: string
    en: string
  }
}

const translations: Translations = {
  // Navigation
  "nav.about": { nl: "Over Ons", en: "About Us" },
  "nav.services": { nl: "Diensten", en: "Services" },
  "nav.specializations": { nl: "Vakgebieden", en: "Specializations" },
  "nav.contact": { nl: "Contact", en: "Contact" },

  // Hero
  "hero.tagline": {
    nl: "Professionele bouwvakkers voor uw project",
    en: "Professional construction workers for your project",
  },
  "hero.cta": { nl: "Neem Contact Op", en: "Contact Us" },

  // About
  "about.title": { nl: "Over Oliver Dytko", en: "About Oliver Dytko" },
  "about.description": {
    nl: "Oliver Dytko is een gespecialiseerde uitzendgroep die vakbekwame ZZP'ers verbindt met projecten in de bouwsector. Met jarenlange ervaring en een uitgebreid netwerk van gekwalificeerde professionals, zorgen wij voor de perfecte match tussen opdrachtgevers en vakmannen. Onze focus ligt op betrouwbaarheid, kwaliteit en persoonlijke service. Wij begrijpen de unieke eisen van de bouwsector en leveren professionals die direct inzetbaar zijn en bijdragen aan het succes van uw project.",
    en: "Oliver Dytko is a specialized staffing agency connecting skilled freelancers with projects in the construction sector. With years of experience and an extensive network of qualified professionals, we ensure the perfect match between clients and craftsmen. Our focus is on reliability, quality, and personal service. We understand the unique requirements of the construction industry and provide professionals who are immediately deployable and contribute to the success of your project.",
  },

  // Services
  "services.heading": { nl: "ONZE DIENSTEN", en: "OUR SERVICES" },
  "services.subtitle": {
    nl: "Wij verbinden vakbekwame ZZP'ers met projecten in de bouwsector",
    en: "We connect skilled freelancers with projects in the construction sector",
  },
  
  "services.item1.title": { nl: "PERSONEELSBEMIDDELING", en: "STAFFING SOLUTIONS" },
  "services.item1.description": {
    nl: "Snelle plaatsing van gekwalificeerde bouwvakkers",
    en: "Fast placement of qualified construction workers",
  },
  "services.item1.category": { nl: "BEMIDDELING", en: "PLACEMENT" },
  "services.item1.details": {
    nl: "Wij zorgen voor snelle en efficiënte plaatsing van gekwalificeerde ZZP'ers op uw bouwprojecten. Ons uitgebreide netwerk van professionals staat klaar om direct aan de slag te gaan. Van timmerlieden tot elektriciens, wij hebben de juiste mensen voor elke klus.",
    en: "We ensure fast and efficient placement of qualified freelancers on your construction projects. Our extensive network of professionals is ready to start immediately. From carpenters to electricians, we have the right people for every job.",
  },

  "services.item2.title": { nl: "KWALITEITSGARANTIE", en: "QUALITY ASSURANCE" },
  "services.item2.description": {
    nl: "Gecertificeerde en ervaren vakmensen",
    en: "Certified and experienced professionals",
  },
  "services.item2.category": { nl: "KWALITEIT", en: "QUALITY" },
  "services.item2.details": {
    nl: "Al onze ZZP'ers worden zorgvuldig gescreend op vakbekwaamheid, certificeringen en werkervaring. Wij garanderen dat u alleen werkt met professionals die voldoen aan de hoogste kwaliteitsnormen in de bouwsector.",
    en: "All our freelancers are carefully screened for expertise, certifications, and work experience. We guarantee that you only work with professionals who meet the highest quality standards in the construction industry.",
  },

  "services.item3.title": { nl: "FLEXIBELE INZET", en: "FLEXIBLE DEPLOYMENT" },
  "services.item3.description": {
    nl: "Schaalbare oplossingen voor elk project",
    en: "Scalable solutions for every project",
  },
  "services.item3.category": { nl: "FLEXIBILITEIT", en: "FLEXIBILITY" },
  "services.item3.details": {
    nl: "Of u nu één vakman nodig heeft of een heel team, wij bieden flexibele oplossingen die meegroeien met uw projectbehoeften. Korte of lange termijn, wij passen ons aan uw planning en budget aan.",
    en: "Whether you need one craftsman or an entire team, we offer flexible solutions that scale with your project needs. Short or long term, we adapt to your schedule and budget.",
  },

  "services.item4.title": { nl: "PERSOONLIJKE BEGELEIDING", en: "PERSONAL GUIDANCE" },
  "services.item4.description": {
    nl: "Dedicated accountmanager voor uw project",
    en: "Dedicated account manager for your project",
  },
  "services.item4.category": { nl: "SERVICE", en: "SERVICE" },
  "services.item4.details": {
    nl: "U krijgt een persoonlijke accountmanager die uw project van begin tot eind begeleidt. Wij zorgen voor continue communicatie, snelle probleemoplossing en regelmatige evaluaties om de beste resultaten te garanderen.",
    en: "You get a personal account manager who guides your project from start to finish. We ensure continuous communication, quick problem-solving, and regular evaluations to guarantee the best results.",
  },

  "services.item5.title": { nl: "ADMINISTRATIEVE ONTZORGING", en: "ADMINISTRATIVE SUPPORT" },
  "services.item5.description": {
    nl: "Wij regelen alle papierwerk en contracten",
    en: "We handle all paperwork and contracts",
  },
  "services.item5.category": { nl: "ADMINISTRATIE", en: "ADMIN" },
  "services.item5.details": {
    nl: "Geen gedoe met contracten, verzekeringen of administratie. Wij nemen alle administratieve taken uit handen zodat u zich kunt focussen op wat echt belangrijk is: uw bouwproject succesvol afronden.",
    en: "No hassle with contracts, insurance, or administration. We take care of all administrative tasks so you can focus on what really matters: successfully completing your construction project.",
  },

  // Specializations
  "spec.title": { nl: "Onze Vakgebieden", en: "Our Specializations" },
  "spec.groundworkers": { nl: "Grondwerkers", en: "Groundworkers" },
  "spec.carpenters": { nl: "Timmerlieden", en: "Carpenters" },
  "spec.helpers": { nl: "Bouw Hulpen", en: "Construction Helpers" },
  "spec.plumbers": { nl: "Loodgieters", en: "Plumbers" },
  "spec.window": { nl: "Kozijnmonteurs", en: "Window Fitters" },
  "spec.scaffolders": { nl: "Steigerwerkers", en: "Scaffolders" },
  "spec.electricians": { nl: "Elektriciens", en: "Electricians" },

  // Why Choose Us
  "why.title": { nl: "Waarom Oliver Dytko", en: "Why Choose Us" },
  "why.experience.title": { nl: "Ervaring", en: "Experience" },
  "why.experience.desc": {
    nl: "Jarenlange ervaring in de bouwsector",
    en: "Years of experience in construction industry",
  },
  "why.network.title": { nl: "Netwerk", en: "Network" },
  "why.network.desc": {
    nl: "Uitgebreid netwerk van gekwalificeerde ZZP'ers",
    en: "Extensive network of qualified freelancers",
  },
  "why.reliable.title": { nl: "Betrouwbaar", en: "Reliable" },
  "why.reliable.desc": {
    nl: "Vertrouwd door opdrachtgevers en vakmannen",
    en: "Trusted by clients and professionals",
  },

  // Contact
  "contact.title": { nl: "Neem Contact Op", en: "Get In Touch" },
  "contact.name": { nl: "Naam", en: "Name" },
  "contact.email": { nl: "Email", en: "Email" },
  "contact.phone": { nl: "Telefoon", en: "Phone" },
  "contact.company": { nl: "Bedrijf", en: "Company" },
  "contact.message": { nl: "Bericht", en: "Message" },
  "contact.submit": { nl: "Versturen", en: "Send" },
  "contact.success": {
    nl: "Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.",
    en: "Thank you for your message! We will contact you as soon as possible.",
  },

  // Footer
  "footer.rights": {
    nl: "Alle rechten voorbehouden",
    en: "All rights reserved",
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language]
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
