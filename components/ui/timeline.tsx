"use client";

import { useAnimation, AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Star,
  Calendar,
  Briefcase,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";

interface TimelineEntry {
  date: string;
  position: string;
  description: Object;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="flex w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div
        ref={ref}
        className="h-[100vh] w-full relative max-w-7xl mx-auto pb-20"
      >
        <div>
          <ExperienceCard exp={"Hello World"} direction="left" />
        </div>
        {/*
        <div>
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
      */}

        <div
          style={{
            height: height + "px",
          }}
          className="m-auto overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className=" inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  exp,
  direction,
}: {
  exp: any;
  direction: "left" | "right";
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [isExpanded, setIsExpanded] = useState(false);

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
      className="w-[45%] top-10 right-6 absolute shadow-md p-6 rounded-xl"
    >
      <motion.div
        variants={cardVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        className="w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300"
      >
        {/* Header - Always visible */}
        <div
          className="p-6 cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  Junior Full Stack
                </h1>
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  Tecnoparque
                </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Colombia</span>
                </div>
              </div>
              </div>
            </div>
            <motion.div
              variants={chevronVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.2 }}
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
              <div className="px-6 pb-6 space-y-4">
                {/* Divider */}
                <div className="w-full h-px bg-slate-200"></div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Este es un proyecto innovador que combina tecnología moderna
                    con diseño elegante. Desarrollado con las mejores prácticas
                    y herramientas de vanguardia.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>Enero 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Users className="w-4 h-4 text-green-500" />
                      <span>5 colaboradores</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>Madrid, España</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.9/5 rating</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-2">
                      Tecnologías utilizadas:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium text-sm hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver Proyecto</span>
                    </button>
                    <button className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors duration-200">
                      Contactar
                    </button>
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
