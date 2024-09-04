import Reveal from "@/app/_components/ui/Reveal";
import CabinCard from "@/app/_components/CabinCard";
import { getSuites } from "@/app/_lib/data-service";

const SuiteList = async ({ filter }) => {
  const suites = await getSuites();

  if (!suites.length) return null;

  let filteredSuites;

  if (filter === "all") filteredSuites = suites;
  if (filter === "small")
    filteredSuites = suites.filter((suite) => suite.maxCapacity < 3);
  if (filter === "medium")
    filteredSuites = suites.filter((suite) => suite.maxCapacity === 3);
  if (filter === "large")
    filteredSuites = suites.filter((suite) => suite.maxCapacity >= 4);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredSuites.map((cabin, i) => (
        <Reveal delay={0.1} from={"top"}>
          <CabinCard cabin={cabin} key={cabin.id} />
        </Reveal>
      ))}
    </div>
  );
};

export default SuiteList;
