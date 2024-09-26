"use client";
import EventCard from "@/components/event-card";
import { events } from "@/lib/seed";

const Events = () => {
  return (
    <section className="container w-full mt-[80px] pb-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Our Amazing Events
        </h2>
      </div>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {events?.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
