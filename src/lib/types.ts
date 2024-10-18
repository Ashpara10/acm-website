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

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface TeamsProps {
  technical: TeamMemberProps[];
  operations: TeamMemberProps[];
  pr: TeamMemberProps[];
  graphics: TeamMemberProps[];
  videoEditing: TeamMemberProps[];
  content: TeamMemberProps[];
}

export interface AdvisoryTeamSocialProps {
  name: string;
  url: string;
}

export interface AdvisoryTeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: AdvisoryTeamSocialProps[];
}
