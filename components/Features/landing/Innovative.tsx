import React from "react";
import MainButton from "../../shared/MainButton";
import PercentageBox from "../../shared/PercentageBox";

function Innovative() {
  return (
    <div className="flex justify-center bg-black py-[50px] text-white lg:px-16 lg:py-20">
      <div className="w-[335px] md:w-2/3 lg:grid lg:w-full lg:grid-cols-12 lg:items-baseline lg:gap-20">
        {/* col-6 */}
        <section className="lg:col-span-6">
          <h6 className="mb-3 text-base font-semibold">Innovative</h6>
          <h2 className="text-[32px] font-bold leading-[38px] lg:text-[48px] lg:leading-[58px]">
            Transforming the Real <br className="hidden lg:block" /> Estate
            Industry with <br className="hidden lg:block" /> Excellence
          </h2>
        </section>
        {/* col-6 */}
        <div className="mb-12 mt-5 flex w-full flex-col items-center justify-center lg:col-span-6 lg:mb-0 lg:items-start lg:justify-start">
          <p className="text-base lg:text-[18px] lg:leading-[27px]">
            At our company, we take pride in our exceptional success rate,
            having listed thousands of properties, and ensuring client
            satisfaction is our top priority.
          </p>
          <MainButton
            title="Learn More"
            className="!lg:mt-[16px] mt-[36px] w-fit"
          />
        </div>
        {/* col-12 */}
        {/* issue here with lg:flex-row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-12 lg:w-full lg:grid-cols-3 lg:justify-between lg:gap-0 xl:gap-8">
          <PercentageBox title="Success Rate" percentage={30} />
          <PercentageBox title="Properties Listed" percentage={30} />
          <PercentageBox title="Client Satisfaction" percentage={30} />
        </div>
      </div>
    </div>
  );
}

export default Innovative;
