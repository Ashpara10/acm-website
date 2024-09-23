import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur-xl z-50 flex items-center justify-center fixed top-0">
      {/* <nav className="flex max-w-5xl w-full items-center justify-between"> */}
      <NavigationMenu>
        <div className="p-1">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>
        <NavigationMenuList>
          {/* <ul className="flex items-center justify-center gap-x-3"> */}
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#">Home</a>
            </li>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#about">About</a>
            </li>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Events
              {/* </li> */}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">Hii</NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#team">Team</a>
            </li>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#blogs">Blogs</a>
            </li>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#membership">Membership</a>
            </li>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <li className="text-lg font-medium tracking-tight mx-1">
              <a href="#research">Research</a>
            </li>
          </NavigationMenuItem>
          {/* </ul> */}
        </NavigationMenuList>
      </NavigationMenu>
      {/* </nav> */}
    </header>
  );
};

export default Navbar;
