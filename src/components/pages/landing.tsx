import Image from "next/image";
import React from "react";
import FloatingCards from "../floating-card";

const Landing = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="flex relative flex-col items-center mt-40 justify-center">
        <div className="">
          <h2 className="tracking-tight leading-none font-medium text-center text-3xl ">
            We Believe in Building a Great <br />{" "}
            <span className="tracking-tighter leading-none text-5xl font-semibold">
              Technical Community of Students
            </span>
          </h2>
          {/* <h2 className="font-medium flex flex-col text-xl ">
            Welcome to{" "}
            <span className="tracking-tight font-semibold text-4xl">MUACM</span>
          </h2> */}
        </div>
        <div className="mt-20  w-full">
          <div className=" absolute hover:scale-105 transition-all translate-y-14 -translate-x-24 drop-shadow-2xl z-20  ">
            <Image
              src="/tambola-card.svg"
              alt="logo"
              width={320}
              height={320}
            />
          </div>
          <div className=" absolute hover:scale-105 transition-all bottom-20 z-20 translate-x-24 right-0 drop-shadow-2xl">
            {" "}
            <Image
              src="/ai-event-card.svg"
              alt="logo"
              width={320}
              height={320}
            />
          </div>
          {/* <FloatingCards
            className=" absolute hover:scale-105 transition-all translate-y-14 -translate-x-24 drop-shadow-2xl z-20  -rotate-12"
            image="/logo.png"
            stars={4}
            title="Technical Tambola"
            description="Check out one of our favourites Technical tambola"
          />
          <FloatingCards
            className=" absolute hover:scale-105 transition-all bottom-20 z-20 translate-x-24 right-0 drop-shadow-2xl  rotate-12"
            image="/logo.png"
            stars={5}
            title="AIInnovate"
            description="Join us as we explore the magic of Artificial Intelligence in this insightful workshop called 'AInnovate'! "
          /> */}
          <video
            className="overflow-hidden max-w-5xl rounded-[35px]"
            width={1100}
            height={950}
            controls
            autoPlay={true}
          >
            <source src="/broll.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Landing;
