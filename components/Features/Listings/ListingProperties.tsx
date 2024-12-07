import LisitngPagination from "./ListingPagination";
import { IDepartment } from "@/app/_core/interfaces/common";
import ListingCard from "./ListingCard";
import ListingFilters from "./ListingFilters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/_lib/firebaseConfig";

async function ListingProperties() {
  const querySnapShot = await getDocs(collection(db, "departments"));
  const departments: IDepartment[] = querySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IDepartment, "id">), // Explicitly cast data to Department type, omitting the 'id'
    id: doc.id,
  }));

  return (
    <>
      <div className="flex">
        <div className="hidden lg:block">
          <ListingFilters />
        </div>

        <div className="grid w-full flex-grow grid-cols-2 justify-center gap-y-4 lg:mx-auto lg:justify-items-end lg:gap-y-6">
          {departments.map((d) => {
            return <ListingCard key={d.id} department={d} />;
          })}
          <div className="col-span-2 my-14 flex w-full items-center justify-between gap-2 md:justify-center">
            <LisitngPagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingProperties;
