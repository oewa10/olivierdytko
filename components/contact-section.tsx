"use client"

import type React from "react"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const { t } = useI18n()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <div className="w-16 h-1 bg-emerald-500" />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className={`lg:col-span-1 space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            {/* Phone */}
            <div 
              className={`group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">{t("contact.phone")}</h3>
                  <a href="tel:+31620180034" className="text-muted-foreground hover:text-emerald-500 transition-colors font-medium">
                    +31620180034
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div 
              className={`group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">{t("contact.email")}</h3>
                  <a
                    href="mailto:info@oliverdytko.nl"
                    className="text-muted-foreground hover:text-emerald-500 transition-colors font-medium break-all"
                  >
                    info@oliverdytko.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div 
              className={`group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">{t("contact.address")}</h3>
                  <p className="text-muted-foreground font-medium">Vergiliusstraat 43, 1502 NN Zaandam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 bg-card p-8 md:p-10 rounded-xl shadow-sm border border-border transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t("contact.success")}</h3>
                <p className="text-muted-foreground">We zullen zo snel mogelijk contact met u opnemen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.name")} *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500" 
                      placeholder={t("contact.name.placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.email")} *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder={t("contact.email.placeholder")}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.phone")} *
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder={t("contact.phone.placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.company")}
                    </label>
                    <Input 
                      id="company" 
                      name="company" 
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder={t("contact.company.placeholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.message")} *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    placeholder={t("contact.message.placeholder")}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors" 
                  size="lg" 
                  disabled={isLoading}
                >
                  {isLoading ? "Verzenden..." : t("contact.submit")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
