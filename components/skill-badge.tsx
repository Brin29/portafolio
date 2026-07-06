"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: {
    name: string
    image: string
  }
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const badgeVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)" },
  }

  return (
    <motion.div
      className="inline-flex items-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-surface px-4 py-2 text-sm font-semibold transition-all hover:bg-gold/10 hover:border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 dark:focus:ring-offset-void dark:hover:border-gold/20 cursor-pointer"
      variants={badgeVariants}
      whileHover="hover"
      aria-label={skill.name}
    >
      <img src={skill.image} alt={skill.name} className="h-6 w-6 mr-2" />
      {skill.name}
    </motion.div>
  )
}