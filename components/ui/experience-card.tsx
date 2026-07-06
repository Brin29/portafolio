"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  Briefcase,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Project {
  name: string;
  description: string[];
  technologies: { name: string; icon: string }[];
  hadWebSite: boolean;
  webSite: string;
}

interface ExperienceItem {
  id: number;
  date: string;
  position: string;
  company?: string;
  location?: string;
  description: {
    details: string;
    projects: Project[];
  };
}

export const ExperienceCard = ({
  exp,
  direction,
}: {
  exp: ExperienceItem;
  direction: "left" | "right";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  

  const cardVariants = {
    collapsed: { height: "auto", transition: { duration: 0.3 } },
    expanded: { height: "auto", transition: { duration: 0.3 } },
  };

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  const chevronVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      variants={variants}
      animate={controls}
      ref={ref}
      initial="hidden"
      className="w-full"
    >
      <motion.div
        variants={cardVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        className="bg-white dark:bg-deep shadow-lg rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/5 hover:shadow-xl transition-shadow duration-300 mb-6"
      >
        {/* Header */}
        <div
          className="p-4 sm:p-5 md:p-6 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-void dark:text-white">
                  {exp.position}
                </h1>
                {exp.company && (
                  <p className="text-sm sm:text-base font-semibold text-gold">
                    {exp.company}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <motion.div
              variants={chevronVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.2 }}
              className="self-start sm:self-auto"
            >
              <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-6">
                <div className="h-px w-full bg-neutral-200 dark:bg-white/5" />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
                      Descripción
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {exp.description.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
                      Proyectos
                    </h4>
                    <div className="space-y-6">
                      {exp.description.projects.map((project, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-neutral-200 dark:border-white/5 pl-3 sm:pl-4 space-y-4"
                        >
                          {/* Nombre del Proyecto */}
                          <div className="flex items-start gap-3">
                              <div className="w-2 h-2 mt-2 rounded-full bg-gold" />
                            <h5 className="text-sm sm:text-base font-semibold text-void dark:text-white">
                              {project.name}
                            </h5>
                          </div>

                          {/* Descripción en lista */}
                          <ul className="ml-5 space-y-2">
                            {project.description.map((desc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                  {desc}
                                </p>
                              </li>
                            ))}
                          </ul>

                          {/* Tecnologías */}
                          <div className="ml-5">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                                Tecnologías:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, j) => (
                                  <div
                                    key={j}
                                    className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-300 dark:border-white/10 bg-neutral-100 dark:bg-surface hover:-translate-y-1 transition-transform"
                                    title={tech.name}
                                  >
                                    <img
                                      src={tech.icon}
                                      alt={tech.name}
                                      className="w-5 h-5 object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Botón */}
                          {project.hadWebSite && (
                            <div className="ml-5">
                              <a href={project.webSite} target="_blank">
                                <button className="mt-2 inline-flex items-center gap-2 bg-gold text-void py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold hover:bg-gold/90 transition-colors shadow-sm">
                                  <ExternalLink className="w-4 h-4" />
                                  Ver
                                </button>
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};