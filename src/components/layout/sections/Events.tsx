"use client";
import EventCard from "@/components/event-card";
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
    <section className="container w-full mt-[80px] pb-24">
      <div className="text-center mb-8">
        {pathname && pathname === "/" ? (
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Upcoming & Latest Events
          </h2>
        ) : null}
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {pathname === "/" ? "Our Amazing Events" : "Our Amazing Events"}
        </h2>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {pathname === "/"
          ? latestEventsData?.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          : data?.map((event) => <EventCard key={event.id} {...event} />)}
      </div>
    </section>
    {pathname === "/" && (
        <div className="text-center mt-4 hover:text-primary group">
          <a
            href="/events"
            className="text-lg text-primary block text-center -mt-20 tracking-wider"
          >
            All Events{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              {" "}
              &rarr;
            </span>
          </a>
        </div>
      )}
    </>
  );
};

export default Events;
