import EventPage from "@/components/event-page";
import { events } from "@/lib/seed";
import { notFound } from "next/navigation";
import React, { FC } from "react";

type Props = {
  params: { id: string };
};

const Page: FC<Props> = ({ params }) => {
  const getEventById = (id: string) => {
    return events.find((event) => event.id === parseInt(id));
  };
  const event = getEventById(params?.id);
  if (!event) {
    return notFound();
  }
  return <EventPage {...event} />;
};

export default Page;
