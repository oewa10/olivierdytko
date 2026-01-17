"use client"

import { useI18n } from "@/lib/i18n"
import { MessageSquare, Users, Briefcase, HeadphonesIcon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  { key: "step1", icon: MessageSquare, number: "01" },
  { key: "step2", icon: Users, number: "02" },
  { key: "step3", icon: Briefcase, number: "03" },
  { key: "step4", icon: HeadphonesIcon, number: "04" },
]

export function ProcessSection() {
  const { t } = useI18n()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="process" className="py-24 bg-background overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("process.title")}</h2>
          <div className="w-16 h-1 bg-emerald-500" />
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className={`hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 transition-all duration-1000 origin-left ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.key}
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Step card */}
                  <div className="group text-center">
                    {/* Icon circle */}
                    <div className={`relative mx-auto w-32 h-32 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/20 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`} style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms" }}>
                      {/* Step number */}
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                        {step.number}
                      </span>
                      <Icon className="h-10 w-10 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                      {t(`process.${step.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {t(`process.${step.key}.desc`)}
                    </p>
                  </div>

                  {/* Arrow connector - mobile only */}
                  {index < steps.length - 1 && (
                    <div className={`md:hidden flex justify-center my-4 transition-all duration-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`} style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms" }}>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-emerald-500/30" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
