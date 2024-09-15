import Image from "next/image";
import LisitngPagination from "./ListingPagination";
import { IDepartment } from "@/app/_core/interfaces/common";
import ListingCard from "./ListingCard";
interface Props {
  departments: IDepartment[];
}
function ListingProperties({ departments }: Props) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="relative inline-block">
          <select
            name="cars"
            id="cars"
            defaultValue="Sort By Relevant Product"
            className="flex appearance-none items-center justify-center rounded-[10px] border border-app-grey3 bg-white p-[5px] pr-[30px] text-xs font-medium leading-[19px] text-[#0B0F0E]"
          >
            <option value="Sort By Relevant Product" disabled>
              Sort By Relevant Product
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
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2">
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
      <div className="grid grid-cols-2 gap-4 md:mt-20 lg:grid-cols-3 xl:grid-cols-4">
        {departments.map((d, i) => {
          return <ListingCard key={d.id} department={d} />;
        })}
      </div>
      <LisitngPagination />
    </>
  );
}

export default ListingProperties;
