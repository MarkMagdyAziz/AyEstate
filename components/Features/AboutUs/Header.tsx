import React from "react";

function Header() {
  return (
    <>
      <div className="grid w-full grid-cols-1 lg:mb-[172px] lg:grid-cols-2 lg:justify-between">
        <div className="flex w-full gap-x-4 text-start text-[#534F69] lg:gap-x-10">
          <div className="flex flex-col gap-y-[6px]">
            <h6 className="text-base font-bold leading-6 text-[#16112F] lg:text-[28px] lg:leading-[36px]">
              800+
            </h6>
            <p className="text-xs font-normal leading-[18px]">
              Succesfull Project
            </p>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <h6 className="text-base font-bold leading-6 text-[#16112F] lg:text-[28px] lg:leading-[36px]">
              600+
            </h6>
            <p className="text-xs font-normal leading-[18px]">
              Satisfied Client
            </p>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <h6 className="text-base font-bold leading-6 text-[#16112F] lg:text-[28px] lg:leading-[36px]">
              150+
            </h6>
            <p className="text-xs font-normal leading-[18px]">
              Awwards Winners
            </p>
          </div>
        </div>
        <div className="flex w-full lg:justify-end">
          <p className="my-5 text-start text-sm leading-[20px] text-[#534F69] lg:my-0">
            We’re a diverse group of software engineering with different{" "}
            <br className="hidden lg:block" /> skills who make things people
            love to use. We help the <br className="hidden lg:block" /> world’s
            most progressive brands solve problems and generate growth.
          </p>
        </div>
      </div>
      <hr className="h-[1.5px] w-full bg-[#F3F3F3] lg:hidden" />
    </>
  );
}

export default Header;
