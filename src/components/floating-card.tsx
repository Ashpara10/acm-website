import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

type FloatingCardProps = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  stars?: number;
};

const FloatingCards: FC<FloatingCardProps> = ({
  className,
  description,
  image,
  stars,
  title,
}) => {
  return (
    <div
      className={cn(
        "max-w-xs w-full min-h-[120px] px-3 pb-2 pt-3 bg-white rounded-2xl",
        className!
      )}
    >
      <div className=" w-full flex items-center justify-center">
        <div>
          <Image
            src={image!}
            alt={`event-image-${title}`}
            className="rounded-full aspect-square border bg-gray-200 border-gray-200"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <h3 className="font-[540] tracking-tight leading-tight  ">{title}</h3>
          {/* <p>{description}</p> */}
          <div className="flex items-center justify-center gap-x-1">
            {Array.from({ length: stars! }).map((_, i) => {
              return (
                <Star
                  className="fill-yellow-400 size-5 stroke-transparent"
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <p className="leading-tight line-clamp-2 text-sm px-2 mt-2 opacity-85">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FloatingCards;
