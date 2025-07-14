import { Spotlight } from "./ui/Spotlight";
import { ThreeDCardDemo } from "./ui/three-d-card-demo";

export const Hero = () => {
  return (
    <section
      className="flex justify-center items-center w-full h-[100vh]"
      id="dashboard"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>
      <div className="w-4/5 h-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-around gap-10">
        <div className="flex justify-center">
          <ThreeDCardDemo />
        </div>
        <div className="md:mt-20 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white text-4xl font-light md:text-5xl mb-6">
            Hola, soy <span> Breiner</span>
            <p className=" font-normal">
              <span className="text-blue-400">Desarrollador </span>
              <span className="text-blue-400">Front </span>
              <span className="text-blue-400">End </span>
              <span className="hand animate-bounce"> 👋🏽</span>
            </p>
          </h1>

          <p className="text-white w-full mb-7 font-extralight md:text-xl text-lg">
            Un apasionado del mundo del software y la tecnologia, con dos
            solidos años de experiencia en el desarrollo con React, experto en
            crear codigo escalable y bien estructurado, procurando utilizar
            buenas practicas y documentación clara. Comprometido con la calidad
            y la mejora continua en cada proyecto que emprendo.
          </p>

          <div className="flex w-full gap-3 justify-center lg:justify-start">
            <button className="bg-green-500 px-10 font-semibold text-lg p-2 rounded-4xl ">
              Disponible para trabajar
            </button>
          </div>

          <div className="text-white flex flex-col gap-2 mt-4">
            <span className="text-sm sm:text-base">
              breinerstevendev&#64;gmail.com
            </span>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="w-7 rounded-4xl">
                <a target="_blank" href="mailto:breinerstevendev@gmail.com"></a>
              </button>

              <button className="w-7 rounded-4xl">
                <a target="_blank" href="https://github.com/Brin29"></a>
              </button>

              <button className="w-7 rounded-4xl">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/breiner-stiven-parra-cort%C3%A9s-5b0518273/"
                ></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
