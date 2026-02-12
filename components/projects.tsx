// components/projects.tsx
import { BookText, BrainCircuit, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: BookText,
    title: "Formation Complète",
    description: "Maîtrisez l'ensemble des techniques de la Méthode Boclet en 6 semaines",
    features: [
      "12h de formation en visio",
      "Groupes de 4-6 personnes",
      "Accès aux replays",
      "Support personnalisé"
    ],
    price: "300€ (au lieu de 490€)"
  },
  {
    icon: BrainCircuit,
    title: "Atelier Découverte",
    description: "Initiation aux techniques clés de mémorisation et lecture rapide",
    features: [
      "3h d'atelier intensif",
      "Exercices pratiques",
      "Fiches méthodes offertes",
      "Échange en direct"
    ],
    price: "97€"
  },
  {
    icon: Clock,
    title: "Accompagnement VIP",
    description: "Suivi personnalisé pour des résultats optimaux",
    features: [
      "Séances individuelles",
      "Programme sur mesure",
      "Accès illimité",
      "Support prioritaire"
    ],
    price: "À partir de 500€"
  }
]

export function Projects() {
  return (
    <section id="offres" className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Formations</h2>
          <p className="text-xl text-muted-foreground">
            Choisissez la formule qui correspond à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t">
                  <p className="text-lg font-semibold text-center">{project.price}</p>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Vous hésitez ?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Réservez votre bilan offert de 20 minutes pour discuter de vos objectifs
            et trouver ensemble la meilleure solution pour vous.
          </p>
          <Button size="lg" >
            Je réserve mon bilan offert
          </Button>
        
        </div>
      </div>
    </section>
  )
}