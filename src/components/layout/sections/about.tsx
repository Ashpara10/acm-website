import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "LineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-2xl uppercase font-medium text-primary mb-2 tracking-wider">
            About us
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            The ACM <b>(Association for Computing Machinery)</b> is a
            75-year-old international scientific and industrial computing
            society. Through its many Special Interest Groups, the ACM fosters
            research and communication in a broad range of computing areas. The
            society has around 100,000, spread over 174 countries leading to
            interaction between diversified computing enthusiasts. ACM provides
            us with one of the most enriching digital libraries which consists
            of various research papers. This leads us to availability of
            critical content being easily accessible. ACM strengthens the
            computing profession's collective voice through strong leadership,
            promotion of the highest standards, and recognition of technical
            excellence. ACM leads us to the pathway following which, in the near
            future, world's biggest problems will be solved using computing.
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div> */}
        <div className="w-full">
          <Image
            src={"/about.JPG"}
            width={1200}
            height={1200}
            alt="banner-img"
          />
        </div>
      </div>
    </section>
  );
};
