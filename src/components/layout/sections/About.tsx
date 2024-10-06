import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

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
            interaction between diversified computing enthusiasts. The Medi-Caps
            University ACM Student Chapter is a vibrant community of like minded
            individuals with a shared love for technology. Dedicated to
            fostering the growth in the world of computing and machinery, we
            focus on organising a variety of events which cater to the holistic
            technical needs of the job market. As a subsidiary of the
            international organisation ACM, our club serves as an excellent
            platform to build connections and grow professionally.
          </p>
        </div>

        <div className="w-full group overflow-hidden rounded-lg">
          <Image
            src={"/about2.jpg"}
            width={1200}
            height={1200}
            className="rounded-lg group-hover:scale-105 transition-transform duration-300"
            alt="banner-img"
          />
        </div>
      </div>
    </section>
  );
};
