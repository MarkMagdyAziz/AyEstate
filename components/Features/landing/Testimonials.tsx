import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <div className="flex items-center justify-center bg-[#FFEEEE] py-[50px] text-center">
      <section className="flex w-[355px] flex-col items-center justify-center gap-6 lg:w-[768px] lg:gap-0">
        <h2 className="text-[24px] font-bold leading-[29px] lg:text-[48px] lg:leading-[58px]">
          Customer Testimonials
        </h2>
        <div className="flex gap-1 lg:mt-[50px]">
          {[1, 2, 3, 4, 5].map((s) => {
            return (
              <Image
                key={s}
                src="/star.svg"
                width={0}
                height={0}
                priority
                alt="star"
                className="h-[20px] w-[20px]"
              />
            );
          })}
        </div>
        <p className="text-xl font-bold lg:mt-[32px] lg:text-[24px] lg:leading-[34px]">
          Our experience with this real estate website design has been nothing
          short of amazing. The team was professional, responsive, and delivered
          <br className="lg:hidden" />
          beyond our expectations.
        </p>
        <div className="flex flex-col items-center justify-center lg:mt-9 lg:flex-row lg:items-end lg:gap-5">
          <Image
            src="/Avatar.svg"
            width={56}
            height={56}
            priority
            alt="star"
            className="h-auto w-[56px]"
          />
          <div className="lg:text-start">
            <h5 className="mt-4 text-base font-semibold">John Doe</h5>
            <h6 className="text-base font-normal">CEO, ABC Realty</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
