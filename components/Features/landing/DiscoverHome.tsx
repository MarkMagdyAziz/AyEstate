import React from "react";
import MainButton from "../../shared/MainButton";
import Image from "next/image";
import DiscoverAnimation from "./DiscoverAnimation";

function DiscoverHome() {
  return (
    <div className="bg-[#F6F3F3]">
      <div className="flex w-full justify-center py-[50px] text-center lg:pb-[70px] lg:pt-[30px]">
        <div className="w-[335px] items-center justify-between lg:flex lg:w-full lg:px-20 lg:text-start">
          <DiscoverAnimation>
            <h2 className="text-4xl font-bold leading-[43px] lg:text-[56px] lg:leading-[67.2px]">
              Discover Your Dream Home Today
            </h2>
            <p className="mt-5 text-sm font-normal lg:mt-10 lg:text-lg">
              Find the perfect property that suits your lifestyle. Our real
              estate service offers unique selling propositions that set us
              apart from the competition. Find your perfect home today!
            </p>
            <div className="mb-[48px] mt-6 flex justify-center gap-4 lg:mt-16 lg:justify-start">
              <MainButton title="Explore Now" />
              <button className="rounded-xl border-[1px] border-black bg-transparent px-6 py-3 text-base font-semibold text-black">
                Learn More
              </button>
            </div>
          </DiscoverAnimation>
          <div
            className="hidden lg:block"
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Image
              src="/Placeholder Image.png"
              alt="placeholder home"
              className={`block lg:hidden`}
              width={335}
              height={348}
            />
            <Image
              src="/large-screen/Placeholder Image.png"
              alt="placeholder home"
              className={`hidden lg:block`}
              width={579}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverHome;
