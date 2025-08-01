"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";

export function FloatingNavDemo() {
  return (
    <div className="relative  transition-all duration-200 w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}