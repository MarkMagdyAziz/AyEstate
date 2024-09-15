import Image from "next/image";
import LisitngPagination from "./ListingPagination";
import { IDepartment } from "@/app/_core/interfaces/common";
import ListingCard from "./ListingCard";
import ListingFilters from "./ListingFilters";
interface Props {
  departments: IDepartment[];
}
function ListingProperties({ departments }: Props) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between lg:mb-[52px] lg:justify-end">
        <div className="flex items-center justify-center gap-1 lg:mr-[18px]">
          <span className="hidden text-base leading-[26px] text-app-grey2 lg:block">
            Sort By:
          </span>
          <div className="relative inline-block">
            <select
              name="cars"
              id="cars"
              defaultValue="Sort By Relevant Product"
              className="p-r[30px] flex w-[171px] appearance-none items-center justify-center rounded-[10px] border border-app-grey3 bg-white p-[5px] text-xs font-medium leading-[19px] text-[#0B0F0E] lg:hidden lg:pr-0"
            >
              <option
                className="block lg:hidden"
                value="Sort By Relevant Product"
                disabled
              >
                Soty By Relevant Product
              </option>
            </select>
            <select
              name="cars"
              id="cars"
              defaultValue="Sort By Relevant Product"
              className="hidden w-[180px] appearance-none rounded-[8px] border border-app-grey3 bg-white px-[16px] py-[11px] text-sm font-semibold leading-[22px] text-[#0B0F0E] lg:flex"
            >
              <option
                className="block lg:hidden"
                value="Sort By Relevant Product"
                disabled
              >
                Relevant Product
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Image
                width={12}
                height={12}
                src="/arrow-down.svg"
                alt="arrow down icon"
              />
            </div>
          </div>
          <span className="ml-[18px] hidden h-6 border-r-2 text-amber-50 lg:block"></span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2 lg:hidden">
            <div className="rounded-lg border border-app-grey3 p-[5px]">
              <Image
                width={20}
                height={20}
                src="/filter.svg"
                alt="filter icon"
              />
            </div>
            <span className="h-6 border-r-2 text-amber-50"></span>
          </div>
          <div className="flex items-center justify-center rounded-lg border border-app-grey3 bg-[#1E4C2F] p-[5px]">
            <Image
              width={20}
              height={20}
              src="/element-3.svg"
              alt="filter icon"
            />
          </div>
          <div className="rounded-lg border border-app-grey3 p-[5px]">
            <Image width={20} height={20} src="/menu.svg" alt="filter icon" />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="hidden lg:block">
          <ListingFilters />
        </div>

        <div className="grid flex-grow grid-cols-2 gap-y-4 lg:gap-y-6 lg:mx-auto lg:justify-items-end ">
          {departments.map((d) => {
            return <ListingCard key={d.id} department={d} />;
          })}
        </div>
      </div>
      <LisitngPagination />
    </>
  );
}

export default ListingProperties;
