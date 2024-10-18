"use client";
import { Badge } from "@/components/ui/badge";
import { TeamMemberProps, TeamsProps } from "@/lib/types";
import ExecutiveMemberCard from "./ExecutiveMemberCard";
interface ExecutiveSectionProps {
  data: TeamsProps;
}

const getTeamName = (teamName: keyof TeamsProps) => {
  switch (teamName) {
    case "technical":
      return "Technical";
    case "operations":
      return "Operations";
    case "pr":
      return "Public Relations";
    case "graphics":
      return "Graphics";
    case "videoEditing":
      return "Video Editing";
    case "content":
      return "Content";
    default:
      return undefined;
  }
};

const ExecutiveTeamSection = ({ data }: ExecutiveSectionProps) => {
  return (
    <section id="team" className="container">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Our Executives
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Talent behind the scenes.
        </h2>
      </div>
      {(Object.entries(data) as [keyof TeamsProps, TeamMemberProps[]][]).map(
        ([teamName, teamMembers], index) => {
          const teamDisplayName = getTeamName(teamName);
          return (
            <div
              key={teamName}
              className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 border rounded-xl py-5 px-3 sm:p-8 mb-10"
            >
              {teamDisplayName && (
                <Badge
                  className={`absolute max-sm:left-1/2 transform  -translate-x-1/2 sm:transform-none sm:-translate-x-0 -top-[12px] sm:-top-[13px] px-3 md:px-4 py-1 pointer-events-none ${
                    index % 2 == 0 ? "sm:left-20" : "sm:right-20"
                  }`}
                >
                  <p className="tracking-wider text-xs sm:text-[14px] leading-none flex gap-1">
                    {getTeamName(teamName)}{" "}
                    <span className="hidden sm:block">Team</span>
                  </p>
                </Badge>
              )}
              {teamMembers.map((item) => (
                <ExecutiveMemberCard key={item.name} data={item} />
              ))}
            </div>
          );
        }
      )}
    </section>
  );
};

export default ExecutiveTeamSection;
