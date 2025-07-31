"use client"
import type React from "react"
import { useState } from "react"
import { Input, Textarea } from "./ui/input"
import { PlanetCanva } from "./canvas/PlanetCanva"
import { Label } from "./ui/label"
import { cn } from "@/utils/cn"

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const contactData = {
      name: `${formData.get("firstname")} ${formData.get("lastname")}`,
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      // Aquí puedes integrar con tu servicio de email preferido
      // Por ejemplo: EmailJS, Resend, o un endpoint de API
      console.log("Contact form data:", contactData)

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      e.currentTarget.reset()
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <div className="m-auto w-[80%] min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10">
      <div>
        <div className="w-full max-w-lg shadow-input bg-black text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white">Let's Work Together</h2>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your
            ideas to life.
          </p>

          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md">
              <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md">
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            </div>
          )}

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" name="firstname" placeholder="John" type="text" required />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" name="lastname" placeholder="Doe" type="text" required />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" placeholder="john.doe@example.com" type="email" required />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Project Collaboration" type="text" required />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, timeline, and how I can help you achieve your goals..."
                rows={5}
                required
                className="resize-none"
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"} &rarr;
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <p className="text-xs text-neutral-400 text-center">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center w-[800px] h-[800px] md:block">
        <PlanetCanva />
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
