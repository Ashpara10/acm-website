"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export const TextHoverEffectSection = () => {
  return (
    <section className="my-16 text-primary text-center px-40">
        <TextHoverEffect text="MU-ACM" duration={0.5} />
    </section>
  );
};