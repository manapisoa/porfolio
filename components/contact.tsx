<<<<<<< HEAD
"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <p className="text-accent font-mono text-sm">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Un projet en tête ? N'hésitez pas à me contacter. Je serais ravi
            d'échanger avec vous.
=======
// components/contact.tsx
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer ton année ?</h2>
          <p className="text-xl text-muted-foreground">
            Réserve ton bilan offert de 20 minutes pour faire le point sur ta situation
>>>>>>> c346429 (commit)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
<<<<<<< HEAD
          <div className="space-y-8">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
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
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
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
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
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

=======
>>>>>>> c346429 (commit)
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Prends contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@methode-boclet.fr" className="text-muted-foreground hover:underline">
                    contact@methode-boclet.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-bold text-foreground mb-1">Téléphone</h3>
                  <a
                    href="tel:+261382251528"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +261 34 67 572 18
=======
                  <h4 className="font-medium">Téléphone</h4>
                  <a href="tel:+33612345678" className="text-muted-foreground hover:underline">
                    +33 6 12 34 56 78
>>>>>>> c346429 (commit)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-bold text-foreground mb-1">
                    Localisation
                  </h3>
                  <p className="text-muted-foreground">
                    Antananarivo, Madagascar
                  </p>
=======
                  <h4 className="font-medium">Localisation</h4>
                  <p className="text-muted-foreground">Guadeloupe - 100% en visio</p>
>>>>>>> c346429 (commit)
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="font-bold text-foreground mb-2">Disponibilité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Je suis actuellement disponible pour des projets freelance et
                des opportunités de collaboration. N'hésitez pas à me contacter
                pour discuter de votre projet.
              </p>
            </Card>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
        </footer>
      </div>
    </section>
  );
}
=======
            <div className="pt-4">
              <h4 className="font-medium mb-3">Suis-moi sur les réseaux</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="p-2 hover:bg-muted rounded-full transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Formulaire de contact</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
>>>>>>> c346429 (commit)
