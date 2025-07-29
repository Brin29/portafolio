import { Contact } from "@/components/Contact";
import { ExperienceSection } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ExperienceCard } from "@/components/ui/experience-card";
import { Timeline } from "@/components/ui/timeline";
import { experience, experienceFreelancer } from "@/data";

export default function Home() {

    const timelineData = [
    {
      title: experience[0].date,
      content: <ExperienceCard exp={experience[0]} direction="left"/>,
    },
    {
      title: experienceFreelancer[0].date,
      content: <ExperienceCard exp={experienceFreelancer[0]} direction="right"/>,
    },
  ]

  return (
    <main className="bg-gradient-to-t from-[#27187E] to-[#040f16] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-2">
      <div className="max-w-7xl w-full">
        <Hero/>
        <ExperienceSection/>
        <Projects/>
        <Timeline data={timelineData}/>
        <Contact/>
      </div>
    </main>
  );
}