import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-t from-[#1e1f29] to-[#27187E] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 gap-2">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
