"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BlurFade } from "@/components/ui/BlurFade";

export const TextHoverEffectSection = () => {
  return (
    <section className="my-16 text-primary text-center px-40">
      <BlurFade delay={0.25} inView>
        <TextHoverEffect text="MU-ACM" duration={0.5} />
      </BlurFade>
    </section>
  );
};
