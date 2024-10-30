"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Crown",
    name: "Fastn Roadshow",
  },
  {
    icon: "Vegan",
    name: "AINovate",
  },
  {
    icon: "Ghost",
    name: "Technical Tambola ",
  },
  {
    icon: "Puzzle",
    name: "Conquering Canva",
  },
  {
    icon: "Squirrel",
    name: "Video Editing Workshop",
  },
  {
    icon: "Cookie",
    name: "Hands on Javascript",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <BlurFade delay={0.20} inView>
        <h2 className="text-lg md:text-3xl text-center mb-6 font-bold">
          Our Past Events
        </h2>
      </BlurFade>
      <div className="mx-auto">
        <BlurFade delay={0.25 * 2} inView>
          <Marquee
            className="gap-[3rem]"
            fade
            innerClassName="gap-[3rem]"
            pauseOnHover
          >
            {sponsors.map(({ name }) => (
              <div
                key={name}
                className="flex items-center text-xl md:text-2xl font-medium"
              >
                {/* <Icon
                  name={icon as keyof typeof icons}
                  size={32}
                  color="white"
                  className="mr-2"
                /> */}
                {name}
              </div>
            ))}
          </Marquee>
        </BlurFade>
      </div>
    </section>
  );
};
