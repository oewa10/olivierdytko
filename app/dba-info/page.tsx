"use client"

import { useState, useEffect } from "react"
import { useI18n, I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

function DBAInfoContent() {
  const { t, language } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const dbaPoints = language === "nl" ? [
    "Oliver Dytko werkt volgens de Wet Deregulering Beoordeling Arbeidsrelaties (DBA).",
    "Alle ZZP'ers die via Oliver Dytko werken zijn zelfstandig ondernemers.",
    "Wij zorgen voor een correcte administratie en contracten die voldoen aan de DBA-regels.",
    "Opdrachtgevers hebben geen werkgeversrisico's bij het inhuren van ZZP'ers via onze bemiddeling.",
    "Wij werken met modelovereenkomsten die zijn goedgekeurd door de Belastingdienst.",
    "Oliver Dytko controleert of alle ZZP'ers beschikken over de juiste verzekeringen en certificaten.",
    "Wij garanderen dat er geen sprake is van een verkapt dienstverband."
  ] : [
    "Oliver Dytko operates according to the Dutch Assessment of Employment Relationships Deregulation Act (DBA).",
    "All self-employed contractors working through Oliver Dytko are independent entrepreneurs.",
    "We ensure proper administration and contracts that comply with DBA rules.",
    "Clients have no employer risks when hiring self-employed contractors through our mediation.",
    "We work with model agreements that have been approved by the Dutch Tax Authority.",
    "Oliver Dytko verifies that all contractors have the proper insurances and certificates.",
    "We guarantee that there is no disguised employment relationship."
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {language === "nl" ? "Terug naar home" : "Back to home"}
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                {language === "nl" ? "DBA Regels" : "DBA Rules"}
              </h1>
            </div>
            
            <p className="text-gray-700 mb-8">
              {language === "nl" 
                ? "De Wet Deregulering Beoordeling Arbeidsrelaties (DBA) is een Nederlandse wetgeving die de relatie tussen opdrachtgevers en zelfstandigen regelt. Oliver Dytko volgt deze regels strikt om ervoor te zorgen dat alle partijen correct werken binnen het wettelijk kader."
                : "The Assessment of Employment Relationships Deregulation Act (DBA) is Dutch legislation that regulates the relationship between clients and self-employed contractors. Oliver Dytko strictly follows these rules to ensure all parties work correctly within the legal framework."
              }
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {language === "nl" ? "Hoe wij de DBA regels toepassen" : "How we apply the DBA rules"}
            </h2>
            
            <ul className="space-y-4">
              {dbaPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === "nl" ? "Meer informatie" : "More information"}
              </h3>
              <p className="text-gray-700">
                {language === "nl"
                  ? "Voor meer informatie over de DBA-wetgeving kunt u de officiële website van de Belastingdienst bezoeken:"
                  : "For more information about the DBA legislation, you can visit the official website of the Dutch Tax Authority:"
                }
              </p>
              <a 
                href="https://ondernemersplein.overheid.nl/bedrijf-starten/starten-als-zzper/schijnzelfstandigheid-voorkomen-met-dba-voor-zzpers/?gad_source=1&gad_campaignid=237920696&gbraid=0AAAAADrmVRAUl5a8_DBllcO6xyipsErsx&gclid=Cj0KCQiAprLLBhCMARIsAEDhdPdaQB5jaZBk6eFrSqsCghEkqpKiq0cmXxm5jDxBsIbzyKyZNSOz0E4aAmVzEALw_wcB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 mt-2 transition-colors"
              >
                {language === "nl" ? "Ondernemersplein - DBA voor ZZP'ers" : "Dutch Government - DBA for Self-employed Contractors"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function DBAInfo() {
  return (
    <I18nProvider>
      <Header />
      <DBAInfoContent />
      <Footer />
    </I18nProvider>
  )
}
