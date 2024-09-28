import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="col-span-full md:col-span-1">
            <Link href="#" className="flex font-bold items-center">
              <Image src="/logo.png" alt="logo" width={60} height={60} />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Whatsapp
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Linkedin
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <h3 className="">Made with 💝 by team ACM</h3>
        </section>
      </div>
    </footer>
  );
};