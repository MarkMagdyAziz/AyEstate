import React from "react";

function Services() {
  return (
    <>
      <span className="my-5 flex h-8 w-[104px] items-center justify-center rounded-[50px] bg-[#F4F2FF] text-sm font-semibold leading-5 text-[#5A48C3] lg:hidden">
        Services
      </span>

      <span className="my-5 hidden h-8 w-[104px] items-center justify-center rounded-[50px] bg-[#F4F2FF] text-base font-semibold leading-5 text-black lg:flex">
        OUR TEAM
      </span>

      <h3 className="text-center text-[28px] font-bold leading-9 lg:text-4xl">
        MEET OUR <br className="lg:hidden" /> CREATIVE TEAM
      </h3>
      <p className="mx-2 my-4 text-center text-sm leading-5 text-[#534F69] lg:text-lg">
        Magna metus, adipiscing dictumst magna fringilla metus fermentum
        tristique. Enim vitae purus lectus augue maecenas
      </p>
    </>
  );
}

export default Services;
