import { TEvent } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const EventCard: FC<TEvent> = ({ title, cover, description, id, status }) => {
  // Utility function to get the classes for event status badges
  const getStatusClasses = (status: TEvent["status"]) => {
    const baseClasses =
      "absolute w-fit top-3 right-3 z-10 px-4 py-0.5 border rounded-lg";

    switch (status) {
      case "COMPLETED":
        return `${baseClasses} bg-green-500 hover:bg-green-500 border-green-700`;
      case "UPCOMING":
        return `${baseClasses} bg-blue-500 hover:bg-blue-500 border-blue-700 animate-pulse`;
      case "LIVE":
        return `${baseClasses} bg-red-500 hover:bg-red-500 border-red-700 animate-pulse`;
      case "CANCELLED":
        return `${baseClasses} bg-gray-500 hover:bg-gray-500 border-gray-700`;
      default:
        return "hidden";
    }
  };

  return (
    <Card className="relative bg-white dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
      {status && (
        <Badge className={getStatusClasses(status)}>
          <p className="tracking-wider">{status}</p>
        </Badge>
      )}

      <CardHeader className="p-0 gap-0">
        <div className="h-full max-h-[200px] overflow-hidden w-full">
          <Image
            src={cover}
            alt="Event cover image"
            className="aspect-square w-full grayscale hover:grayscale-0 ease-in-out duration-300"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-3 bg-inherit h-full flex flex-col">
        <div className="flex-grow">
          <CardTitle className="text-2xl font-medium line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {description}
          </CardDescription>
        </div>
        <Link href={`/events/${id}`} className="mt-auto">
          <Button className="w-full mt-3">
            View Event <ChevronRight className="size-5 ml-2 opacity-80" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EventCard;
