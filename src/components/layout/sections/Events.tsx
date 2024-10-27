"use client";
import EventCard from "@/components/event-card";
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
        <RedirectPageBtn href="/events" text="View All Events" />
      )}
    </>
  );
};

export default Events;
