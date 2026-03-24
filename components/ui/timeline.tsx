"use client";

import { useScroll, useTransform, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExperienceCard } from "./experience-card";

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
  title: string;
  company?: string;
  location?: string;
  description: {
    details: string;
    projects: Project[];
  };
}

export const Timeline = () => {
  const { t } = useTranslation("global");

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 🔎 Obtener traducciones
  const timelineTranslations = t("experiences", {
    returnObjects: true,
  });

  const timelineTranslationsFreelancer = t("experienceFreelancer", {
    returnObjects: true,
  });

  const timelineArrayFreelancer: ExperienceItem[] = Array.isArray(
    timelineTranslationsFreelancer,
  )
    ? timelineTranslationsFreelancer
    : [];

  const timelineArray: ExperienceItem[] = Array.isArray(timelineTranslations)
    ? timelineTranslations
    : [];

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 10%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="pt-40 md:pt-20" id={t("section.sectionTwo")}>
       <h2 className="text-center mb-5 text-3xl font-bold tracking-tighter sm:text-5xl">
        <div
          dangerouslySetInnerHTML={{
            __html: t("experienceTitle.title"),
          }}
        />
      </h2>

      <p className="m-auto text-center text-black dark:text-white w-[70%] mb-7 font-extralight md:text-xl text-lg">
        {t("experienceTitle.subtitle")}
      </p>

      <div
        className="py-10 w-full rounded-3xl font-sans md:px-10"
        ref={containerRef}
      >
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {timelineArray.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-400 p-2" />
                </div>

                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black dark:text-white">
                  {item.date}
                </h3>
              </div>

              {/* Contenido */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-800 dark:text-neutral-500">
                  {item.date}
                </h3>

                <ExperienceCard
                  exp={item}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            </div>
          ))}

          {timelineArrayFreelancer.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-400 p-2" />
                </div>

                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black dark:text-white">
                  {item.date}
                </h3>
              </div>

              {/* Contenido */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-800 dark:text-neutral-500">
                  {item.date}
                </h3>

                <ExperienceCard
                  exp={item}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            </div>
          ))}

          <div
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-200 dark:via-neutral-700
            to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px]
              bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
              rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
