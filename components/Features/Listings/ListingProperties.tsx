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
      <div className="flex">
        <div className="hidden lg:block">
          <ListingFilters />
        </div>

        <div className="grid flex-grow grid-cols-2 gap-y-4 lg:mx-auto lg:justify-items-end lg:gap-y-6">
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
