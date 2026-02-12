// components/experience.tsx
import { GraduationCap, BookOpen, Clock, Brain } from "lucide-react"

const experiences = [
  {
    icon: GraduationCap,
    title: "Formation certifiante",
    description: "Certification complète de la Méthode Boclet avec Mohamed Boclet",
    year: "2025"
  },
  {
    icon: BookOpen,
    title: "Spécialisation",
    description: "Adaptation des techniques aux filières sélectives (médecine, droit, prépa, ingénieur)",
    year: "2025"
  },
  {
    icon: Clock,
    title: "Accompagnement",
    description: "Plus de 100 étudiants accompagnés avec succès en 1 an",
    year: "2025-2026"
  },
  {
    icon: Brain,
    title: "Expertise",
    description: "Maîtrise des techniques de mémorisation et d'apprentissage accéléré",
    year: "Depuis 2025"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mon parcours avec la Méthode Boclet</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez comment j'ai maîtrisé et perfectionné cette méthode pour vous
          </p>
        </div>

        <div className="relative">
          {/* Ligne de temps */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`inline-block p-1 rounded-full bg-primary/10 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                  <div className={`inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium`}>
                    {exp.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-muted/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Pourquoi me faire confiance ?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>Formée directement par Mohamed Boclet, expert reconnu en techniques d'apprentissage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>Résultats prouvés avec des centaines d'étudiants accompagnés</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>Approche personnalisée adaptée à chaque profil d'apprenant</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span>Suivi personnalisé tout au long de la formation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}