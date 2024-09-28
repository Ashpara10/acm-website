import { BenefitsSection } from "@/components/layout/sections/About";
import { CommunitySection } from "@/components/layout/sections/Community";
import { FAQSection } from "@/components/layout/sections/Faq";
import { FooterSection } from "@/components/layout/sections/Footer";
import { HeroSection } from "@/components/layout/sections/Hero";
import { SponsorsSection } from "@/components/layout/sections/Sponsors";
import { TeamSection } from "@/components/layout/sections/Team";
import { TestimonialSection } from "@/components/layout/sections/Testimonial";

export const metadata = {
  title: "ACM",
  description: "Landing page for ACM",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Landing page for ACM",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <TeamSection />
      <TestimonialSection />
      <CommunitySection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
