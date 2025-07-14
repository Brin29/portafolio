// components/ExperienceSection.tsx
"use client";

import { experience } from "@/data";
import { motion, useAnimation } from "framer-motion";
import { div } from "motion/react-client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const ExperienceSection = () => {
  return (
    <section className="rounded-4xl py-12 pt-16 md:mt-40 mt-30 h-auto flex flex-col items-center bg-gray-800 px-4">
      <h2 className="text-4xl font-normal md:text-5xl mb-12 text-white">
        Experiencia
      </h2>

      <div className="space-y-16 w-full max-w-3xl">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            exp={exp}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
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
        ease: "easeOut" as const, // ✅ <- esto soluciona el error
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
      className="bg-gray-600 shadow-md p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold">{exp.title}</h3>
      <p className="text-white font-normal md:text-2xl text-xl">
        {exp.position} · {exp.date}
      </p>
      <p className="mt-4 text-white font-extralight md:text-xl text-lg">
        {exp.description.details}
      </p>

      <div>
        {projects.map((content, index) => (
          <div>
            <h4 key={index}>{content.name}</h4>
            <p>{content.description}</p>
            <div className="mt-4 flex items-center justify-center">
              {content.technologies.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:-translate-y-3"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon.name} alt="icon5" className="p-2" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
