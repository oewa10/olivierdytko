"use client"

import Image from "next/image"
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

function SpecCard({ 
  specKey, 
  Icon, 
  isVisible, 
  delay, 
  t 
}: { 
  specKey: string
  Icon: React.ComponentType<{ className?: string }>
  isVisible: boolean
  delay: number
  t: (key: string) => string
}) {
  const specName = t(`spec.${specKey}`)
  const specDesc = t(`spec.${specKey}.desc`)
  
  return (
    <div
      className={`group p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 h-full flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-5 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all duration-300">
        <Icon className="h-5 w-5 text-emerald-500" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {specName}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">
        {specDesc}
      </p>
    </div>
  )
}

export function SpecializationsGridSection() {
  const { t } = useI18n()
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="specializations-grid" className="py-24 bg-zinc-950 overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("spec.title")}</h2>
          <div className="w-16 h-1 bg-emerald-500" />
        </div>

        {/* Desktop: 3x3 Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Row 1: 3 cards */}
          <SpecCard specKey="groundworkers" Icon={Pickaxe} isVisible={isVisible} delay={100} t={t} />
          <SpecCard specKey="carpenters" Icon={Hammer} isVisible={isVisible} delay={200} t={t} />
          <SpecCard specKey="helpers" Icon={HardHat} isVisible={isVisible} delay={300} t={t} />

          {/* Row 2: Image + Card + Image */}
          <div
            className={`rounded-xl overflow-hidden transition-all duration-700 relative group ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <Image
              src="/construction1.jpg"
              alt="Construction work"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <SpecCard specKey="plumbers" Icon={Wrench} isVisible={isVisible} delay={500} t={t} />
          <div
            className={`rounded-xl overflow-hidden transition-all duration-700 relative group ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <Image
              src="/construction2.jpg"
              alt="Construction work"
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Row 3: 3 cards */}
          <SpecCard specKey="window" Icon={SquareStack} isVisible={isVisible} delay={700} t={t} />
          <SpecCard specKey="scaffolders" Icon={Layers} isVisible={isVisible} delay={800} t={t} />
          <SpecCard specKey="electricians" Icon={Zap} isVisible={isVisible} delay={900} t={t} />
        </div>

        {/* Mobile: Show all 7 cards without images */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SpecCard specKey="groundworkers" Icon={Pickaxe} isVisible={isVisible} delay={100} t={t} />
          <SpecCard specKey="carpenters" Icon={Hammer} isVisible={isVisible} delay={200} t={t} />
          <SpecCard specKey="helpers" Icon={HardHat} isVisible={isVisible} delay={300} t={t} />
          <SpecCard specKey="plumbers" Icon={Wrench} isVisible={isVisible} delay={400} t={t} />
          <SpecCard specKey="window" Icon={SquareStack} isVisible={isVisible} delay={500} t={t} />
          <SpecCard specKey="scaffolders" Icon={Layers} isVisible={isVisible} delay={600} t={t} />
          <SpecCard specKey="electricians" Icon={Zap} isVisible={isVisible} delay={700} t={t} />
        </div>
      </div>
    </section>
  )
}
