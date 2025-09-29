"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance">
              <span className="gradient-text">Piyush Bist</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-mono">Data Scientist & ML Engineer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build intelligent, data-driven solutions that transform complex problems into actionable insights.
              Specializing in machine learning, deep learning, and cloud computing with a passion for innovation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection("projects")} className="animate-glow">
              View My Work
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Glasgow, UK
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Pacifier25" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/piyush-bist-463598195" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:bistpiyush03@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full animate-float"></div>
            <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="portfolio_2025/images/profile-picture.png"
                alt="Piyush Bist - Data Scientist"
                width={280}
                height={280}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
