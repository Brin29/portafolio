"use client";

import { useTheme } from "next-themes";
import { contactClearMode, contactDarkMode } from "@/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16"
      id="sobre_mi"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[clamp(3rem,10vw,7rem)] font-extrabold text-gold leading-[0.9] tracking-tight"
        >
          Breiner Parra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400"
        >
          Full Stack Developer <span className="text-neutral-400 dark:text-neutral-600 mx-2">·</span> Colombia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 max-w-lg text-base text-neutral-500 dark:text-neutral-500 leading-relaxed"
        >
          Creo soluciones escalables con React, TypeScript y Node.js.
          Apasionado por el código limpio y la buena arquitectura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold text-void px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors"
          >
            Disponible para trabajar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex gap-5"
        >
          {(theme === "dark" ? contactDarkMode : contactClearMode).map((el, index) => (
            <a
              key={index}
              target="_blank"
              href={el.link}
              className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img src={el.icon} alt={el.alt} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
