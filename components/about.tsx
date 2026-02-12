import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold mb-8">À propos de la Méthode Boclet</h2>
        <div className="space-y-6">
          <p>
            La <strong>Méthode Boclet</strong> est une approche révolutionnaire basée sur les neurosciences, spécialement conçue pour les étudiants en filières exigeantes.
          </p>
          <p>
            Développée par Mohamed Boclet, vice-champion du monde de lecture rapide et expert en techniques d'apprentissage accéléré, cette méthode t'aide à :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprendre et mémoriser plus rapidement</li>
            <li>Organiser efficacement tes connaissances</li>
            <li>Réduire ton temps d'étude tout en améliorant tes résultats</li>
            <li>Gérer ton stress et tes émotions pendant les examens</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
