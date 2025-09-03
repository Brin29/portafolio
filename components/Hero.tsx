"use client";

import { useTheme } from "next-themes";
import { Spotlight } from "./ui/Spotlight";
import { ThreeDCardDemo } from "./ui/three-d-card-demo";
import { contactClearMode, contactDarkMode } from "@/data";
import { useEffect, useState } from "react";

export const Hero = () => {
  const { theme } = useTheme();

  const spotlightFillColor = theme === "dark" ? "white" : "blue";

  return (
    <section
      className="m-auto relative flex flex-col justify-center items-center w-full min-h-screen px-4 py-16 sm:py-24 md:px-8"
      id="sobre_mi"
    >
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-full"
          fill={spotlightFillColor}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-16">
        {/* 3D Card */}
        <div className="w-full flex justify-center lg:w-1/2">
          <ThreeDCardDemo />
        </div>

        {/* Text Content */}
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-light mb-6">
            Hola, soy <span>Breiner</span>
            <p className="font-normal mt-2">
              <span className="text-blue-400">Desarrollador </span>
              <span className="text-blue-400">Front end </span>
              <span className="hand animate-bounce">👋🏽</span>
            </p>
          </h1>

          <p className="text-black dark:text-white text-lg sm:text-xl lg:text-lg font-extralight my-6">
            Un apasionado del mundo del software y la tecnología, con dos
            solidos años de experiencia en desarrollo con Angular. Experto en
            crear código escalable y bien estructurado, utilizando buenas
            prácticas y documentación clara. Comprometido con la calidad y
            mejora continua.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
            <button className="bg-green-500 px-6 py-2 text-white text-base sm:text-lg rounded-xl shadow-md hover:bg-green-600 transition">
              Disponible para trabajar
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
