"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ServiceItem {
  number: string
  titleKey: string
  descriptionKey: string
  categoryKey: string
  detailsKey: string
}

export function ServicesSection() {
  const { t } = useI18n()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const services: ServiceItem[] = [
    {
      number: "01",
      titleKey: "services.item1.title",
      descriptionKey: "services.item1.description",
      categoryKey: "services.item1.category",
      detailsKey: "services.item1.details",
    },
    {
      number: "02",
      titleKey: "services.item2.title",
      descriptionKey: "services.item2.description",
      categoryKey: "services.item2.category",
      detailsKey: "services.item2.details",
    },
    {
      number: "03",
      titleKey: "services.item3.title",
      descriptionKey: "services.item3.description",
      categoryKey: "services.item3.category",
      detailsKey: "services.item3.details",
    },
    {
      number: "04",
      titleKey: "services.item4.title",
      descriptionKey: "services.item4.description",
      categoryKey: "services.item4.category",
      detailsKey: "services.item4.details",
    },
    {
      number: "05",
      titleKey: "services.item5.title",
      descriptionKey: "services.item5.description",
      categoryKey: "services.item5.category",
      detailsKey: "services.item5.details",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="services" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-0">
            {t("services.heading")}
          </h2>
          <p className="text-zinc-400 max-w-md text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="border-t border-zinc-700">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-b border-zinc-700 group transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full py-6 flex items-center gap-3 md:gap-8 lg:gap-12 text-left hover:bg-zinc-800/50 transition-colors px-2 md:px-4"
              >
                <span className="text-emerald-500 text-xs md:text-sm font-medium w-6 md:w-8 flex-shrink-0 pt-1">
                  {service.number}
                </span>
                <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight flex-1 group-hover:text-zinc-300 transition-colors leading-tight">
                  {t(service.titleKey)}
                </h3>
                <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                  <p className="text-zinc-400 text-sm max-w-xs text-right">
                    {t(service.descriptionKey)}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-xs font-medium text-emerald-400 whitespace-nowrap">
                    {t(service.categoryKey)}
                  </span>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 md:h-6 md:w-6 text-emerald-500 transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-2 md:px-4 pb-8 pl-14 md:pl-24">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-zinc-300 leading-relaxed">
                        {t(service.detailsKey)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="sm:hidden inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-xs font-medium text-emerald-400">
                        {t(service.categoryKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
