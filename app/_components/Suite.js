import Image from "next/image";

import {
  ChevronRightIcon,
  MapPinIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import TextExpander from "@/app/_components/TextExpander";
import CinzelWrapper from "@/app/_components/ui/CinzelWrapper";

const Suite = ({ suite }) => {
  const {
    id,
    name,
    maxCapacity,
    type,
    regularPrice,
    discount,
    features: feats,
    imageUrl,
    description,
  } = suite;

  const features = feats.split("\n").map((feat) => ({
    feature: feat.split(": ").at(0),
    desc: feat.split(": ").at(1),
  }));

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-200 py-3 px-10 mb-24 pb-8">
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
              For up to <span className="font-bold">{maxCapacity}</span> guests
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
    </div>
  );
};

export default Suite;
