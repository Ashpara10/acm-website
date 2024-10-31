"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../icons/github-icon";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ToggleTheme } from "./toogle-theme";
import { BlurFade } from "../ui/BlurFade";

interface RouteProps {
  href: string;
  label: string;
}

// interface FeatureProps {
//   title: string;
//   description: string;
// }

const routeList: RouteProps[] = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/#testimonials",
    label: "Testimonials",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="container sticky top-5 z-40">
      <BlurFade delay={0.05} inView> {/* Reduced delay */}
        <nav className="shadow-inner bg-opacity-15 border border-secondary rounded-2xl flex justify-between items-center py-2 px-2.5 md:px-4 bg-card/50 backdrop-blur-lg backdrop-filter bg-white/30 border border-white/30">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="w-[50px] md:w-[60px]"
            />
          </Link>
          {/* Mobile Menu */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer lg:hidden"
                />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
              >
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Link href="/" className="flex items-center">
                        <Image
                          src="/logo.png"
                          alt="logo"
                          width={60}
                          height={60}
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                  <Separator className="mb-2" />
                  <ToggleTheme />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:block mx-auto transition duration-300">
            <NavigationMenuList>
              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink className="space-x-2" key={href} asChild>
                    <Link
                      href={href}
                      className="text-base px-2 transition-all duration-300 hover:bg-primary/30 py-1.5 rounded-md"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex">
            <ToggleTheme />
            <Button
              asChild
              size="sm"
              variant="ghost"
              aria-label="View on GitHub"
            >
              <Link
                aria-label="View on GitHub"
                href="https://github.com/Ashpara10/acm-website"
                target="_blank"
              >
                <GithubIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </nav>
      </BlurFade>
    </header>
  );
};
