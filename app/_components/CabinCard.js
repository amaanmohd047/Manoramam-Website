import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CinzelWrapper from "./ui/CinzelWrapper";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name: tn, maxCapacity, regularPrice, discount, imageUrl } = cabin;

  const name = `${tn.split("-")[0]}-${tn.split("-")[1]} ${
    tn.split("-")[2]
  }`.split(" ");

  return (
    <div className="flex border-primary-100 border">
      <div className="flex-1 relative">
        <Image
          fill
          src={imageUrl}
          alt={`Cabin ${name}`}
          className="flex-1 border-r border-primary-100 object-cover aspect-square max-w-min"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-50">
          <h3 className="text-accent-350 font-semibold text-2xl mb-3">
            {name[0]}
            <CinzelWrapper> {name[1]}</CinzelWrapper>
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-700" />
            <p className="text-lg text-primary-700">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-700">/ night</span>
          </p>
        </div>

        <div className="bg-primary-50 border-t border-t-primary-100 text-right">
          <Link
            href={`/suites/${id}`}
            className="border-l border-primary-100 py-4 px-6 inline-block hover:bg-accent-500 transition-all hover:text-primary-100"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
