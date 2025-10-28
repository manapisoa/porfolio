import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, Users } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Développement",
      description: "React, Next.js, TypeScript, Node.js, et plus encore",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Tailwind CSS, design systems",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation, SEO, accessibilité, best practices",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe, communication, méthodologies agiles",
    },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <p className="text-accent font-mono text-sm">À propos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Qui suis-je ?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par le développement web depuis plus de 5 ans, je transforme des idées en applications web
              performantes et élégantes. Mon approche combine expertise technique et sensibilité design pour créer des
              expériences utilisateur mémorables.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              J'aime relever des défis complexes et apprendre constamment de nouvelles technologies. Que ce soit pour
              une startup innovante ou une grande entreprise, je m'engage à livrer un code de qualité et des solutions
              créatives.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "MongoDB",
                "Git",
                "Docker",
                "AWS",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 hover:shadow-lg transition-shadow">
              <skill.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-card-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
