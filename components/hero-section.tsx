"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

const heroImages = [
  "/construction-workers-on-building-site-with-scaffol.jpg",
  "/carpenter-working-on-wooden-structure.jpg",
  "/professional-scaffolders-assembling-framework.jpg",
  "/electrician-installing-electrical-systems.jpg",
  "/window-fitter-installing-window-frame.jpg",
]

export function HeroSection() {
  const { t } = useI18n()
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Construction site ${index + 1}`}
            className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
              index === currentImage ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
      ))}

      {/* Content with staggered animations */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 
          className={`mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl tracking-tight transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Oliver Dytko
        </h1>
        <p 
          className={`mb-8 max-w-2xl text-lg text-white/90 sm:text-xl lg:text-2xl text-balance transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.tagline")}
        </p>
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
            asChild
          >
            <a href="#contact">{t("hero.cta")}</a>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows with hover effects */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm">Scroll</span>
          <ChevronDown className="h-5 w-5 text-white/70" />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentImage ? "bg-emerald-500 w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
