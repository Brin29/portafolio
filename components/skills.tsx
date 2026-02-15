"use client"

import { backendSkills, frontendSkills } from "@/data"
import SkillCard from "@/components/skill-card"
import { useTranslation } from "react-i18next";

export default function Skills() {
  const [t] = useTranslation("global");

  return (
    <section id={t("section.sectionFour")} className="w-[80vw] lg:w-[70vw] m-auto py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{ backgroundImage: 'url("/placeholder.svg?height=200&width=200")' }}
        aria-hidden="true"
      ></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("skills.title")}
              </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t("skills.subtitle")}
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend Skills Card */}
          <SkillCard title="Frontend" skills={frontendSkills} />
          {/* Backend Skills Card */}
          <SkillCard title="Backend" skills={backendSkills} delay={0.2} />
        </div>
      </div>
    </section>
  )
}
