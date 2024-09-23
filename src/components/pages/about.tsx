import React from "react";
import DiscordIcon from "../icons/discord";
import LinkedInIcon from "../icons/linkedIn";
import InstagramIcon from "../icons/instagram";
import YoutubeIcon from "../icons/youtube";
import Wave from "../icons/wave";
import GradientBall from "../gradient-ball";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex relative flex-col items-center mt-10 h-full min-h-screen justify-center"
    >
      {/* <GradientBall /> */}
      {/* <Wave /> */}
      <div className="w-full py-6 flex items-center justify-center">
        <div className="max-w-5xl z-20 w-full flex items-center justify-around">
          <YoutubeIcon />
          <InstagramIcon />
          <DiscordIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="w-full flex items-center max-w-5xl mt-16 justify-start mb-6">
        <h2 className="tracking-tight px-1 leading-none font-bold text-center text-3xl ">
          About MUACM
        </h2>
      </div>
      <div className="flex h-full items-center justify-center w-full max-w-5xl">
        <div className=" w-full  h-full">
          <iframe
            width="460"
            height="260"
            src="https://www.youtube.com/embed/6L-szPtgMas?autoplay=0&controls=0&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&mute=1"
            title="Association of Computing Machinery"
            frameBorder="0"
            className="rounded-3xl"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-full h-full">
          <p className=" mt-3">
            The ACM (Association for Computing Machinery) is a 75-year-old
            international scientific and industrial computing society. Through
            its many Special Interest Groups, the ACM fosters research and
            communication in a broad range of computing areas. The society has
            around 100,000, spread over 174 countries leading to interaction
            between diversified computing enthusiasts. ACM provides us with one
            of the most enriching digital libraries which consists of various
            research papers. This leads us to availability of critical content
            being easily accessible. ACM strengthens the computing profession's
            collective voice through strong leadership, promotion of the highest
            standards, and recognition of technical excellence. ACM leads us to
            the pathway following which, in the near future, world's biggest
            problems will be solved using computing.
          </p>
        </div>
      </div>
      {/* <div className="max-w-5xl mt-4">
        <p className=" ">
          MUACM is an official computing student chapter of Medi-Caps
          University. We are not just an organization, we are a family of
          like-minded people, who intend to make a difference in the society.
          MUACM provides you a platform to explore, experience and contribute to
          the computing world, globally. It encourages you to pave the path of
          your career under the guidance of professionals. The chapter also
          organizes several events, seminars, learning forums, talks by
          distinguished speakers, field trips, contests, etc. It also gives an
          advantage to access all the services and activities organized by its
          parent organization ACM. To sum up, inception of MUACM creates a
          bridge between you and the computing world.
        </p>
      </div> */}
    </section>
  );
};

export default About;
