import Events from "@/components/layout/sections/events";
import { FooterSection } from "@/components/layout/sections/footer";
import { getSortedPostsData } from "@/lib/utils";
import React, { FC } from "react";

type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  const data = getSortedPostsData();
  return (
    <>
      <Events data={data} />
      <FooterSection />
    </>
  );
};

export default Page;
