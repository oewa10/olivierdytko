"use client"

import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin, Building2, FileText } from "lucide-react"
import Link from "next/link"

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
  
  const companyDetails = [
    { icon: Building2, text: "Oliver Dytko", label: "Company" },
    { icon: FileText, text: "KVK: 85228427", label: "KVK" },
    { icon: FileText, text: "BTW: NL004067420B26", label: "BTW" },
    { icon: MapPin, text: "Vergiliusstraat 43, 1502 NN Zaandam", label: "Address" },
    { icon: Phone, text: "+31620180034", href: "tel:+31620180034", label: "Phone" },
  ]

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Oliver Dytko</h3>
            <ul className="space-y-2">
              {companyDetails.map((detail) => {
                const Icon = detail.icon
                return (
                  <li key={detail.label} className="flex items-center gap-2 text-sm text-background/70">
                    <Icon className="h-4 w-4 text-emerald-400" />
                    {detail.href ? (
                      <a href={detail.href} className="hover:text-emerald-400 transition-colors">
                        {detail.text}
                      </a>
                    ) : (
                      <span>{detail.text}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DBA Rules & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.dba")}</h3>
            <p className="text-sm text-background/70 mb-2">
              {t("footer.dba.desc")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/dba-info" 
                  className="text-sm text-background/70 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <FileText className="h-3 w-3" />
                  {t("footer.dba.link")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-statement" 
                  className="text-sm text-background/70 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <FileText className="h-3 w-3" />
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/algemene-voorwaarden" 
                  className="text-sm text-background/70 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <FileText className="h-3 w-3" />
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.connect")}</h3>
            <div className="flex gap-3 mb-4">
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
        
        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
