import MainButton from "@/components/shared/MainButton";
import Image from "next/image";
import React from "react";

function StartProject() {
  return (
    <div className="flex items-center justify-center bg-[#16112F] py-10 md:py-[60px]">
      <section className="flex flex-col items-center justify-center gap-3 px-5 text-center text-white md:gap-6">
        <h2 className="text-[20px] font-bold leading-[30px] md:text-[36px] md:leading-[54px]">
          LET’S START A <br />
          SUCCESSFUL PROJECT
        </h2>
        <p className="text-xs text-[#F4F2FF] md:text-[18px] md:leading-[28px]">
          We deliver immediate business impact and long-term ROI for your brand.
          <br className="hidden md:block" />
          Find out why Astheris are Australia&lsquo;s trusted Digital Agency.
        </p>
        <MainButton className="flex w-full items-center justify-center gap-[10px] rounded-[40px] bg-[#B7E08A] px-6 py-3 text-sm font-semibold text-[#16112F] md:w-fit">
          Start A Project
          <Image
            alt="arrow icon"
            src={"/arrow-up-right.svg"}
            height={0}
            width={0}
            className="h-4 w-4"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </MainButton>
      </section>
    </div>
  );
}

export default StartProject;
