"use client";
import TopContributorCard from "@/components/layout/sections/ContributorsSection/TopContributorCard";
import RedirectPageBtn from "@/components/ui/RedirectPageBtn";
import { fetchContributors } from "@/lib/services/fetchContributors";
import { ContributorProps } from "@/lib/types";
import { delay } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ContributorsSectionProps {
  limit?: number;
}

const ContributorsSection = ({ limit }: ContributorsSectionProps) => {
  const [contributorsData, setContributorsData] = useState<
    ContributorProps[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    const loadContributorsData = async () => {
      await delay(1200);
      const data = await fetchContributors();
      setContributorsData(data);
      setIsLoading(false);
    };
    loadContributorsData();
  }, []);

  return (
    <>
      <section
        className={`container w-full flex flex-col items-center justify-center ${
          pathname === "/contributors" ? "py-16" : "py-0"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Developers
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            The Creators Of This Realm
          </h2>
        </div>
        <div className="w-full md:px-0 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {isLoading
            ? [...Array(limit || 8)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="w-full h-[82px] animate-pulse rounded-lg bg-neutral-200 dark:bg-card"
                  />
                );
              })
            : contributorsData?.slice(0, limit).map((c) => {
                return <TopContributorCard key={c?.id} contributor={c} />;
              })}
        </div>
      </section>
      {pathname === "/" && (
        <RedirectPageBtn href="/contributors" text="View All Contributors" />
      )}
    </>
  );
};

export default ContributorsSection;
