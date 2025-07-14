import { Spotlight } from "./ui/Spotlight";
import { ThreeDCardDemo } from "./ui/three-d-card-demo";

export const Hero = () => {
  return (
    <section
      className="flex justify-center pt-10 w-full h-[100vh]"
      id="dashboard"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>
      <div className="w-4/5 h-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-around gap-10">
        <div className=" flex justify-center">
          <ThreeDCardDemo />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-purple-dark text-purple-semi-clean text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            Hi, I'm <span> Breiner</span>
            <p className="text-white font-normal">
              Full-Stack Developer{" "}
              <span className="hand animate-bounce">👋🏽</span>
            </p>
          </h1>

          <p className="text-white w-full mb-7 font-extralight">
            A passionate about technology and software development, with
            experience building web applications using Spring Boot and Angular.
            Skilled in developing REST APIs, integrating SQL databases, and
            implementing secure authentication and authorization with JWT and
            OAuth2.
          </p>

          <div className="flex w-full gap-3 justify-center lg:justify-start">
            <button className="bg-green px-10 font-extralight text-lg p-2 rounded-4xl ">
              Available for work
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
