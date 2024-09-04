import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import CinzelWrapper from "./ui/CinzelWrapper";
import { getSuite } from "../_lib/data-service";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    arrivalDate,
    departureDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    roomId,
    rooms: { name, imageUrl },
  } = booking;

  return (
    <div className="flex border border-primary-200">
      <div className="relative h-32 aspect-square">
        <img
          src={imageUrl}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-200"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Suite<CinzelWrapper>:</CinzelWrapper> {name}
          </h3>
          {isPast(new Date(arrivalDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-700">
          {format(new Date(arrivalDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(arrivalDate))
            ? "Today"
            : formatDistanceFromNow(arrivalDate)}
          ) &mdash; {format(new Date(departureDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-700">&bull;</p>
          <p className="text-lg text-primary-700">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-600">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-200 w-[100px]">
        {!isPast(arrivalDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-700 border-b border-primary-200 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-100"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-200 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        ) : (
          <>
            <Link
              href={`/suites/${roomId}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-700 border-b border-primary-200 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-100"
            >
              <span className="mt-1">Book Again</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
