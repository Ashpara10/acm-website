"use client";
import TopContributorCard from "@/components/top-contributor-card";
import { delay, GITHUB_ACCESS_TOKEN } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type TContributor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  contributions: number;
};

const TopContributors = () => {
  const [topContributors, setTopContributors] = useState<TContributor[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await delay(1200);
      const res = await fetch(
        `https://api.github.com/repos/Ashpara10/acm-website/contributors`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
            "X-GitHub-Api-Version": " 2022-11-28",
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setTopContributors(data);
    })();
  }, []);
  return (
    <section className=" w-full  flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Top Contributors
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold max-w-md">
          Top Contributors on Github
        </h2>
      </div>

      <motion.div className="w-full md:px-0 px-3 grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-3">
        {isLoading
          ? [...Array(8)].map((_, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-[80px] animate-pulse rounded-lg bg-neutral-200 dark:bg-card"
                />
              );
            })
          : topContributors!?.slice(0, 8).map((c) => {
              return <TopContributorCard key={c?.id} contributor={c} />;
            })}
      </motion.div>
    </section>
  );
};

export default TopContributors;
