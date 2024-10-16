import GithubIcon from "@/components/icons/github-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
export const Mentors = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/mentors/mayank.jpeg",
      firstName: "Mayank",
      lastName: "V.",
      positions: ["Mentor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mayank-v-946404131/",
        },
      ],
    },
    {
      imageUrl: "/mentors/archi.jpeg",
      firstName: "Archi",
      lastName: "Jain",
      positions: ["Overall Mentor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/archi-jain-52949a24a/",
        },
      ],
    },
    {
      imageUrl: "/mentors/abbas.jpeg",
      firstName: "Abbas",
      lastName: "Bhanpurawala",
      positions: ["Technical Mentor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/abbas-bhanpura-wala/",
        },
      ],
    },
    {
      imageUrl: "/mentors/murtaza.jpg",
      firstName: "Murtaza",
      lastName: "Dawoodjiwala",
      positions: ["Graphics and Video Editing Mentor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/murtaza-dawoodji-b47261237/",
        },
      ],
    },
    {
      imageUrl: "/mentors/ram.jpg",
      firstName: "Ramkrishna ",
      lastName: "Swarnkar",
      positions: ["Technical and Video Editing Mentor"],
      socialNetworks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ramcodes",
          },
          {
            name: "Github",
            url: "https://github.com/ramxcodes",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/__ramfr",
          },
      ],
    },
    {
      imageUrl: "/mentors/lakshay.jpeg",
      firstName: "Lakshya ",
      lastName: "Mishra",
      positions: ["Operations Mentor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/lakshya-mishra-65275924b/",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    const iconSVGAttributes = {
      width: 24,
      height: 24,
    };
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon {...iconSVGAttributes} />;
      case "Github":
        return <GithubIcon {...iconSVGAttributes} />;
      case "X":
        return <XIcon {...iconSVGAttributes} />;
      case "Instagram":
        return <InstagramIcon {...iconSVGAttributes} />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Our Mentors
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
            Nurturing talents through expertise mentorship.
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
