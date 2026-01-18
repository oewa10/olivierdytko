"use client"

import { useState, useEffect } from "react"
import { useI18n, I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

function PrivacyStatementContent() {
  const { language } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              <Shield className="h-8 w-8 text-emerald-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                {language === "nl" ? "Privacy Statement" : "Privacy Statement"}
              </h1>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Inleiding" : "Introduction"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Oliver Dytko respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Dit privacy statement is van toepassing op alle persoonsgegevens die via de website www.oliverdytko.nl worden verzameld."
                    : "Oliver Dytko respects the privacy of all users of its website and ensures that the personal information you provide to us is treated confidentially. This privacy statement applies to all personal data collected through the website www.oliverdytko.nl."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Welke gegevens verzamelen wij?" : "What data do we collect?"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {language === "nl" 
                    ? "Wij verzamelen gegevens die u actief aan ons verstrekt door het contactformulier in te vullen. Deze gegevens kunnen omvatten:"
                    : "We collect data that you actively provide to us by filling out the contact form. This data may include:"
                  }
                </p>
                <ul className="space-y-2">
                  {(language === "nl" ? [
                    "Naam",
                    "E-mailadres",
                    "Telefoonnummer",
                    "Bedrijfsnaam",
                    "Bericht/vraag"
                  ] : [
                    "Name",
                    "Email address",
                    "Phone number",
                    "Company name",
                    "Message/inquiry"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Waarvoor gebruiken wij uw gegevens?" : "How do we use your data?"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {language === "nl" 
                    ? "De gegevens die u ons verstrekt gebruiken wij voor de volgende doeleinden:"
                    : "We use the data you provide us for the following purposes:"
                  }
                </p>
                <ul className="space-y-2">
                  {(language === "nl" ? [
                    "Om contact met u op te nemen naar aanleiding van uw vraag of verzoek",
                    "Om u te informeren over onze diensten",
                    "Voor het verbeteren van onze dienstverlening"
                  ] : [
                    "To contact you regarding your question or request",
                    "To inform you about our services",
                    "To improve our services"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Hoe lang bewaren wij uw gegevens?" : "How long do we store your data?"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor de gegevens zijn verzameld. Concreet betekent dit dat wij uw gegevens bewaren zolang u contact met ons hebt of zolang wij diensten voor u uitvoeren, en daarna alleen in onze administratie voor de wettelijk verplichte termijnen."
                    : "We do not store your personal data longer than necessary for the purposes for which the data was collected. This specifically means that we keep your data as long as you have contact with us or as long as we perform services for you, and afterwards only in our administration for the legally required periods."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Delen met derden" : "Sharing with third parties"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Oliver Dytko verstrekt uw persoonsgegevens niet aan derden, tenzij dit nodig is voor de uitvoering van een overeenkomst met u of om te voldoen aan een wettelijke verplichting."
                    : "Oliver Dytko does not provide your personal data to third parties, unless this is necessary for the execution of an agreement with you or to comply with a legal obligation."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Uw rechten" : "Your rights"}
                </h2>
                <p className="text-gray-700 mb-4">
                  {language === "nl" 
                    ? "U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Oliver Dytko."
                    : "You have the right to view, correct or delete your personal data. In addition, you have the right to withdraw your consent to the data processing or to object to the processing of your personal data by Oliver Dytko."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "Contact" : "Contact"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Voor vragen over ons privacy statement of een verzoek met betrekking tot uw persoonsgegevens kunt u contact met ons opnemen via het contactformulier op onze website."
                    : "For questions about our privacy statement or a request regarding your personal data, you can contact us through the contact form on our website."
                  }
                </p>
              </section>
              
              <div className="pt-4 text-sm text-gray-500">
                <p>
                  {language === "nl" 
                    ? "Laatste update: 18 januari 2026"
                    : "Last updated: January 18, 2026"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function PrivacyStatement() {
  return (
    <I18nProvider>
      <Header />
      <PrivacyStatementContent />
      <Footer />
    </I18nProvider>
  )
}
