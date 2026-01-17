"use client"

import { useI18n } from "@/lib/i18n"
import { Award, Users, ShieldCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhyChooseSection() {
  const { t } = useI18n()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const reasons = [
    {
      icon: Award,
      titleKey: "why.experience.title",
      descKey: "why.experience.desc",
    },
    {
      icon: Users,
      titleKey: "why.network.title",
      descKey: "why.network.desc",
    },
    {
      icon: ShieldCheck,
      titleKey: "why.reliable.title",
      descKey: "why.reliable.desc",
    },
  ]

  return (
    <section className="py-16 md:py-12 bg-emerald-900 text-white relative overflow-hidden">
      {/* Shadow stroke effect - top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/50 to-transparent" />
      {/* Shadow stroke effect - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/50 to-transparent" />
      
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("why.title")}</h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto" />
        </div>

        <div className="grid gap-6 md:gap-4 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div 
                key={index} 
                className={`group text-center p-6 md:p-4 rounded-xl bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-900/50 hover:scale-105 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
              >
                <div className={`w-16 h-16 md:w-14 md:h-14 mx-auto mb-4 md:mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-500 shadow-lg shadow-emerald-900/30 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`} style={{ transitionDelay: isVisible ? `${index * 200 + 100}ms` : "0ms" }}>
                  <Icon className="h-8 w-8 md:h-7 md:w-7 text-emerald-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-base font-semibold mb-2 text-white group-hover:text-emerald-300 transition-colors">{t(reason.titleKey)}</h3>
                <p className="text-sm md:text-xs text-emerald-100/80 group-hover:text-white transition-colors">{t(reason.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
