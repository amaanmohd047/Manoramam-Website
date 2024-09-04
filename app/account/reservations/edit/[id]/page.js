import { updateReservationAction } from "@/app/_lib/actions";
import { getBooking, getSuite } from "@/app/_lib/data-service";
import SubmitButton from "../../../../_components/SubmitButton";

const page = async ({ params }) => {
  const { id: bookingId } = params;
  const booking = await getBooking(bookingId);

  const { maxCapacity } = await getSuite(booking.roomId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-500 mb-7">
        Edit Reservation #{bookingId}
      </h2>
      <form
        className="bg-primary-100 py-8 px-12 text-lg flex gap-6 flex-col"
        action={updateReservationAction}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
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
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="space-y-2">
          <input name="bookingId" value={bookingId} hidden />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton placeholder={"Updating ..."}>Update Reservation</SubmitButton>

        </div>
      </form>
    </div>
  );
};

export default page;
