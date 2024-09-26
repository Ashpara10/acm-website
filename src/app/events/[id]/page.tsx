import EventPage from "@/components/event-page";
import { postsDirectory } from "@/lib/utils";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";
import React, { FC } from "react";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";
import { TEvent } from "@/lib/types";

type Props = {
  params: { id: string };
};

export async function getPostData(name: string) {
  const fullPath = path.join(postsDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    content: contentHtml,
    ...matterResult.data,
  } as TEvent;
}

const Page: FC<Props> = async ({ params }) => {
  const event = await getPostData(params?.id);
  if (!event) {
    return notFound();
  }
  return <EventPage {...event} />;
};

export default Page;
