import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/priyanka.jpg",
      firstName: "Priyanka",
      lastName: "Toke",
      positions: ["President"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/priyanka-toke-762838215/",
        },
      ],
    },
    {
      imageUrl: "/team/damita.jpg",
      firstName: "Damita",
      lastName: "Pathak",
      positions: ["Vice President"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/damita-pathak-4956262a2/",
        },
      ],
    },
    {
      imageUrl: "/team/tanya.jpg",
      firstName: "Tanya ",
      lastName: "Somwanshi",
      positions: ["Treasurer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tanya-somwanshi-277220248/",
        },
      ],
    },
    {
      imageUrl: "/team/vedant2.jpg",
      firstName: "Vedant",
      lastName: "Soni",
      positions: ["Secretary"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vedant-soni-504568249/",
        },
      ],
    },
    {
      imageUrl: "/team/ashwin.jpg",
      firstName: "Ashwin ",
      lastName: "Parande",
      positions: ["Technical Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ashwin-parande-657653294/",
        },
        {
          name: "Github",
          url: "https://github.com/Ashpara10/",
        },
      ],
    },
    {
      imageUrl: "/team/anugrah2.jpg",
      firstName: "Anugrah",
      lastName: "Sharma",
      positions: ["Operations Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anu-g-rah/",
        },
      ],
    },
    {
      imageUrl: "/team/vinayak.jpg",
      firstName: "Vinayak",
      lastName: "Oberoi",
      positions: ["PR Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/vinayak-oberoi-a26ba22b0/",
        },
      ],
    },
    {
      imageUrl: "/team/riddhima.jpg",
      firstName: "Riddhima ",
      lastName: "Kaushal",
      positions: ["Content Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
      ],
    },
    {
      imageUrl: "/team/hemant.jpg",
      firstName: "Hemant",
      lastName: "Sharma",
      positions: ["Graphics Head"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/hemant-sharma-3135b4290/",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Our Core Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The folks with amazing talent
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-3 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-1">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
