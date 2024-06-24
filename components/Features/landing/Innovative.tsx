import React from "react";
import MainButton from "../../shared/MainButton";
import PercentageBox from "../../shared/PercentageBox";

function Innovative() {
  return (
    <section className="flex justify-center bg-black py-[50px] text-white md:px-16 md:py-20">
      <div className="w-[335px] md:grid md:w-full md:grid-cols-12 md:gap-20">
        {/* col-6 */}
        <div className="md:col-span-6">
          <h6 className="mb-3 text-base font-semibold">Innovative</h6>
          <h2 className="text-[32px] font-bold leading-[38px] md:text-[48px] md:leading-[58px]">
            Transforming the Real <br className="hidden lg:block" /> Estate
            Industry with <br className="hidden lg:block" /> Excellence
          </h2>
        </div>
        {/* col-6 */}
        <article className="mb-12 mt-5 flex w-full flex-col items-center justify-center md:col-span-6 md:mb-0 md:items-start md:justify-start">
          <p className="text-base md:text-[18px] md:leading-[27px]">
            At our company, we take pride in our exceptional success rate,
            having listed thousands of properties, and ensuring client
            satisfaction is our top priority.
          </p>
          <MainButton
            title="Learn More"
            classes="w-fit mt-[36px] !md:mt-[16px]"
          />
        </article>
        {/* col-12 */}
        {/* issue here with md:flex-row */}
        <div className="flex flex-col gap-8 md:col-span-12 md:w-full xl:flex-row xl:justify-between">
          <PercentageBox title="Success Rate" percentage={30} />
          <PercentageBox title="Properties Listed" percentage={30} />
          <PercentageBox title="Client Satisfaction" percentage={30} />
        </div>
      </div>
    </section>
  );
}

export default Innovative;
