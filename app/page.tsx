"use client";
import { Contact } from "@/components/Contact";
import { FloatingNavDemo } from "@/components/floating-nav-demo";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/skills";
import { ExperienceCard } from "@/components/ui/experience-card";
import { Timeline } from "@/components/ui/timeline";
import { experience, experienceFreelancer } from "@/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const timelineData = [
    {
      title: experience[0].date,
      content: <ExperienceCard exp={experience[0]} direction="left" />,
    },
    {
      title: experience[1].date,
      content: (
        <ExperienceCard exp={experience[1]} direction="right" />
      ),
    },
    {
      title: experienceFreelancer[0].date,
      content: (
        <ExperienceCard exp={experienceFreelancer[0]} direction="left" />
      ),
    },
  ];

  return (
    <main className="bg-gradient-to-t from-[#ace0f9] to-[#d6d5d3] dark:from-[#27187E] dark:to-[#040f16] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-2">
      <div className="max-w-7xl w-full">
        <FloatingNavDemo />
        <Hero />
        <Timeline data={timelineData} />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
