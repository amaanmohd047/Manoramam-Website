import Spinner from "@/app/_components/Spinner";

const loading = () => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-800 text-lg"> Loading Suites... </p>
    </div>
  );
};

export default loading;
