"use client";

import type React from "react";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { setTheme, theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/10 dark:border-white/[0.08] rounded-full dark:bg-void/90 dark:backdrop-blur-md bg-cream/90 backdrop-blur-md shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-400 items-center flex space-x-1 text-neutral-600 dark:hover:text-gold hover:text-ember"
            )}
          >
            <span className="block sm:hidden text-[10px]">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button
          onClick={toggle}
          className="cursor-pointer border text-sm font-medium relative border-neutral-200 dark:border-white/[0.08] text-black dark:text-white px-4 py-2 rounded-full hover:border-gold/50 dark:hover:border-gold/50 transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-full h-full"
              >
                <Sun className="w-[80%] m-auto" />
              </motion.div>
            ) : (
              <motion.div
                key="moon-icon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-full h-full"
              >
                <Moon className="w-[80%] m-auto" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-gold to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
