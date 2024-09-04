import { Suspense } from "react";
import Reveal from "@/app/_components/ui/Reveal";
import Spinner from "@/app/_components/Spinner";
import SuiteList from "@/app/_components/SuiteList";
import CinzelWrapper from "@/app/_components/ui/CinzelWrapper";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="mt-10">
      <Reveal>
        <h1 className="text-4xl mb-5 text-accent-500 font-medium">
          <CinzelWrapper>Our Luxury Suites</CinzelWrapper>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-primary-800 text-lg mb-10">
          Discover the perfect retreat in one of our meticulously designed rooms
          and suites. Each space is thoughtfully appointed with luxurious
          furnishings, premium amenities, and stunning views. Whether you prefer
          the intimacy of a cozy room or the grandeur of a spacious suite, we
          offer accommodations that cater to every desire.
        </p>
      </Reveal>
      <div className="mb-8 flex justify-end items-center">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <SuiteList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export const metadata = {
  title: "Suites",
};
