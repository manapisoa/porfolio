import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-accent font-mono text-sm md:text-base">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance">Manampisoa</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground text-balance">
              Développeur Full Stack
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Je crée des expériences numériques exceptionnelles qui allient design élégant et code performant. Spécialisé
            dans le développement web moderne avec React, Next.js et TypeScript.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="font-medium" asChild>
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button size="lg" variant="outline" className="font-medium bg-transparent" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
