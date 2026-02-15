import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { useTranslation } from "react-i18next";
import {
  detector,
  petsName,
  urlShorten,
  webSocket,
  vue,
  n8n,
  django,
  mysql,
  git,
  github,
  postman,
  python,
  matbloptlip,
  roboflow,
  ultratycs,
  colab,
  springboot,
  angular,
  tailwind,
  redis,
} from "@/assets";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icons: string[];
  link: string;
}

export const Projects = () => {
  const [t] = useTranslation("global");

  const projects = t("projects.project", {
    returnObjects: true,
  }) as Project[];

  const iconMap: Record<string, any> = {
    detector,
    petsName,
    urlShorten,
    webSocket,
    python,
    roboflow,
    ultralytics: ultratycs,
    colab,
    matplotlib: matbloptlip,
    springboot,
    angular,
    tailwind,
    redis,
    git,
    github,
    postman,
    django,
    vue,
    n8n,
    mysql,
  };

  return (
    <div id={t("section.sectionThree")} className="py-20">
      <h2 className="text-center mb-5 text-3xl font-bold tracking-tighter sm:text-5xl">
        <div
          dangerouslySetInnerHTML={{
            __html: t("projects.title"),
          }}
        />
      </h2>
      <p className="m-auto text-center text-black dark:text-white w-[70%] font-extralight md:text-xl text-lg">
        {t("projects.subtitle")}
      </p>
      <div className="flex flex-wrap justify-evenly p-4 md:gap-30 gap-50 mt-24 md:mt-10">
        {projects.map(({ id, title, description, image, icons, link }) => (
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
                  <span className="text-slate-700 dark:text-slate-500 ">
                    {description}
                  </span>
                </div>
                              <Image
                        src={iconMap[image] || "/placeholder.svg"}
                        alt="icon5"
                        width={550}
                        height={550}
                         className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                      />
                {/* <img
                  src={image}
                  alt={title}
                  className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                /> */}

                <div className="mt-4 flex items-center">
                  {icons.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-slate-400 dark:border-neutral-600 rounded-full w-9 h-9 flex justify-center items-center transition-transform duration-300 hover:-translate-y-1 hover:z-10 bg-slate-200 dark:bg-neutral-800"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={iconMap[icon] || "/placeholder.svg"}
                        alt="icon5"
                        width={20}
                        height={20}
                         className="object-contain"
                      />
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
