import { TeamSection } from "@/components/layout/sections/CoreCouncil";
import ExecutiveTeamSection from "@/components/layout/sections/Executive";
import { Mentors } from "@/components/layout/sections/Mentors";
import { getTeamDataByDivision } from "@/lib/utils";

const TeamPage = () => {
  const teamData = getTeamDataByDivision();
  return (
    <>
      <TeamSection />
      <Mentors />
      <ExecutiveTeamSection data={teamData} />
    </>
  );
};

export default TeamPage;
