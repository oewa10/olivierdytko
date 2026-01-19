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
    <div className={`flex items-center gap-0 rounded-full p-1 transition-all duration-300 border ${
      isScrolled 
        ? "bg-emerald-900/10 border-emerald-500/50" 
        : "bg-white/10 border-white/30"
    }`}>
      <Button
        size="sm"
        onClick={() => setLanguage("nl")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "nl" 
            ? "bg-emerald-600 text-white hover:bg-emerald-700" 
            : "bg-transparent text-white hover:bg-white/10"
        }`}
      >
        NL
      </Button>
      <Button
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "en" 
            ? "bg-emerald-600 text-white hover:bg-emerald-700" 
            : "bg-transparent text-white hover:bg-white/10"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
