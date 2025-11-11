import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    // {
    //   title: "DevOps Burger",
    //   description:
    //     "Application de gestion de commandes de burgers avec interface utilisateur moderne et tableau de bord administrateur.",
    //   image: "/image/DevOpsBurger.jpg",
    //   technologies: ["React", "Node.js", "MongoDB", "Docker"],
    //   github: "#",
    //   demo: "#",
    // },
    {
      title: "Chat en temps réel",
      description:
        "Application de messagerie instantanée avec authentification et conversations en temps réel.",
      image: "/image/chat.jpeg",
      technologies: ["React", "Socket.io", "Express", "Postgresql"],
      github: "#",
      demo: "#",
    },
    {
      title: "Gestion HACCP",
      description:
        "Système de gestion HACCP pour la traçabilité et la sécurité alimentaire dans les établissements de restauration.",
      image: "/image/haccp.jpeg",
      technologies: ["django", "reactjs", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Gestion des stocks",
      description:
        "Application complète de gestion des stocks avec suivi des entrées/sorties et alertes de réapprovisionnement.",
      image: "/image/iventory.png",
      technologies: ["django", "sqlite", "reactjs"],
      github: "#",
      demo: "#",
    },
    {
      title: "Système d'achats",
      description:
        "Plateforme de gestion des achats avec suivi des commandes, facturation et analyse des dépenses.",
      image: "/image/purshase.png",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
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
