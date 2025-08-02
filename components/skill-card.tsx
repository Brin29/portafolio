"use client"

import { motion } from "framer-motion"
import SkillBadge from "./skill-badge"

interface Skill {
  name: string
  image: string
}

interface SkillCardProps {
  title: string
  skills: Skill[]
  delay?: number // Optional delay for animation
}

export default function SkillCard({ title, skills, delay = 0 }: SkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay } },
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}