"use client";
import { ContributorProps } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent } from "../../../ui/card";

const ContributorCard = ({
  contributor,
}: {
  contributor: ContributorProps;
}) => {
  return (
    <Card
      onClick={() => window.open(contributor?.html_url, "_blank")}
      className="w-full bg-muted/60 dark:bg-card transition-transform duration-1000 overflow-hidden group cursor-pointer"
    >
      <CardContent className="px-3 py-3 flex items-center justify-center">
        <div className="overflow-hidden rounded-md">
          <Image
            src={contributor?.avatar_url}
            width={70}
            height={70}
            className="aspect-square ease-in-out duration-300 group-hover:scale-110"
            alt={`${contributor?.login}-avatar`}
          />
        </div>
        <div className="w-full flex ml-3 items-start justify-center flex-col gap-1.5">
          <h2 className="text-xl font-medium tracking-tight leading-tight">
            {contributor?.login}
          </h2>
          <p className="text-sm leading-tight opacity-80">
            {contributor?.contributions}{" "}
            {contributor?.contributions < 2 ? "Contribution" : "Contributions"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributorCard;
