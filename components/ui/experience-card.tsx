"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import {
  ChevronDown,
  Calendar,
  Briefcase,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { div } from "motion/react-client";

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
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

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
        ease: "easeOut" as const,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
        delay: 0.1,
      },
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
      initial="hidden">
      <motion.div
        variants={cardVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300 mb-6"
      >
        {/* Header - Always visible */}
        <div
          className="p-4 md:p-6 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white truncate">
                  {exp.position}
                </h1>
                {exp.company && (
                  <p className="text-base md:text-lg font-semibold text-blue-600 mb-1 md:mb-2 truncate">
                    {exp.company}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-slate-500 dark:text-neutral-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="truncate">{exp.date}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <motion.div
              variants={chevronVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-2"
            >
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
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
              <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-4">
                {/* Divider */}
                <div className="w-full h-px bg-slate-200 dark:bg-neutral-700"></div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 mb-2 uppercase tracking-wide">
                      Descripción
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
                      {exp.description.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 mb-3 uppercase tracking-wide">
                      Proyectos
                    </h4>
                    <div className="space-y-6">
                      {exp.description.projects.map((project, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-slate-100 dark:border-neutral-700 pl-3 md:pl-4 space-y-3 md:space-y-4"
                        >
                          {/* Project Name */}
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <h5 className="font-semibold text-slate-800 dark:text-white text-sm md:text-base leading-tight">
                              {project.name}
                            </h5>
                          </div>

                          {/* Project Description as List */}
                          <div className="ml-4 md:ml-5 space-y-2">
                            <ul className="space-y-2">
                              {project.description.map((item, descIndex) => (
                                <li
                                  key={descIndex}
                                  className="flex items-start space-x-2 md:space-x-3"
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                                    {item}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="ml-4 md:ml-5">
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                              <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium flex-shrink-0">
                                Tecnologías:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <div
                                    key={techIndex}
                                    className="border border-slate-200 dark:border-neutral-600 rounded-full w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 hover:z-10 bg-white dark:bg-neutral-800"
                                    title={tech.name}
                                  >
                                    <img
                                      src={tech.icon || "/placeholder.svg"}
                                      alt={tech.name}
                                      className="w-5 h-5 object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Project Button */}
                          {project.hadWebSite ? (
                            <a href={project.webSite} target="_blank">
                              <div className="flex justify-start ml-4 md:ml-5">
                                <button className="cursor-pointer inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-lg text-xs md:text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                  <span>Ver Proyecto</span>
                                </button>
                              </div>
                            </a>
                          ) : (
                            <div></div>
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
