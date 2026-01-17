"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
      <Button
        variant={language === "nl" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("nl")}
        className="rounded-full px-3 py-1 text-sm font-medium"
      >
        NL
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="rounded-full px-3 py-1 text-sm font-medium"
      >
        EN
      </Button>
    </div>
  )
}
