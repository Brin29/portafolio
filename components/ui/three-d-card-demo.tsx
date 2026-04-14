"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
<CardContainer className="inter-var">
  <CardBody className="flex items-center justify-center rounded-full w-[310px] h-[310px]  bg-gradient-to-br from-blue-400 via-blue-400 to-blue-400">
    <CardItem translateZ="100" className="w-full flex items-center justify-center">
      <Image
        src="/photo.webp"
        height="1000"
        width="1000"
        className="object-cover w-[300px] h-[300px] md:w-[300px] md:h-[300px] rounded-full"
        alt="thumbnail"
      />
    </CardItem>
  </CardBody>
</CardContainer>

  );
}