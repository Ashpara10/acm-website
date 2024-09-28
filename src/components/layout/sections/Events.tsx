"use client";
import EventCard from "@/components/event-card";
import { TEvent } from "@/lib/types";
import { FC } from "react";

type EventsProps = {
  data: TEvent[];
};

const Events: FC<EventsProps> = ({ data }) => {
  return (
    <section className="container w-full mt-[80px] pb-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Our Amazing Events
        </h2>
      </div>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {data?.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
