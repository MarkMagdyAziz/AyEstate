import ListingProperties from "@/components/Features/Listings/ListingProperties";
import Breadcrumb from "@/components/shared/Breadcrumb";
import {collection, getDocs} from "firebase/firestore";
import React from "react";
import {db} from "../_lib/firebaseConfig";
import {IDepartment} from "../_core/interfaces/common";

export const metadata = {
  title: "Listings Page",
};
const breadcrumbLinks = [
  { link: "/", page: "Home" },
  { link: "#", page: "Real Estate" },
  { link: "#", page: "Villa" },
];
async function  ListingsPage() {
  const querySnapShot = await getDocs(collection(db, "departments"));
  const departments: IDepartment[] = querySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IDepartment, "id">), // Explicitly cast data to Department type, omitting the 'id'
    id: doc.id,
  }));
  return (
    <div className="container px-6 pt-[18px]">
      <Breadcrumb key={"listings"} items={breadcrumbLinks} />
      <div className="my-6 w-[256px]">
        <h2 className="text-base font-semibold leading-[22px]">
          Showing listings properties for “Villa”
        </h2>
        <h6 className="text-xs leading-5 text-app-grey2">
          Showing 1 - 60 Properties
        </h6>
      </div>
      <ListingProperties departments={departments}/>
    </div>
  );
}

export default ListingsPage;
