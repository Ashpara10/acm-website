import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TEvent } from "@/lib/types";
import { getDateInSpecifiedFormat } from "@/lib/utils";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  TicketIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const EventPage: FC<TEvent> = (event) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow mt-10 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            {/* Ticket Options */}
            <div className="space-y-6 max-w-sm sticky top-4 w-full">
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>
                        {getDateInSpecifiedFormat(new Date(event?.date))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{event?.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>Medicaps University</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4" />
                      <span>{event?.attending} people attending</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-2">Ticket Options</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">General Admission</h4>
                          <p className="text-sm text-gray-600">
                            Access to all sessions
                          </p>
                        </div>
                        <span className="font-semibold">$199</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">VIP Pass</h4>
                          <p className="text-sm text-gray-600">
                            Includes exclusive workshops
                          </p>
                        </div>
                        <span className="font-semibold">$299</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <TicketIcon className="w-4 h-4 mr-2" />
                    Get Tickets
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* Event Details */}
            <div className="lg:flex-1">
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
                </Carousel>
              ) : (
                <Image
                  src={event?.cover!}
                  alt="Event cover"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <div className="space-y-6 mt-3">
                <h2 className="text-3xl font-semibold">{event?.title}</h2>
                <div
                  className="prose dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: event?.content! }}
                />
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
