import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-20 space-y-20">
      {/* ÉTAPE 1 — HEADLINE + vidéo */}
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Et si tu arrêtais de perdre 8 heures par jour pour finir avec 7/20 ?
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Et si en 6 semaines tu passais à 13-14/20… en révisant 2 à 3 fois moins… sans te détruire ?
        </p>
        
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          <p>
            Je t'aide à valider ton année post-bac (PASS, droit, prépa, ingénieur) grâce à la <strong className="text-primary">Méthode Boclet</strong> : les techniques neurosciences qui font travailler TON cerveau avec toi, pas contre toi.
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>100 % visio en petits groupes ultra-personnalisés (4-6 max)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Outils concrets que tu gardes à vie</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Résultats visibles dès les 1-2 premières semaines pour la majorité</span>
            </li>
          </ul>
          
          <div className="pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
              Clique ici et réserve ton BILAN CERVEAU OFFERT (20 min gratuit)
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">Ton année ne peut plus attendre.</p>
          </div>
        </div>
      </div>

      {/* ÉTAPE 2 — PREUVE SOCIALE */}
      <div className="max-w-4xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Déjà des dizaines d'étudiants sauvés</h2>
        
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-center mb-4">[Insérer ici un carrousel ou une vidéo]</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg text-center mb-2">+6 points</h3>
              <p className="text-sm text-center">en moyenne en 6 semaines</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg text-center mb-2">-50%</h3>
              <p className="text-sm text-center">de temps de révision</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="font-bold text-lg text-center mb-2">100%</h3>
              <p className="text-sm text-center">de réussite</p>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="font-bold text-lg">Exemples concrets :</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Sarah (L2 Droit)</strong> : 7/20 → 14/20 → année validée, 3 h/j au lieu de 8</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Lucas (PASS médecine)</strong> : 8/20 malgré 16 h/j → 13/20, temps divisé par 2 → 2e année</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Inès (prépa ingénieur)</strong> : angoisses + larmes → sérénité totale, plaisir d'apprendre retrouvé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}