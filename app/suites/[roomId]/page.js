import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import Suite from "@/app/_components/Suite";
import { getSuite } from "@/app/_lib/data-service";
import { Suspense } from "react";

export default async function page({ params: { roomId } }) {
  const suite = await getSuite(roomId);

  if (!suite) return <NotFound />;

  const { id, name } = suite;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-200 py-3 px-10 mb-24 pb-8">
        <div className="relative scale-[1.15] -translate-x-3 max-h-[420px]">
          <Image
            fill
            src={imageUrl}
            alt={`Cabin ${name}`}
            className="object-cover aspect-square"
          />
        </div>

        <div>
          <h3 className="text-accent-350 text-7xl mb-5 translate-x-[-128px] bg-primary-50 p-6 pb-1 w-[150%]">
            <span className="text-5xl">
              {type} <CinzelWrapper>:</CinzelWrapper> {name.split("-")[0]}-
              {name.split("-")[1]}
            </span>{" "}
            <CinzelWrapper>{name.split("-")[2]}</CinzelWrapper>
          </h3>

          <p className="text-lg text-primary-800 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Araku Valley</span> (India)
              </span>
            </li>
          </ul>

          <ul className="">
            {features.map((f) => (
              <li
                className="flex gap-3 space-y-3 space-x-1 items-baseline justify-start"
                key={f.feature}
              >
                <ChevronRightIcon className="h-3 w-3 text-primary-800" />
                <p className="">
                  <span className="font-semibold text-primary-900">
                    <CinzelWrapper>{f.feature}</CinzelWrapper>
                  </span>
                  : {f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      <Suite suite={suite} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-500">
          Reserve {name.split("-")[2]} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />} key={id}>
          <Reservation suite={suite} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { roomId } }) {
  const { name } = await getSuite(roomId);

  const t = `${name.split("-")[2]} Suite`;

  return {
    title: t,
  };
}
