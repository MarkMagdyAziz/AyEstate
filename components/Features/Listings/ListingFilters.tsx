import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomNumber from "@/components/ui/CustomNumber";
import React from "react";
import FiltersSectionWrapper from "./FiltersSectionWrapper";

function ListingFilters() {
  return (
    <div className="border-app-[#E4E9EE] w-[278px] rounded-xl border p-6">
      <h5 className="text-xl font-bold">Filter Option</h5>
      <hr className="mb-6 mt-4 w-[230px] bg-[#E4E9EE]" />

      <FiltersSectionWrapper title="Best Filter">
        <form id="form1">
          <CustomCheckbox
            id="b1"
            name="b1"
            value="b1"
            label="4 stars or upper"
          />
          <CustomCheckbox
            id="b2"
            name="b1"
            value="b2"
            label="Luxury Building"
          />
          <CustomCheckbox id="b3" name="b1" value="b3" label="Best Seller" />
          <CustomCheckbox id="b3" name="b1" value="b3" label="Discount" />
        </form>
      </FiltersSectionWrapper>

      <FiltersSectionWrapper title="Location">
        <form id="form2" className="mt-3 flex flex-col gap-y-3">
          <CustomCheckbox id="c1" name="c1" value="c1" label="Bandung" />
          <CustomCheckbox id="c2" name="c1" value="c2" label="Jakarta" />
          <CustomCheckbox id="c3" name="c1" value="c3" label="Bali" />
          <CustomCheckbox id="c4" name="c1" value="c4" label="Medan" />
          <CustomCheckbox id="c5" name="c1" value="c5" label="Surabaya" />
          <CustomCheckbox id="c6" name="c1" value="c6" label="Jogja" />
          <p className="text-base font-medium text-[#1D9E34]">Show All</p>
        </form>
      </FiltersSectionWrapper>

      <FiltersSectionWrapper title="Category">
        <form id="form3" className="mt-3 flex flex-col gap-y-3">
          <CustomCheckbox id="d1" name="d1" value="d1" label="House" />
          <CustomCheckbox id="d2" name="d1" value="d2" label="Villa" />
          <CustomCheckbox id="d3" name="d1" value="d3" label="Apartment" />
          <CustomCheckbox id="d4" name="d1" value="d4" label="Hotel" />
          <CustomCheckbox id="d5" name="d1" value="d5" label="Real Estate" />
          <p className="text-base font-medium text-[#1D9E34]">
            Show All Categories
          </p>
        </form>
      </FiltersSectionWrapper>

      <FiltersSectionWrapper title="Best Range" lastItem={true}>
        <form className="mt-3 flex flex-col gap-y-3">
          <CustomNumber />
          <CustomNumber />
          <p className="w-fit rounded-xl border border-[#E4E9EE] px-[16px] py-[11px]">
            $0-$5,000
          </p>
          <p className="w-fit rounded-xl border border-[#E4E9EE] px-[16px] py-[11px]">
            $5,000 - $50,000
          </p>
          <p className="w-fit rounded-xl border border-[#E4E9EE] px-[16px] py-[11px]">
            &gt; $50,000
          </p>
        </form>
      </FiltersSectionWrapper>
    </div>
  );
}

export default ListingFilters;
