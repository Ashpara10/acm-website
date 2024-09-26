import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TEvent } from "@/lib/types";
import { getDateInSpecifiedFormat } from "@/lib/utils";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const EventPage: FC<TEvent> = (event) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow mt-10 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ticket Options */}
            <div className="space-y-6 max-w-sm">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Event Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm"></CardContent>
              </Card>
            </div>
            {/* Event Details */}
            <div className="lg:col-span-2">
              {event?.images ? (
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {event?.images?.map((image, index) => {
                      return (
                        <CarouselItem key={index} className="basis-1/2">
                          <Image
                            src={image}
                            alt="Event cover"
                            width={400}
                            height={400}
                            className="  object-fill rounded-lg"
                          />
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  {/* <CarouselNext />
                  <CarouselPrevious className="translate-x-12" /> */}
                </Carousel>
              ) : (
                <Image
                  src={event?.poster!}
                  alt="Event cover"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <div className="space-y-6 mt-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="size-5" />
                    <span>
                      {getDateInSpecifiedFormat(new Date(event?.date))}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="size-5" />
                    <span> {event?.time} PDT</span>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold">{event?.title}</h2>
                <p className="opacity-85">{event?.about}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default EventPage;
