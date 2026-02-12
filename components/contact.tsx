"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implémenter l'envoi réel (Formspree, EmailJS, API perso, etc.)
    console.log("Formulaire envoyé :", formData);
    // Optionnel : reset formulaire
    // setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-mono text-sm uppercase tracking-wide mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à transformer ton année ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Réserve ton bilan offert de 20 minutes pour faire le point sur ta situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Colonne de gauche → Formulaire */}
          <Card className="p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Nom complet
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

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
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
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex : Bilan offert, coaching, question..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décris-moi ta situation ou ta demande..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </Card>

          {/* Colonne de droite → Infos + réseaux */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Prends contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-0.5">Email</h4>
                    <a
                      href="mailto:contact@methode-boclet.fr"
                      className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      contact@methode-boclet.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-0.5">Téléphone</h4>
                    <a
                      href="tel:+33612345678"
                      className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-0.5">Localisation</h4>
                    <p className="text-muted-foreground">
                      Guadeloupe – 100% en visio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Suis-moi sur les réseaux</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-muted/60 rounded-full hover:bg-muted transition-colors"
                  aria-label="Instagram"
                >
                  {/* Icône Instagram */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    {/* ... (tu peux garder le reste de l'icône) */}
                  </svg>
                </a>

                <a
                  href="#"
                  className="p-3 bg-muted/60 rounded-full hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  {/* Icône LinkedIn */}
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Méthode Boclet – Tous droits réservés
        </div>
      </div>
    </section>
  );
}