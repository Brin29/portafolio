"use client"

import { backendSkills, frontendSkills } from "@/data"
import SkillCard from "@/components/skill-card"

export default function Skills() {
  return (
    <section id="habilidades" className="w-[80vw] lg:w-[70vw] m-auto py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-void dark:text-white">Mis habilidades</h2>
            <p className="max-w-[900px] text-neutral-600 dark:text-neutral-400 md:text-lg text-base leading-relaxed">
              Tecnologías con las que trabajo día a día.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} delay={0.2} />
        </div>
      </div>
    </section>
  )
}
