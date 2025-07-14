// components/ExperienceSection.tsx
"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Tech Company",
    date: "Ene 2023 - Presente",
    description: "Desarrollé microservicios con Spring Boot y conectividad con APIs externas.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Creative Studio",
    date: "Jul 2022 - Dic 2022",
    description: "Diseño de interfaces con React y animaciones con Framer Motion.",
  },
  // Agrega más experiencias si quieres
]

export const ExperienceSection = () => {
  return (
    <section className="rounded-4xl py-12 pt-16 md:mt-40 mt-30 h-auto flex flex-col items-center bg-gray-800 px-4">
      <h2 className="text-4xl font-normal md:text-5xl mb-12 text-center text-white">Experiencia</h2>

      <div className="space-y-16 w-full max-w-3xl">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} direction={index % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </section>
  )
}

const ExperienceCard = ({ exp, direction }: { exp: any; direction: "left" | "right" }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

const variants = {
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const, // ✅ <- esto soluciona el error
    },
  },
}

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gray-600 shadow-md p-6 rounded-xl text-center"
    >
      <h3 className="text-xl font-semibold">{exp.title}</h3>
      <p className="text-sm text-gray-500">{exp.company} · {exp.date}</p>
      <p className="mt-4 text-gray-700">{exp.description}</p>
    </motion.div>
  )
}