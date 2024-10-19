import Events from "@/components/layout/sections/Events";
import { getSortedPostsData } from "@/lib/utils";
import React, { FC } from "react";

type PageProps = object;

const Page: FC<PageProps> = ({}) => {
  const data = getSortedPostsData();
  return (
    <>
      <Events data={data} />
    </>
  );
};

export default Page;
