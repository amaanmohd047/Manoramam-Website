"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "../_context/ReservationContext";
import { createBookingAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ suite, user }) {
  const { range, resetRange } = useReservation();

  const { maxCapacity, regularPrice, discount, id } = suite;

  const arrivalDate = range?.from;
  const departureDate = range?.to;
  const numNights = differenceInDays(departureDate, arrivalDate);

  const roomPrice = (regularPrice - discount) * numNights;

  const bookingData = {
    arrivalDate,
    departureDate,
    numNights,
    roomPrice,
    status: "unconfirmed",
    hasBreakfast: false,
    extrasPrice: 0,
    isFullyPaid: false,
    totalPrice: roomPrice + 0,
    roomId: id,
  };

  const handleFormAction = createBookingAction.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-200 text-primary-800 px-16 py-2 flex justify-between items-center">
        <p>Logged in as </p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        className="bg-primary-100 py-10 px-16 text-lg flex gap-5 flex-col"
        action={async (formData) => {
          await handleFormAction(formData);
          resetRange();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-800 text-primary-200 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-800 text-primary-200 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
        <div></div>

        <div className="flex justify-end items-center gap-6">
          {arrivalDate && departureDate ? (
            <SubmitButton placeholder="Reserving...">Reserve Now</SubmitButton>
          ) : (
            <p className="text-primary-700 text-base">
              Start by selecting dates
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
