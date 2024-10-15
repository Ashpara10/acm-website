export type TEvent = {
  id: string;
  title: string;
  status: "COMPLETED" | "UPCOMING" | "LIVE" | "CANCELLED" | undefined;
  cover: string;
  date: string;
  time: string;
  mode: string;
  location: string;
  attending: number;
  images?: string[];
  description?: string;
  content?: string;
};
