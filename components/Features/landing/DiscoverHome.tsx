import React from "react";
import MainButton from "../../shared/MainButton";
import Image from "next/image";

function DiscoverHome() {
  return (
    <div className="flex w-full justify-center py-[50px] text-center lg:pb-[70px] lg:pt-[30px]">
      <div className="w-[335px] items-center justify-between lg:flex lg:w-full lg:px-20 lg:text-start">
        <section className="w-full lg:w-2/4">
          <h2 className="text-4xl font-bold leading-[43px] lg:text-[56px] lg:leading-[67.2px]">
            Discover Your Dream Home Today
          </h2>
          <p className="mt-5 text-sm font-normal lg:mt-10 lg:text-lg">
            Find the perfect property that suits your lifestyle. Our real estate
            service offers unique selling propositions that set us apart from
            the competition. Find your perfect home today!
          </p>
          <div className="mb-[48px] mt-6 flex justify-center gap-4 lg:mt-16 lg:justify-start">
            <MainButton title="Explore Now" />
            <button className="rounded-xl border-[1px] border-black bg-transparent px-6 py-3 text-base font-semibold text-black">
              Learn More
            </button>
          </div>
        </section>

        <Image
          src="/Placeholder Image.png"
          alt="placeholder home"
          className={`block lg:hidden`}
          layout="responsive"
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
  );
}

export default DiscoverHome;
