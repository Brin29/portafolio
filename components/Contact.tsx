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
    <div className="min-h-scree flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Formulario */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg shadow-2xl bg-black border border-neutral-800 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Contáctame</h2>
              <p className="text-sm text-neutral-300 mb-6">
                ¿Tienes una idea, proyecto o propuesta de trabajo? Estoy disponible para trabajar en nuevos desafíos.
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm">¡Mensaje enviado con éxito! Te responderé pronto.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">Algo salió mal. Por favor, intenta de nuevo.</p>
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <LabelInputContainer>
                  <Label htmlFor="name" className="text-neutral-200">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    type="text"
                    required
                    className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="email" className="text-neutral-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Tu email"
                    type="email"
                    required
                    className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="message" className="text-neutral-200">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="resize-none bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </LabelInputContainer>

                <button
                  className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-700 font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Enviando..." : "Enviar mensaje"} &rarr;</span>
                  <BottomGradient />
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-700" />
                  </div>
                </div>

                <p className="text-xs text-neutral-400 text-center">
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

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
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
