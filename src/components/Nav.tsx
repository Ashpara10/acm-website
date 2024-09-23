import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <header className="w-full bg-white/70 backdrop-blur-xl z-50 fixed top-0 flex items-center justify-center">
      <nav className="flex items-center justify-between max-w-5xl w-full">
        <div className="p-2">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="flex items-center justify-center gap-x-3">
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#">Home</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#about">About</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#events">Events</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#team">Team</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#blogs">Blogs</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#membership">Membership</a>
            </li>
            <li className="text-xl font-medium tracking-tight mx-1">
              <a href="#research">Research</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
