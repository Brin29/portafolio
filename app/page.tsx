import { Contact } from "@/components/Contact";
import { ExperienceSection } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-[#27187E] to-[#040f16] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-2">
      <div className="max-w-7xl w-full">
        <Hero/>
        <ExperienceSection/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}