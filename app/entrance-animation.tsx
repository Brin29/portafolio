"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function EntranceAnimation() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [t] = useTranslation("global");

  useEffect(() => {
    // Comprueba si la animación ya se ha mostrado en esta sesión
    const hasShown = sessionStorage.getItem("portfolio_intro_shown")
    if (!hasShown) {
      setShowAnimation(true) // Muestra la animación
      const timer = setTimeout(() => {
        setShowAnimation(false) // Oculta la animación después de 3 segundos
        sessionStorage.setItem("portfolio_intro_shown", "true") // Marca que ya se mostró
      }, 3000)
      return () => clearTimeout(timer) // Limpia el temporizador al desmontar
    }
  }, [])

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          aria-hidden={!showAnimation} // Oculta para lectores de pantalla cuando no es visible
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight text-center px-4"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {t("welcome")}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
