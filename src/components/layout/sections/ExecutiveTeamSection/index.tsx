"use client";
import { Badge } from "@/components/ui/badge";
import { TeamMemberProps, TeamsProps } from "@/lib/types";
import ExecutiveMemberCard from "./ExecutiveMemberCard";
import { cn } from "@/lib/utils";
interface ExecutiveSectionProps {
  data: TeamsProps;
}

const getTeamDetails = (teamName: keyof TeamsProps) => {
  switch (teamName) {
    case "technical":
      return {
        name: "Technical",
      };
    case "operations":
      return {
        name: "Operations",
        className: "bg-red-500",
      };
    case "pr":
      return {
        name: "Public Relations",
        className: "bg-green-500",
      };
    case "graphics":
      return {
        name: "Graphics",
        className: "bg-purple-500",
      };
    case "videoEditing":
      return {
        name: "Video Editing",
        className: "bg-yellow-500",
      };
    case "content":
      return {
        name: "Content",
        className: "bg-pink-500",
      };
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
        ([teamName, teamMembers]) => {
          const teamDisplayDetails = getTeamDetails(teamName);
          return (
            <div
              key={teamName}
              className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 border rounded-xl py-5 px-3 sm:p-8 mb-10"
            >
              {teamDisplayDetails && (
                <Badge
                  className={cn(
                    "absolute max-sm:left-1/2 transform -translate-x-1/2 sm:transform-none sm:-translate-x-0 -top-[12px] sm:-top-[13px] sm:left-20 px-3 md:px-4 py-1 pointer-events-none",
                    teamDisplayDetails.className && teamDisplayDetails.className
                  )}
                >
                  <p className="tracking-wider text-xs sm:text-[14px] leading-none flex gap-1">
                    {teamDisplayDetails.name}
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
