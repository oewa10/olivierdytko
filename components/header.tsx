"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#specializations", label: t("nav.specializations") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className={`text-xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Oliver Dytko
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? "text-muted-foreground hover:text-emerald-500" : "text-white/90 hover:text-white"}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <button
                className={`md:hidden relative z-50 transition-all duration-300 p-2 ${
                  isMobileMenuOpen 
                    ? "text-emerald-300" 
                    : "text-emerald-500 hover:text-emerald-400"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
                  <X className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-emerald-900 transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <nav className="relative h-full flex flex-col items-center justify-center px-8">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl font-bold text-white hover:text-emerald-300 transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : "0ms"
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-1 bg-emerald-500" />
              <p className="text-emerald-300/60 text-sm">Oliver Dytko</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
