"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2 md:gap-1 md:rounded-full md:bg-background/20 md:p-1">
      <Button
        size="sm"
        onClick={() => setLanguage("nl")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "nl" 
            ? "md:bg-background/80 md:text-foreground md:hover:bg-background/90 bg-emerald-600 text-white hover:bg-emerald-700" 
            : "md:text-background/60 md:hover:text-background md:hover:bg-background/10 bg-transparent text-emerald-900 border-2 border-emerald-900 hover:bg-emerald-900/10"
        }`}
      >
        NL
      </Button>
      <Button
        size="sm"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "en" 
            ? "md:bg-background/80 md:text-foreground md:hover:bg-background/90 bg-emerald-600 text-white hover:bg-emerald-700" 
            : "md:text-background/60 md:hover:text-background md:hover:bg-background/10 bg-transparent text-emerald-900 border-2 border-emerald-900 hover:bg-emerald-900/10"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
