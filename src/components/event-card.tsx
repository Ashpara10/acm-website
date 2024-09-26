import { TEvent } from "@/lib/types";
import { motion, Variants } from "framer-motion";
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

const MotionCardContent = motion(CardContent);
const eventCardVariants: Variants = {
  expand: {
    y: -100,
    borderRadius: 20,
  },
  retract: {
    y: 0,
  },
};

const EventCard: FC<TEvent> = ({ title, poster, date, id, time, about }) => {
  return (
    <Card className="relative bg-white dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
      <CardHeader className="p-0 gap-0">
        <div className="h-full max-h-[200px] overflow-hidden w-full">
          <Image
            src={poster}
            alt=""
            className="aspect-square w-full"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-3 bg-inherit ">
        <CardTitle className="text-2xl font-medium">{title}</CardTitle>

        <CardDescription className="mt-2">
          <p className="line-clamp-3">{about}</p>
        </CardDescription>
        <Link href={`/events/${id}`}>
          <Button className="w-full mt-3">
            View Event <ChevronRight className="size-5 ml-2 opacity-80" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
export default EventCard;
