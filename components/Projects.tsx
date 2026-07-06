import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const Projects = () => {
  return (
    <div id="proyectos" className="py-20 ">
      <h2 className="text-center text-void dark:text-white text-4xl md:text-5xl font-display font-bold mb-4">
        Mis{" "}
        <span className="text-gold">proyectos</span>
      </h2>
      <p className="m-auto text-center text-neutral-600 dark:text-neutral-400 w-[70%] md:text-lg text-base leading-relaxed">
        Proyectos personales donde aplico tecnologías modernas para resolver problemas reales.
      </p>
      <div
        className="flex flex-wrap justify-evenly p-4 md:gap-16 gap-20 mt-16 md:mt-12"
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="mb-30 md:mb-20 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="gap-3 flex items-center flex-col justify-center sm:w-96 w-[80vw] overflow-hidden mb-10">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-void dark:text-white">
                  {title}
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{des}</span>
                </div>
                <img
                  src={img}
                  alt={title}
                  className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/5"
                />

                <div className="mt-4 flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-neutral-300 dark:border-white/10 rounded-full w-9 h-9 flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 hover:z-10 bg-neutral-100 dark:bg-surface"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
