import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg-image.jpg";
import Reveal from "@/app/_components/ui/Reveal";
import CinzelWrapper from "./_components/ui/CinzelWrapper";

export default function Home() {
  return (
    <main className="mt-40">
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="Front facing Image of Manoramam Hotel"
        className="object-cover"
      />

      <div className="relative z-10 text-center">
        <Reveal>
          <h1
            className={`text-6xl text-primary-950 mb-10 tracking-tight font-normal [text-shadow:_0_0_10px_#12121299]`}
          >
            <CinzelWrapper>Discover the Art of Elegant Luxury</CinzelWrapper>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex gap-10 justify-center">
            <Link
              href="/about"
              className="bg-accent-600 px-6 py-4 text-primary-100 text-base font-semibold hover:bg-accent-700 transition-all drop-shadow-sm"
            >
              See What We Offer
            </Link>
            {/* <Reveal delay={0.2}> */}
            <Link
              href="/suites"
              className="bg-accent-600 px-6 py-4 text-primary-100 text-base font-semibold hover:bg-accent-700 transition-all drop-shadow-sm"
            >
              Discover Your Stay
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

/*

*/
