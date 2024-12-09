import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const ListingProperties = dynamic(
  () => import("@/components/Features/Listings/ListingProperties"),
);

const ListingSorting = dynamic(
  () => import("@/components/Features/Listings/ListingSorting"),
);

const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"));

export const metadata = {
  title: "Listings Page",
};
const breadcrumbLinks = [
  { link: "/", page: "Home" },
  { link: "#", page: "Real Estate" },
  { link: "#", page: "Villa" },
];
async function ListingsPage() {
  return (
    <div className="px-6 pt-[18px] lg:px-[120px]">
      <Breadcrumb key={"listings"} items={breadcrumbLinks} />
      <div className="flex w-full flex-col justify-center lg:flex-row">
        <div className="my-6 w-[256px] md:w-full lg:mb-[52px] lg:mt-8">
          <h2 className="text-base font-semibold leading-[22px] lg:text-2xl lg:leading-[34px]">
            Showing listings properties for “Villa”
          </h2>
          <h6 className="text-xs leading-5 text-app-grey2 lg:text-base lg:leading-[26px]">
            Showing 1 - 60 Properties
          </h6>
        </div>
        <ListingSorting />
      </div>
      <ListingProperties />
    </div>
  );
}

export default ListingsPage;
