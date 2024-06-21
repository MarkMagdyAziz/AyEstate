import Image from "next/image";
import React from "react";

function StartProject() {
  return (
    <section className="flex items-center justify-center bg-[#16112F] py-10">
      <div className="flex flex-col items-center justify-center gap-3 px-5 text-center text-white">
        <h2 className="text-[20px] font-bold leading-[30px]">
          LET’S START A <br />
          SUCCESSFUL PROJECT
        </h2>
        <p className="text-xs text-[#C7C1EA]">
          We deliver immediate business impact and long-term ROI for your brand.
          Find out why Astheris are Australia's trusted Digital Agency.
        </p>
        <button className="flex w-full items-center justify-center gap-[10px] rounded-[40px] bg-[#B7E08A] px-6 py-3 text-sm font-semibold text-[#16112F]">
          Start A Project
          <Image
            alt="arrow icon"
            width={16}
            height={16}
            src={"/arrow-up-right.svg"}
          />
        </button>
      </div>
    </section>
  );
}

export default StartProject;
