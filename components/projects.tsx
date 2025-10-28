import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme e-commerce complète avec gestion des produits, panier, paiement et dashboard admin. Interface moderne et responsive.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Application de gestion de tâches collaborative avec système de notifications en temps réel, drag & drop et filtres avancés.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Builder",
      description:
        "Outil no-code permettant de créer et personnaliser son portfolio en quelques clics. Thèmes prédéfinis et éditeur visuel.",
      image: "/portfolio-builder-editor-interface.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Supabase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard météo avec prévisions détaillées, cartes interactives et alertes personnalisées. Design minimaliste et données en temps réel.",
      image: "/weather-dashboard-interface.png",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <p className="text-accent font-mono text-sm">Réalisations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Une sélection de mes projets récents, allant d'applications web complexes à des outils innovants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
