import { BenefitsSection } from "@/components/layout/sections/About";
import { CommunitySection } from "@/components/layout/sections/Community";
import Events from "@/components/layout/sections/Events";
import { FAQSection } from "@/components/layout/sections/Faq";
import { HeroSection } from "@/components/layout/sections/Hero";
import { SponsorsSection } from "@/components/layout/sections/Sponsors";
import { TeamSection } from "@/components/layout/sections/CoreCouncil";
import { Mentors } from "@/components/layout/sections/Mentors";
import { TestimonialSection } from "@/components/layout/sections/Testimonial";
import { TextHoverEffectSection } from "@/components/layout/sections/TextHoverEffectSection";
import { getSortedPostsData } from "@/lib/utils";
import TopContributors from "@/components/layout/sections/TopContributors";
import TopNews from "@/components/layout/TopNews";

export const metadata = {
  title: "MU-ACM",
  description: "MU-ACM - Medicaps University ACM Student Chapter",
};
export default function Home() {
  const data = getSortedPostsData();
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <Events data={data} />
      <TeamSection />
      <Mentors />
      <TestimonialSection />
      <CommunitySection />
      <TopContributors />
      <FAQSection />
      <TextHoverEffectSection />
      <TopNews />
    </>
  );
}
