import { auth } from "../_lib/auth";

// export const metadata = {
//   title: "Guest",
// };

const page = async () => {
  const { user } = await auth();

  return (
    <p className="text-xl text-accent-500 font-semibold">Hello, {user.name}</p>
  );
};

export default page;
