"use client"

import { useState, useEffect } from "react"
import { useI18n, I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

function TermsContent() {
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
              <FileText className="h-8 w-8 text-emerald-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                {language === "nl" ? "Algemene Voorwaarden" : "Terms and Conditions"}
              </h1>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "1. Definities" : "1. Definitions"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "In deze algemene voorwaarden wordt verstaan onder: Oliver Dytko: de eenmanszaak Oliver Dytko, gevestigd te Zaandam, ingeschreven bij de Kamer van Koophandel onder nummer 85228427. Opdrachtgever: de natuurlijke of rechtspersoon die aan Oliver Dytko opdracht heeft gegeven tot het verrichten van werkzaamheden. ZZP'er: de zelfstandige zonder personeel die via bemiddeling van Oliver Dytko werkzaamheden verricht voor een opdrachtgever."
                    : "In these terms and conditions, the following definitions apply: Oliver Dytko: the sole proprietorship Oliver Dytko, established in Zaandam, registered with the Chamber of Commerce under number 85228427. Client: the natural person or legal entity that has commissioned Oliver Dytko to perform work. Self-employed contractor: the self-employed person without personnel who performs work for a client through the mediation of Oliver Dytko."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "2. Toepasselijkheid" : "2. Applicability"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Oliver Dytko en opdrachtgever, tenzij schriftelijk anders is overeengekomen. De toepasselijkheid van eventuele inkoop- of andere voorwaarden van opdrachtgever wordt uitdrukkelijk van de hand gewezen."
                    : "These terms and conditions apply to all agreements between Oliver Dytko and the client, unless agreed otherwise in writing. The applicability of any purchase or other conditions of the client is expressly rejected."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "3. Offertes en totstandkoming overeenkomst" : "3. Quotes and formation of agreement"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Alle offertes van Oliver Dytko zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Een overeenkomst komt tot stand nadat Oliver Dytko een opdracht schriftelijk heeft bevestigd, dan wel nadat Oliver Dytko met de uitvoering van de opdracht is begonnen."
                    : "All quotes from Oliver Dytko are without obligation, unless explicitly stated otherwise. An agreement is formed after Oliver Dytko has confirmed an assignment in writing, or after Oliver Dytko has started the execution of the assignment."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "4. Uitvoering van de overeenkomst" : "4. Execution of the agreement"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Oliver Dytko zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Oliver Dytko heeft een bemiddelende rol en is niet verantwoordelijk voor de uitvoering van de werkzaamheden door de ZZP'er. De ZZP'er voert de werkzaamheden zelfstandig uit en is zelf verantwoordelijk voor het resultaat."
                    : "Oliver Dytko will execute the agreement to the best of its knowledge and ability and in accordance with the requirements of good craftsmanship. Oliver Dytko has a mediating role and is not responsible for the execution of the work by the self-employed contractor. The self-employed contractor performs the work independently and is responsible for the result."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "5. Verplichtingen opdrachtgever" : "5. Client obligations"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "De opdrachtgever draagt er zorg voor dat alle gegevens en materialen, waarvan Oliver Dytko aangeeft dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig aan Oliver Dytko worden verstrekt. De opdrachtgever dient ervoor te zorgen dat de werkplek voldoet aan de geldende Arbo-eisen en veiligheidsvoorschriften."
                    : "The client ensures that all data and materials, which Oliver Dytko indicates are necessary for the execution of the agreement, are provided to Oliver Dytko in a timely manner. The client must ensure that the workplace complies with the applicable occupational health and safety requirements and safety regulations."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "6. Tarieven en betaling" : "6. Rates and payment"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "De door Oliver Dytko gehanteerde tarieven zijn exclusief BTW en andere heffingen van overheidswege, tenzij anders aangegeven. Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door Oliver Dytko aan te geven wijze. Bij niet tijdige betaling is opdrachtgever van rechtswege in verzuim en is een rente verschuldigd van 1% per maand."
                    : "The rates used by Oliver Dytko are exclusive of VAT and other government levies, unless indicated otherwise. Payment must be made within 14 days after the invoice date, in a manner to be indicated by Oliver Dytko. In case of late payment, the client is legally in default and owes interest of 1% per month."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "7. Aansprakelijkheid" : "7. Liability"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Oliver Dytko is uitsluitend aansprakelijk voor directe schade die is ontstaan door bewuste roekeloosheid of opzet van Oliver Dytko. Oliver Dytko is nimmer aansprakelijk voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie. De aansprakelijkheid van Oliver Dytko is in alle gevallen beperkt tot het bedrag dat door de aansprakelijkheidsverzekering van Oliver Dytko wordt uitgekeerd."
                    : "Oliver Dytko is only liable for direct damage caused by deliberate recklessness or intent on the part of Oliver Dytko. Oliver Dytko is never liable for indirect damage, including consequential damage, lost profit, missed savings, and damage due to business stagnation. The liability of Oliver Dytko is in all cases limited to the amount paid out by Oliver Dytko's liability insurance."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "8. Overmacht" : "8. Force majeure"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Oliver Dytko is niet gehouden tot het nakomen van enige verplichting jegens de opdrachtgever indien hij daartoe gehinderd wordt als gevolg van een omstandigheid die niet is te wijten aan schuld, en noch krachtens de wet, een rechtshandeling of in het verkeer geldende opvattingen voor zijn rekening komt."
                    : "Oliver Dytko is not obliged to fulfill any obligation towards the client if it is prevented from doing so as a result of a circumstance that is not due to fault, and neither by law, a legal act or generally accepted views comes at its expense."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "9. Intellectuele eigendom" : "9. Intellectual property"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Alle rechten van intellectuele eigendom op alle in het kader van de overeenkomst ontwikkelde of ter beschikking gestelde materialen, zoals rapporten, adviezen, ontwerpen, schetsen, tekeningen, software, etc. berusten uitsluitend bij Oliver Dytko of diens licentiegevers."
                    : "All intellectual property rights to all materials developed or made available in the context of the agreement, such as reports, advice, designs, sketches, drawings, software, etc. rest exclusively with Oliver Dytko or its licensors."
                  }
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === "nl" ? "10. Toepasselijk recht en geschillen" : "10. Applicable law and disputes"}
                </h2>
                <p className="text-gray-700">
                  {language === "nl" 
                    ? "Op alle rechtsbetrekkingen waarbij Oliver Dytko partij is, is uitsluitend het Nederlands recht van toepassing. Geschillen tussen Oliver Dytko en de opdrachtgever zullen uitsluitend worden voorgelegd aan de bevoegde rechter in het arrondissement waarin Oliver Dytko gevestigd is."
                    : "Dutch law exclusively applies to all legal relationships to which Oliver Dytko is a party. Disputes between Oliver Dytko and the client will exclusively be submitted to the competent court in the district where Oliver Dytko is established."
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

export default function AlgemeneVoorwaarden() {
  return (
    <I18nProvider>
      <Header />
      <TermsContent />
      <Footer />
    </I18nProvider>
  )
}
