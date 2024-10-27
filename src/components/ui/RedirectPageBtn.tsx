import Link from "next/link";
import React from "react";

interface RedirectPageBtnProps {
  href: string;
  text: string;
}

const RedirectPageBtn = ({ href, text }: RedirectPageBtnProps) => {
  return (
    <div className="text-center my-8 hover:text-primary group">
      <Link
        href={href}
        className="text-lg text-primary block text-center tracking-wider"
      >
        {text}{" "}
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
          {" "}
          &rarr;
        </span>
      </Link>
    </div>
  );
};

export default RedirectPageBtn;
