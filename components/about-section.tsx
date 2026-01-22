"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { t } = useI18n()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">{t("about.title")}</h2>
            <div className="w-16 h-1 bg-emerald-500 mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
          </div>
          <div 
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl group">
              <img 
                src="/about-us.jpeg" 
                alt="Oliver Dytko" 
                className="h-full w-full object-cover object-center scale-125 transition-transform duration-700 group-hover:scale-[1.3]" 
              />
            </div>
            <div className={`absolute -bottom-6 -left-6 h-32 w-32 bg-emerald-500/10 rounded-lg -z-10 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`} />
            <div className={`absolute -top-6 -right-6 h-24 w-24 bg-emerald-500/20 rounded-lg -z-10 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`} />
          </div>
        </div>
      </div>
    </section>
  )
}
