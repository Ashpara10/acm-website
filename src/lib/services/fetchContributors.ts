import axios, { AxiosResponse } from "axios";
import { ContributorProps } from "@/lib/types";
import { GITHUB_ACCESS_TOKEN } from "@/lib/utils";

const GITHUB_API_URL = `https://api.github.com/repos/Ashpara10/acm-website/contributors`;

export const fetchContributors = async (): Promise<
  ContributorProps[] | null
> => {
  try {
    const response: AxiosResponse = await axios.get<ContributorProps[]>(
      GITHUB_API_URL,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
    return null;
  }
};
