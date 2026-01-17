"use client"

import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#process", label: t("nav.process") },
    { href: "#specializations-grid", label: t("nav.specializations") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585198233871", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Oliver Dytko</p>
            <p className="text-sm text-background/70">
              © {new Date().getFullYear()} {t("footer.rights")}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Language */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
