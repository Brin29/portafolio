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
      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:ring-gray-300 cursor-pointer"
      variants={badgeVariants}
      whileHover="hover"
      aria-label={skill.name}
    >
      <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="h-6 w-6 mr-2" />
      {skill.name}
    </motion.div>
  )
}