import { type ClassValue, clsx } from "clsx";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { twMerge } from "tailwind-merge";
import { TeamsProps, TEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GITHUB_ACCESS_TOKEN =
  process?.env?.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export function getDayOfWeek(date: Date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}

export function getDateInSpecifiedFormat(date: Date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options as object).format(date);
}

export const postsDirectory = path.join(process.cwd(), "src/data/events");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as TEvent;
  });
  // Sort posts by date
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Function to read and parse the team markdown file
export const getTeamDataByDivision = (): TeamsProps => {
  const executiveTeamDataDir = path.join(
    process.cwd(),
    "src/data/team/ExecutiveTeam.data.md"
  );
  const fileContent = fs.readFileSync(executiveTeamDataDir, "utf8");

  // Use gray-matter to parse the front matter
  const { data } = matter(fileContent) as unknown as { data: TeamsProps };

  // Return the parsed team data by division
  return data;
};

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
