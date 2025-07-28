"use client";

import { experience, experienceFreelancer } from "@/data";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./experience";
import ExperienceCardFreelancer from "./experienceFre";

interface TimelineEntry {
  date: string;
  position: string;
  description: Object;
}

export const Timeline = ({ data }: { data?: TimelineEntry[] }) => {
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
      className="flex w-full bg-white dark:bg-neutral-950 font-sans px-4 md:px-6 lg:px-10"
      ref={containerRef}
    >
      <div
        ref={ref}
        className="min-h-screen w-full relative max-w-7xl mx-auto pb-20"
      >
        <div className="relative">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              direction={"right"}
            />
          ))}

          {experienceFreelancer.map((exp, index) => (
            <ExperienceCardFreelancer
              key={exp.id}
              exp={exp}
              direction={"left"}
            />
          ))}
        </div>

        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};