import SelectCountry from "@/app/_components/SelectCountry";
import CinzelWrapper from "@/app/_components/ui/CinzelWrapper";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-500 mb-4">
        <CinzelWrapper>Update your guest profile</CinzelWrapper>
      </h2>

      <p className="text-base mb-8 text-primary-800">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-800 text-primary-100 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
