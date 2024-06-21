import React from "react";
import MainButton from "../../shared/MainButton";
import PercentageBox from "../../shared/PercentageBox";

function Innovative() {
  return (
    <section className="flex flex-col items-center justify-center bg-black py-[50px] text-white">
      <div className="w-[335px]">
        <h6 className="mb-3 text-base font-semibold">Innovative</h6>
        <h2 className="text-[32px] font-bold leading-[38px]">
          Transforming the Real Estate Industry with Excellence
        </h2>
        <p className="mt-5 text-base">
          At our company, we take pride in our exceptional success rate, having
          listed thousands of properties, and ensuring client satisfaction is
          our top priority.
        </p>
        <div className="mb-[60px] mt-[36px] flex w-full justify-center">
          <MainButton title="Learn More" />
        </div>
        <div className="flex flex-col gap-8">
          <PercentageBox title="Success Rate" percentage={30} />
          <PercentageBox title="Properties Listed" percentage={30} />
          <PercentageBox title="Client Satisfaction" percentage={30} />
        </div>
      </div>
    </section>
  );
}

export default Innovative;
