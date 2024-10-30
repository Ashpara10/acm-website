import DiscordIcon from "@/components/icons/discord-icon";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <BlurFade delay={0.25 * 2} inView>
            <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                  <DiscordIcon className="mb-4" width={80} height={80} />
                  <div>
                    Ready to join this
                    <span className="text-transparent pl-2 bg-gradient-to-r from-[#47c2d2] to-primary bg-clip-text">
                      Community?
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
                Join our vibrant Discord community! Connect, share, and grow
                with like-minded enthusiasts. Click to dive in! 🚀
              </CardContent>

              <CardFooter>
                <Button asChild>
                  <a
                    href="https://discord.com/invite/qaRz3z9rFF"
                    target="_blank"
                  >
                    Join Discord
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </BlurFade>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
