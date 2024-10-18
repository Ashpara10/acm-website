import { TeamSection } from "@/components/layout/sections/CoreCouncil";
import ExecutiveTeamSection from "@/components/layout/sections/ExecutiveTeamSection";
import { FooterSection } from "@/components/layout/sections/Footer";
import { Mentors } from "@/components/layout/sections/Mentors";
import { getTeamDataByDivision } from "@/lib/utils";

const TeamPage = () => {
  const teamData = getTeamDataByDivision();

  return (
    <>
      <TeamSection />
      <Mentors />
      <ExecutiveTeamSection data={teamData} />
      <FooterSection />
    </>
  );
};

export default TeamPage;
