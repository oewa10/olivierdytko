"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`flex items-center gap-2 md:gap-1 md:rounded-full md:p-1 transition-all duration-300 ${
      isScrolled 
        ? "md:bg-emerald-900/10 md:border md:border-emerald-500/30" 
        : "md:bg-white/10 md:border md:border-white/20"
    }`}>
      <Button
        size="sm"
        onClick={() => setLanguage("nl")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "nl" 
            ? "bg-emerald-600 text-white hover:bg-emerald-700 md:bg-emerald-600 md:text-white md:hover:bg-emerald-700" 
            : isScrolled
              ? "bg-transparent text-emerald-900 border-2 border-emerald-900 hover:bg-emerald-900/10 md:bg-transparent md:text-emerald-900 md:border-2 md:border-emerald-900 md:hover:bg-emerald-900/10"
              : "bg-transparent text-white border-2 border-white hover:bg-white/10 md:bg-transparent md:text-white md:border-2 md:border-white md:hover:bg-white/10"
        }`}
      >
        NL
      </Button>
      <Button
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "en" 
            ? "bg-emerald-600 text-white hover:bg-emerald-700 md:bg-emerald-600 md:text-white md:hover:bg-emerald-700" 
            : isScrolled
              ? "bg-transparent text-emerald-900 border-2 border-emerald-900 hover:bg-emerald-900/10 md:bg-transparent md:text-emerald-900 md:border-2 md:border-emerald-900 md:hover:bg-emerald-900/10"
              : "bg-transparent text-white border-2 border-white hover:bg-white/10 md:bg-transparent md:text-white md:border-2 md:border-white md:hover:bg-white/10"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
