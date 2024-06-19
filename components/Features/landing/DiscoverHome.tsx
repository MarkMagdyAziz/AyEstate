import React from "react";
import MainButton from "../../shared/MainButton";

function DiscoverHome() {
  return (
    <section className="flex w-full justify-center py-[50px] text-center">
      <div className="w-[335px]">
        <h2 className="text-4xl font-bold leading-[43px]">
          Discover Your Dream Home Today
        </h2>
        <p className="mt-5 text-sm font-normal">
          Find the perfect property that suits your lifestyle. Our real estate
          service offers unique selling propositions that set us apart from the
          competition. Find your perfect home today!
        </p>
        <div className="mb-[48px] mt-6 flex justify-between">
          <MainButton title="Explore Now" />
          <button className="rounded-xl border-[1px] border-black bg-transparent px-6 py-3 text-base font-semibold text-black">
            Learn More
          </button>
        </div>
        <img src="/Placeholder Image.png" alt="placeholder home" />
      </div>
    </section>
  );
}

export default DiscoverHome;
