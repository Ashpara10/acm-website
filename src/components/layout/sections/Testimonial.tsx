"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/BlurFade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/team/priyanka.webp",
    name: "Priyanka Toke",
    userName: "President",
    comment: `Being in ACM has been the most delightful experience of my entire college journey. In August 2023, I unexpectedly became the content head of MU-ACM. The club, the people, and the work quickly became an integral part of my life. I'm so grateful for the opportunity. I gave my all to the organization and was honored to become president. My tenure in both positions has been a total of two years, but the infinite memories will last a lifetime. Here at MU-ACM, we're not just colleagues; we're a family. We're proud to showcase that feeling of camaraderie in our chapter's culture.`,
    rating: 5.0,
  },
  {
    image: "/team/Damita_Pathak.webp",
    name: "Damita Pathak",
    userName: "Vice President",
    comment:
      "As Vice President, I'm honored to lead MUACM, building upon its legacy and fostering a culture of innovation and collaboration. Together, we'll elevate MUACM to unprecedented heights, nurturing growth, empowerment, and collective excellence.",
    rating: 4.8,
  },

  {
    image: "/team/anugrah2.webp",
    name: "Anugrah Sharma",
    userName: "Operations Head",
    comment:
      "As MUACM's Operations Head, I've been dedicated to ensuring our club runs smoothly and efficiently. From managing logistics to coordinating events, I've played a vital role in creating a positive and productive environment for our members.",
    rating: 4.9,
  },
  {
    image: "/team/Vinayak_oberoi.webp",
    name: "Vinayak Oberoi",
    userName: "PR Head",
    comment:
      "As Public Relations and Outreach Head, I've experienced the remarkable unity and dedication of our team. This position has sharpened my leadership skills and helped me grow personally and professionally. I'm proud of what we've achieved together and grateful for the opportunities.",
    rating: 5.0,
  },
  {
    image: "/team/vedant2.webp",
    name: "Vedant Soni",
    userName: "Secretary",
    comment:
      "As Secretary of the ACM Club, I've collaborated with brilliant peers, organized workshops, and interacted with industry experts. Our club is a launchpad for enthusiasts to develop into skilled professionals. Join us to discover, learn, and grow.",
    rating: 5.0,
  },
  {
    image: "/team/tanya.webp",
    name: "Tanya Somwanshi",
    userName: "Treasurer",
    comment:
      "MUACM has been a transformative journey, shaping me from a Technical Executive to Treasurer. The support and camaraderie of my team have been invaluable, and I'm grateful for the experiences and friendships I've gained.",
    rating: 5.0,
  },
  {
    image: "/team/ashwin_parande.webp",
    name: "Ashwin Parande",
    userName: "Technical Head",
    comment:
      "As MUACM's Technical Head, I've been privileged to lead and inspire our team to achieve new heights. Together, we've tackled challenging projects, developed innovative solutions, and fostered a collaborative learning environment.",
    rating: 5.0,
  },
  {
    image: "/team/riddhima.webp",
    name: "Riddhima Kaushal",
    userName: "Content Head",
    comment:
      "As Content Head, I've witnessed the incredible synergy and dedication of our ACM team. Together, we've fostered a stimulating intellectual environment and built a strong community.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <BlurFade delay={0.25} inView>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Testimonials
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Hear What Our Members Say
          </h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviewList?.map((review) => (
              <Card
                key={review.name}
                className="bg-muted/50 hover:scale-105 transition-all cursor-pointer md:last:col-span-2 lg:last:col-span-1 flex flex-col items-start justify-between first:row-span-2 basis-1/2 dark:bg-card "
              >
                <CardContent className="pt-6 pb-0">
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt="radix" />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
