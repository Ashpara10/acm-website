"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/BlurFade";
import Image from "next/image";

export const HeroSection = () => {
  //const { theme } = useTheme();
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <BackgroundBeams />

      <div className="relative z-10 grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 min-h-screen">
        <div className="text-center space-y-8">
          <BlurFade delay={0.25} inView>
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>New Event</Badge>
              </span>
              <span> Coming Soon! </span>
            </Badge>
          </BlurFade>
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <BlurFade delay={0.25} inView>
              <h1>
                Technical Community of
                <span className="text-transparent px-2 bg-gradient-to-r from-[#47c2d2] to-primary bg-clip-text">
                  Students
                </span>
              </h1>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 2} inView>
            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {`We're more than just a club, we're a community of tech
            enthusiasts. Get access to our exclusive Events and Workshops.`}
            </p>
          </BlurFade>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <BlurFade delay={0.25 * 3} inView>
            <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
              src={"/banner1.webp"}
              alt="dashboard"
            />
          </BlurFade>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
