import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Présent",
      description:
        "Développement d'applications web complexes avec React et Next.js. Lead technique sur plusieurs projets stratégiques. Mentorat d'équipe et mise en place de best practices.",
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Création de sites web et applications pour divers clients. Collaboration étroite avec les designers et chefs de projet. Optimisation des performances et SEO.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Startup",
      period: "2019 - 2020",
      description:
        "Développement de l'interface utilisateur d'une plateforme SaaS. Intégration d'APIs REST. Participation active aux décisions techniques et design.",
      technologies: ["JavaScript", "React", "Redux", "CSS"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <p className="text-accent font-mono text-sm">Parcours</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Expérience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-card-foreground">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
