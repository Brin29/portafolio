"use client";
import React, { useEffect, useState } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";

export function FloatingNavDemo() {
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative  transition-all duration-200 w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}