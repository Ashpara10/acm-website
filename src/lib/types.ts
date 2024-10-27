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

export interface ContributorProps {
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
}
