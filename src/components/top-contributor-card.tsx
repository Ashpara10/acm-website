import Image from "next/image";
import Link from "next/link";
import { TContributor } from "./layout/sections/TopContributors";
import { Card, CardContent } from "./ui/card";

const TopContributorCard = ({ contributor }: { contributor: TContributor }) => {
  return (
    <Card className="w-full p-0 relative hover:scale-[1.02] border-neutral-300 dark:bg-card hover:drop-shadow-xl bg-neutral-100  transition-all delay-75">
      <CardContent className="px-3  py-3 flex items-center justify-center">
        <div>
          <Image
            src={contributor?.avatar_url}
            width={60}
            height={60}
            className="aspect-square rounded-lg border border-neutral-300 dark:border-none"
            alt={`${contributor?.login}-avatar`}
          />
        </div>
        <div className="w-full flex ml-2 items-start justify-center flex-col">
          <Link href={contributor?.html_url} target="_blank">
            <span className="text-lg font-medium tracking-tight leading-none">
              {contributor?.login}
            </span>
          </Link>
          <span className="text-sm  leading-none opacity-80">
            {contributor?.contributions} Contributions
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopContributorCard;
