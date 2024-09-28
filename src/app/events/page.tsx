import Events from "@/components/layout/sections/Events";
import { FooterSection } from "@/components/layout/sections/Footer";
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
