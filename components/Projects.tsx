import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const Projects = () => {
  return (
    <div id="proyectos" className="py-20 ">
      <h2 className="text-center text-black dark:text-white text-4xl font-light md:text-5xl mb-6">
        Mis mejores{" "}
        <span className="text-blue-400 font-normal">Proyectos personales</span>
      </h2>
      <p className="m-auto text-center text-black dark:text-white w-[70%] font-extralight md:text-xl text-lg">
        Explora la sección de mis proyectos personales, donde he aplicado mis
        conocimientos en desarrollo web, backend y nuevas
        tecnologías. Cada proyecto representa un reto resuelto con código
        limpio, escalable y funcional, reflejando mi evolución como
        desarrollador y mi pasión por crear soluciones innovadoras.
      </p>
      <div
        className="flex flex-wrap justify-evenly p-4 md:gap-30 gap-50 mt-24 md:mt-10"
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="gap-2 flex items-center flex-col justify-center sm:w-96 w-[80vw] overflow-hidden mb-10">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-800 dark:text-slate-100">
                  {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-700 dark:text-slate-500 ">{des}</span>
                </div>
                <img
                  src={img}
                  alt={title}
                  className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                />

                <div className="mt-4 flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-slate-400 dark:border-neutral-600 rounded-full w-9 h-9 flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 hover:z-10 bg-slate-200 dark:bg-neutral-800"
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
