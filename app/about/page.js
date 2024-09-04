export const metadata = {
  title: "About",
};

import Image from "next/image";
import Link from "next/link";

import pool from "@/public/pool.jpeg";
import hero from "@/public/hero.jpeg";
import food from "@/public/food.jpeg";
import suite from "@/public/suite.jpeg";

import Reveal from "@/app/_components/ui/Reveal";
import CinzelWrapper from "@/app/_components/ui/CinzelWrapper";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-48 text-lg items-center my-20">
      <div className="col-span-3">
        <Reveal>
          <h1 className="text-4xl mb-10 text-accent-500 font-medium">
            <CinzelWrapper>Welcome to Manoramam</CinzelWrapper>
          </h1>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <p>
              Indulge in the epitome of luxury at Manoramam, an exquisite
              boutique hotel nestled in the breathtaking Araku Valley. Here,
              nature's stunning beauty intertwines with unparalleled elegance,
              creating a majestic retreat for the discerning traveler.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Experience a sanctuary of sophistication where every detail is
              meticulously crafted to provide you with an unforgettable escape.
              From the moment you step through our grand entrance, you'll be
              enveloped in an atmosphere of refined opulence.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Our dedicated staff is committed to ensuring your stay is nothing
              short of extraordinary, making every moment feel like a cherished
              memory. Whether you seek a romantic getaway, a lavish family
              vacation, or a serene solo retreat, Manoramam is your gateway to a
              world of elegance and tranquility.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="col-span-2 relative">
        <Reveal from={"right"} delay={0.25}>
          <Image
            src={hero}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="col-span-2">
        <Reveal from={"left"} delay={0.25}>
          <Image
            src={suite}
            alt="Image of a suite at luxury hotel."
            placeholder="blur"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="col-span-3">
        <Reveal>
          <h1 className="text-4xl mb-10 text-accent-500 font-medium">
            <CinzelWrapper>Exquisite Luxury Suites</CinzelWrapper>
          </h1>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <p>
              At Manoramam, we offer a selection of eight elegantly appointed
              luxury cabins, each a masterpiece of design and comfort.
              Impeccably crafted with lavish furnishings and sophisticated
              decor, our suites provide a sanctuary where grandeur meets
              serenity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Enjoy breathtaking views of the lush hills and verdant landscapes
              of Araku Valley from your private balcony. Each cabin features
              sumptuous bedding, spacious living areas, and opulent en-suite
              bathrooms equipped with high-end fixtures and lavish amenities.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Experience the allure of refined elegance combined with modern
              conveniences, including complimentary high-speed Wi-Fi, smart
              televisions, and fully stocked minibars. Our cabins serve as a
              perfect base for your exploration of Araku Valley, ensuring you
              enjoy the finest comforts while surrounded by nature's splendor.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="col-span-3">
        <Reveal>
          <h1 className="text-4xl mb-10 text-accent-500 font-medium">
            <CinzelWrapper>A Culinary Journey Awaits</CinzelWrapper>
          </h1>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <p>
              Embark on an extraordinary culinary adventure at Manoramam's
              on-site restaurant, where dining transcends the ordinary. Our
              acclaimed chefs curate gourmet dishes that celebrate the rich
              flavors and traditions of Indian cuisine, using only the freshest,
              locally sourced ingredients.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Begin your day with a lavish breakfast featuring artisanal
              pastries, seasonal fruits, and gourmet selections, all served in
              an elegant setting overlooking the stunning valley. For lunch and
              dinner, savor an exquisite array of culinary delights that
              showcase the artistry and creativity of our kitchen.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Whether you choose to dine indoors in our sophisticated dining
              room or on our enchanting terrace with breathtaking views, each
              meal is a feast for the senses. Complement your dining experience
              with a selection of fine wines and local beverages that elevate
              every occasion.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="col-span-2">
        <Reveal from={"right"} delay={0.25}>
          <Image
            src={food}
            alt="Gourmet dishes at Manoramam"
            placeholder="blur"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="col-span-2">
        <Reveal from={"left"} delay={0.25}>
          <Image
            src={pool}
            alt="Luxury amenities at Manoramam"
            placeholder="blur"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="col-span-3">
        <Reveal>
          <h1 className="text-4xl mb-10 text-accent-500 font-medium">
            <CinzelWrapper>Amenities Designed for Your Comfort</CinzelWrapper>
          </h1>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <p>
              Manoramam offers a wealth of exceptional amenities designed to
              provide the ultimate in luxury and relaxation. Take a refreshing
              dip in our heated infinity pool, surrounded by panoramic views of
              the Araku Valley, or unwind in our opulent spa, where you can
              indulge in rejuvenating treatments and personalized therapies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Stay active in our state-of-the-art fitness center, equipped with
              the latest technology and luxurious facilities. For outdoor
              enthusiasts, our beautifully landscaped gardens offer serene
              walking paths and stunning vistas.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Guided nature walks immerse you in the breathtaking beauty of the
              surrounding hills and valleys. As the sun sets, gather around our
              elegant fire pits for intimate conversations and starlit evenings,
              creating unforgettable memories amidst the grandeur of Manoramam.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              At Manoramam, every detail is designed to envelop you in luxury
              and elegance, making your stay an extraordinary experience that
              lingers long after you depart from the enchanting Araku Valley.
            </p>
          </Reveal>
        </div>
        <div className="mt-10">
          <Reveal>
            <Link
              href="/suites"
              className="inline-block mt-4 bg-accent-600 px-8 py-5 text-primary-50 text-lg font-semibold hover:bg-accent-700 transition-all"
            >
              Explore Our Luxury Suites
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
