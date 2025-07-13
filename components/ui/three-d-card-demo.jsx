"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="rounded-full h-[320px] w-[320px] bg-amber-50">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/photo.webp"
            height="1000"
            width="1000"
            className="object-cover w-[300px] h-[300px] rounded-full"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}