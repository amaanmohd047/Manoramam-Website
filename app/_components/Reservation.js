import { auth } from "@/app/_lib/auth";
import { getBookedDatesBySuiteId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import LoginMessage from "./LoginMessage";

const Reservation = async ({ suite }) => {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesBySuiteId(suite.id),
  ]);

  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesBySuiteId(suite.id);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 min-h-[400px] border border-primary-200 my-10">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        suite={suite}
      />
      {session?.user ? (
        <>
          <ReservationForm suite={suite} user={session.user} />
        </>
      ) : (
        <>
          <LoginMessage />
        </>
      )}
    </div>
  );
};

export default Reservation;
