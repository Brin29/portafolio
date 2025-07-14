"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  label: "Proyecto" | "Educación";
  date: string;
  content: React.ReactNode;
  color: string; // color del punto: ejemplo '#22c55e' (verde), '#3b82f6' (azul)
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto py-10 px-4 md:px-8">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-neutral-200"
          style={{ height }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#22c55e] via-[#3b82f6] to-transparent rounded-full"
          />
        </div>

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:justify-between py-10"
            >
              {/* Lado izquierdo */}
              <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:order-2 md:pl-8"}`}>
                <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-100">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.label === "Proyecto"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-neutral-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-neutral-800 font-semibold text-lg">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-neutral-500 mb-2">
                      {item.subtitle}
                    </p>
                  )}
                  <div className="text-neutral-600 text-sm">{item.content}</div>
                </div>
              </div>

              {/* Punto en la línea */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div
                  className="h-5 w-5 rounded-full border-4 bg-white"
                  style={{ borderColor: item.color }}
                />
              </div>

              {/* Espacio invisible en móvil para separar los items */}
              <div className="md:hidden h-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
