"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { useTranslation } from "react-i18next";

export function FloatingNavDemo() {
  const [mounted, setMounted] = useState(false);
  const [t] = useTranslation("global");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative  transition-all duration-200 w-full">
      <FloatingNav navItems={t("navItems", { returnObjects: true }) as any[]} />
    </div>
  );
}
