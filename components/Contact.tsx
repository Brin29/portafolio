"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Input, Textarea } from "./ui/input"
import { PlanetCanva } from "./canvas/PlanetCanva"
import { Label } from "./ui/label"
import emailjs from "@emailjs/browser"
import { cn } from "@/utils/cn"

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const form = useRef<HTMLFormElement>(null)

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_KEY

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)

    emailjs
      .sendForm(serviceId!, templateId!, form.current, {
        publicKey: publicKey!,
      })
      .then(() => {
        form.current?.reset()
        setSubmitStatus("success")
      })
      .catch(() => {
        form.current?.reset()
        setSubmitStatus("error")
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 4000)
      })
  }

  return (
    <div id="contacto" className="m-auto md:w-[80vw] w-[85vw] mt-[100px] md:mt-[100px] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-void dark:text-white mb-4">Contáctame</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-lg leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades y desafíos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white dark:bg-deep border border-neutral-100 dark:border-white/5 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-void dark:text-white mb-6">Envíame un mensaje</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg">
                  <p className="text-gold text-sm font-medium">¡Mensaje enviado con éxito! Te responderé pronto.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-ember/10 border border-ember/30 rounded-lg">
                  <p className="text-ember text-sm font-medium">Algo salió mal. Por favor, intenta de nuevo.</p>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <LabelInputContainer>
                  <Label htmlFor="name" className="text-void dark:text-neutral-300 text-sm font-medium">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    type="text"
                    required
                    className="bg-neutral-100 dark:bg-surface border-neutral-200 dark:border-white/10 text-void dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email" className="text-void dark:text-neutral-300 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    type="email"
                    required
                    className="bg-neutral-100 dark:bg-surface border-neutral-200 dark:border-white/10 text-void dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="message" className="text-void dark:text-neutral-300 text-sm font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="resize-none bg-neutral-100 dark:bg-surface border-neutral-200 dark:border-white/10 text-void dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </LabelInputContainer>

                <button
                  className="cursor-pointer relative block h-12 w-full rounded-lg bg-gold text-void font-semibold shadow-lg hover:bg-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Enviando..." : "Enviar mensaje"} &rarr;</span>
                  <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                </button>

                <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center">
                  Suelo responder en menos de 24 horas. ¡Estoy atento a tu mensaje!
                </p>
              </form>
            </div>
          </div>

          {/* Canvas del Planeta */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl aspect-square">
              <PlanetCanva />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
