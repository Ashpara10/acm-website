import Events from "@/components/layout/sections/events";
import { FooterSection } from "@/components/layout/sections/footer";
import React, { FC } from "react";

type PageProps = {};

const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <Events />
      <FooterSection />
    </>
  );
};

export default Page;
