import GithubIcon from "@/components/icons/github-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import { Card, CardTitle } from "@/components/ui/card";
import { TeamMemberProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialLink = ({
  href,
  IconComponent,
}: {
  href: string;
  IconComponent: React.ComponentType<{ width: number }>;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="opacity-75 hover:opacity-100 transition-all hover:-translate-y-0.5"
    >
      <IconComponent width={24} />
    </Link>
  );
};

const ExecutiveMemberCard = ({ data }: { data: TeamMemberProps }) => {
  if (data !== undefined) {
    const { name, role, image, github, linkedin, instagram } = data;
    const splitName = name.trim().split(" ");
    const socialLinksObj = [
      { href: linkedin, IconComponent: LinkedInIcon },
      { href: github, IconComponent: GithubIcon },
      {
        href: "https://www.instagram.com/" + instagram,
        IconComponent: InstagramIcon,
      },
    ];
    return (
      <Card className="w-full bg-muted/60 dark:bg-card px-4 py-3 flex gap-3 transition-transform duration-2000 overflow-hidden group">
        <div className="overflow-hidden rounded-md max-w-[96.66px]">
          <Image
            src={image}
            alt="placeholder"
            width={75}
            height={75}
            className="w-full aspect-square saturate-0 transition-all duration-300 group-hover:saturate-100 group-hover:scale-110"
          />
        </div>
        <div className="w-[calc(100%-96.66px)] flex flex-col justify-between py-1">
          <div className="space-y-2">
            {splitName && (
              <CardTitle className="font-semibold text-lg leading-tight tracking-wide line-clamp-1">
                {splitName.length > 1
                  ? splitName.slice(0, -1).join(" ")
                  : splitName[0]}{" "}
                <span className="text-primary">
                  {splitName.length > 1 ? splitName.reverse()[0] : ""}
                </span>
              </CardTitle>
            )}
            <p className="text-muted-foreground text-sm leading-tight line-clamp-1">
              {role}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            {socialLinksObj.map(
              (link) =>
                link.href && (
                  <SocialLink
                    key={link.href}
                    href={link.href}
                    IconComponent={link.IconComponent}
                  />
                )
            )}
          </div>
        </div>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default ExecutiveMemberCard;
