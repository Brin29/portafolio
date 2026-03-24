"use client";
import { Contact } from "@/components/Contact";
import { FloatingNavDemo } from "@/components/floating-nav-demo";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/skills";
import { ExperienceCard } from "@/components/ui/experience-card";
import { Timeline } from "@/components/ui/timeline";
import { experience, experienceFreelancer } from "@/data";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";
import EntranceAnimation from "./entrance-animation";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export default function Home() {
  const [t] = useTranslation("global");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-gradient-to-t from-[#ace0f9] to-[#d6d5d3] dark:from-[#27187E] dark:to-[#040f16] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-2">
      <div className="max-w-7xl w-full">
        <I18nextProvider i18n={i18next}>
          <EntranceAnimation/>
          <FloatingNavDemo />
          <Hero />
          <Timeline />
          <Projects />
          <Skills />
          <Contact />
        </I18nextProvider>
      </div>
    </main>
  );
}
