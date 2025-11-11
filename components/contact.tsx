"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <p className="text-accent font-mono text-sm">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Travaillons ensemble</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Un projet en tête ? N'hésitez pas à me contacter. Je serais ravi d'échanger avec vous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:manampymj@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    manampymj@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Téléphone</h3>
                  <a href="tel:+261382251528" className="text-muted-foreground hover:text-accent transition-colors">
                    +261 38 22 515 28 
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="font-bold text-foreground mb-2">Disponibilité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Je suis actuellement disponible pour des projets freelance et des opportunités de collaboration.
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </Card>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </footer>
      </div>
    </section>
  )
}
