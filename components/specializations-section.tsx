"use client"

import { useI18n } from "@/lib/i18n"
import { Pickaxe, Hammer, HardHat, Wrench, SquareStack, Layers, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const specializations = [
  { key: "groundworkers", icon: Pickaxe },
  { key: "carpenters", icon: Hammer },
  { key: "helpers", icon: HardHat },
  { key: "plumbers", icon: Wrench },
  { key: "window", icon: SquareStack },
  { key: "scaffolders", icon: Layers },
  { key: "electricians", icon: Zap },
]

export function SpecializationsSection() {
  const { t } = useI18n()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="specializations" className="py-24 bg-background overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("spec.title")}</h2>
          <div className="w-16 h-1 bg-emerald-500" />
        </div>

        <div className="relative">
          {/* Timeline line with animation */}
          <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-500 to-emerald-500/30 md:transform md:-translate-x-1/2 transition-all duration-1000 origin-top ${
            isVisible ? "scale-y-100" : "scale-y-0"
          }`} />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {specializations.map((spec, index) => {
              const Icon = spec.icon
              const specName = t(`spec.${spec.key}`)
              const isEven = index % 2 === 0

              return (
                <div 
                  key={spec.key} 
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Desktop: Alternating layout */}
                  <div className="hidden md:flex items-center">
                    {isEven ? (
                      <>
                        {/* Left side */}
                        <div className={`w-1/2 pr-12 text-right transition-all duration-700 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`} style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms" }}>
                          <div className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                              {specName}
                            </h3>
                          </div>
                        </div>
                        {/* Center dot */}
                        <div className="w-12 flex justify-center">
                          <div className={`w-12 h-12 rounded-full bg-emerald-500 border-4 border-background flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 ${
                            isVisible ? "scale-100" : "scale-0"
                          }`} style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        {/* Right side empty */}
                        <div className="w-1/2 pl-12" />
                      </>
                    ) : (
                      <>
                        {/* Left side empty */}
                        <div className="w-1/2 pr-12" />
                        {/* Center dot */}
                        <div className="w-12 flex justify-center">
                          <div className={`w-12 h-12 rounded-full bg-emerald-500 border-4 border-background flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 ${
                            isVisible ? "scale-100" : "scale-0"
                          }`} style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        {/* Right side */}
                        <div className={`w-1/2 pl-12 transition-all duration-700 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`} style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms" }}>
                          <div className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                              {specName}
                            </h3>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile: Single column */}
                  <div className="md:hidden flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-emerald-500 border-4 border-background flex items-center justify-center shadow-lg transition-all duration-500 ${
                        isVisible ? "scale-100" : "scale-0"
                      }`} style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {index < specializations.length - 1 && (
                        <div className={`w-1 h-12 bg-gradient-to-b from-emerald-500 to-emerald-500/30 mt-2 transition-all duration-500 origin-top ${
                          isVisible ? "scale-y-100" : "scale-y-0"
                        }`} style={{ transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms" }} />
                      )}
                    </div>
                    <div className={`group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex-1 mt-1 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`} style={{ transitionDelay: isVisible ? `${index * 150 + 100}ms` : "0ms" }}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                        {specName}
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
