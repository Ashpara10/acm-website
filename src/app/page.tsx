import About from "@/components/pages/about";
import Landing from "@/components/pages/landing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <Landing />
        <About />
        <div
          id="gradient-big"
          className="absolute blur-2xl top-[200px] -z-10"
        />
      </div>
    </div>
  );
}
