import { cn } from "@/app/_lib/clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

function DetailHeader() {
  return (
    <div className="flex flex-col items-center">
      <p className="flex w-full items-center justify-center gap-x-3 text-xs capitalize text-[#7F879E] lg:gap-x-3 lg:text-lg lg:leading-[23px]">
        <span>8 February 2024</span>
        <span className="h-[3px] w-[3px] rounded-full bg-[#7F879E]"></span>
        <span>Success Stories</span>
      </p>
      <h1 className="mt-6 px-2 text-center text-xl font-bold capitalize lg:mt-[30px] lg:max-w-[1030px] lg:px-12 lg:text-5xl lg:leading-[62px]">
        From $0 to $40 million: how a 10-year old orphan became a successful
        investor
      </h1>
      <p
        className={cn(
          "mt-3 px-3 text-sm leading-[20px] text-[#7F879E] lg:max-w-[761px] lg:text-lg",
          plusJakartaSans.className,
        )}
      >
        It can be a challenge to maintain balanced, healthy eating when you work
        from home. Try these 10 quick tips for healthy eating habits.
      </p>
    </div>
  );
}

export default DetailHeader;
