"use client";
import EventCard from "@/components/event-card";
import { BlurFade } from "@/components/ui/BlurFade";
import RedirectPageBtn from "@/components/ui/RedirectPageBtn";
import { TEvent } from "@/lib/types";
import { usePathname } from "next/navigation";
import { FC } from "react";

type EventsProps = {
  data: TEvent[];
};

const Events: FC<EventsProps> = ({ data }) => {
  const pathname = usePathname();
  const latestEventsData = data?.slice(0, 3);
  return (
    <>
      <section className="container w-full mt-[80px]">
        <div className="text-center mb-8">
          {pathname && pathname === "/" ? (
            <BlurFade delay={0.25} inView>
              <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Upcoming & Latest Events
              </h2>
            </BlurFade>
          ) : null}
          <BlurFade delay={0.25 * 2} inView>
            <h2 className="text-3xl md:text-4xl text-center font-bold">
              {pathname === "/" ? "Our Amazing Events" : "Our Amazing Events"}
            </h2>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 3} inView>
          <div className="w-full flex items-center justify-center">
            <div className="grid max-w-6xl w-full  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
              {pathname === "/"
                ? latestEventsData?.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))
                : data?.map((event) => <EventCard key={event.id} {...event} />)}
            </div>
          </div>
        </BlurFade>
      </section>
      {pathname === "/" && (
        <BlurFade delay={0.25} inView>
          <RedirectPageBtn href="/events" text="View All Events" />
        </BlurFade>
      )}
    </>
  );
};

export default Events;
