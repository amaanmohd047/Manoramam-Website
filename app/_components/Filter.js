"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  const handleClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="border border-primary-200 flex">
      <FilterButton
        filter="all"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        All
      </FilterButton>
      <FilterButton
        filter="small"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        2 guests
      </FilterButton>
      <FilterButton
        filter="medium"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        3 guests
      </FilterButton>
      <FilterButton
        filter="large"
        handleClick={handleClick}
        activeFilter={activeFilter}
      >
        4 guests
      </FilterButton>
    </div>
  );
};

const FilterButton = ({ filter, handleClick, activeFilter, children }) => {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-300 ${
        activeFilter === filter ? "bg-primary-300 text=primary-900" : ""
      }`}
      onClick={() => handleClick(filter)}
    >
      {children}
    </button>
  );
};

export default Filter;
