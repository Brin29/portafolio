"use client";

import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { ThreeDCardDemo } from "./ui/three-d-card-demo";
import { contactClearMode, contactDarkMode } from "@/data";
import { useTranslation } from "react-i18next";
import { colombia, usa } from "@/assets";
import { useState } from "react";

export const Hero = () => {
  const [t, i18n] = useTranslation("global");
  const { theme } = useTheme();
  const [language, setLanguage] = useState("en");

  const spotlightFillColor = theme === "dark" ? "white" : "blue";

  const handleChangeEs = () => {
    setLanguage("es");
    i18n.changeLanguage("es");
  };

  const handleChangeEn = () => {
    setLanguage("en");
    i18n.changeLanguage("en");
  };

  return (
    <section
      className="m-auto relative flex flex-col justify-center items-center w-full min-h-screen px-4 py-16 sm:py-24 md:px-8"
      id={t("section.sectionOne")}
    >
      <div
        style={{
          zIndex: "10",
          display: "flex",
          gap: "10px",
          position: "absolute",
          top: 30,
          right: 0,
        }}
      >
        <button
          style={{
            backgroundColor: language == "en" ? "#ace0f9" : "",
            cursor: "pointer",
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
            paddingBottom: 12,
          }}
          className={cn(
            "flex justify-center items-center gap-2 text-black dark:text-white text-lg sm:text-xl lg:text-lg font-extralight border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]",
          )}
          onClick={handleChangeEn}
        >
          {" "}
          <img src={usa.src} className="w-5" alt="English" />
          EN
        </button>
        <button
          style={{
             backgroundColor: language == "es" ? "#ace0f9" : "",
            cursor: "pointer",
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
            paddingBottom: 12,
          }}
          className="flex justify-center items-center gap-2 text-black dark:text-white text-lg sm:text-xl lg:text-lg font-extralight border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]"
          onClick={handleChangeEs}
        >
          <img src={colombia.src} className="w-5" alt="English" />
          ES
        </button>
      </div>

      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-full"
          fill={spotlightFillColor}
        />
      </div>

      <div className="mt-20 sm:mt-0 relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-16">
        {/* 3D Card */}
        <div className="w-full flex justify-center lg:w-1/2">
          <ThreeDCardDemo />
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-light mb-6">
            {t("title.title")}
            <p className="font-normal mt-2">
              <span className="text-blue-400">{t("title.function")}{" "}</span>
              <span className="text-blue-400">FrontEnd</span>
              <span className="hand animate-bounce">👋🏽</span>
            </p>
          </h1>

          <p className="text-black dark:text-white text-lg sm:text-xl lg:text-lg font-extralight my-6">
            {t("title.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
            <button className="bg-green-500 px-6 py-2 text-white text-base sm:text-lg rounded-xl shadow-md hover:bg-green-600 transition">
              {t("title.aviableWorked")}
            </button>
          </div>

          <div className="text-black dark:text-white mt-6 text-center lg:text-left">
            <span className="block text-sm sm:text-base">
              breinerstevendev&#64;gmail.com
            </span>
            <div className="flex gap-4 justify-center lg:justify-start mt-2">
              {theme === "dark"
                ? contactDarkMode.map((el, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={el.link}
                      className="w-6 h-6"
                    >
                      <img src={el.icon} alt={el.alt} />
                    </a>
                  ))
                : contactClearMode.map((el, index) => (
                    <a
                      key={index}
                      target="_blank"
                      href={el.link}
                      className="w-6 h-6"
                    >
                      <img src={el.icon} alt={el.alt} />
                    </a>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
