"use client";

import { experience } from "@/data";
import { useAnimation } from "framer-motion";
import { div } from "motion/react-client";
import { useInView } from "react-intersection-observer";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

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
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="h-[100vh] relative max-w-7xl mx-auto pb-20">
        <div className="w-[100%] pt-20 sticky flex flex-col justify-around md:flex-row z-40 items-center top-40 self-start">

          <div>
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]  flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] border border-blue-500 p-2" />
            </div>
            <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
              Hola Mundo
            </h3>
          </div>

          <div>
            <div>
              <ExperienceCard
                key={experience[0].id}
                exp={experience[0]}
                direction={0 % 2 === 0 ? "left" : "right"}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  const projects = exp.description.projects;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gray-600 shadow-md p-6 w-[400px] rounded-xl"
    >
      <div>
        <h3>{exp.date}</h3>
        <h4>{exp.position}</h4>
        <p>{exp.description.details}</p>
      </div>
    </motion.div>
  );
};
