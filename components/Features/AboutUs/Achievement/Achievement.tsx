import React from "react";
import AchievementFeature from "./AchievementFeature";
import Image from "next/image";

const ICONS = [
  "icons/Facebook-Logo.wine.svg",
  "icons/Netflix-Logo.wine.svg",
  "icons/YouTube-Logo.wine.svg",
  "icons/Google-Logo.wine 1.svg",
  "icons/Amazon_(company)-Logo.wine.svg",
];
function Achievement() {
  return (
    <section className="bg-[#130f27] px-5 py-10 text-white lg:pe-[132px] lg:ps-[120px]">
      <span className="rounded-[50px] bg-[#FFFFFF1A] px-[16px] py-[6px] text-sm font-semibold uppercase lg:text-base">
        Achievement
      </span>
      <div className="flex w-full flex-col lg:my-[60px] lg:flex-row lg:items-start lg:justify-between lg:gap-x-[80px]">
        <h3 className="my-4 text-[28px] font-bold leading-[36px] lg:my-0 lg:me-52 lg:w-[580px] lg:text-[36px] lg:leading-[54px]">
          OUR AWARD THIS YEAR
        </h3>
        <p className="me-8 text-sm text-[#C7C1EA] lg:ms-20 lg:text-lg">
          We’re happy to receive this award so that it motivates us to grow and
          provide the best service for you.
        </p>
      </div>
      {/* SECTION COMPANIES ACHIEVEMENT*/}
      <section className="mt-[43px] flex flex-col gap-y-10 lg:flex-row">
        <AchievementFeature title="Best Small Companies" />
        <AchievementFeature title="Fast Company Growth" />
        <AchievementFeature title="Best Development Team" />
      </section>
      <div className="mb-4 mt-[40px] flex w-full lg:mb-[60px] lg:mt-[62px] lg:justify-center">
        <button className="flex w-full items-center justify-center gap-x-[10px] rounded-[40px] border border-[#F4F2FF] bg-transparent px-6 py-3 text-sm font-semibold lg:w-fit lg:py-[14px]">
          View All Project{" "}
          <Image
            src="icons/arrow-up-right-white.svg"
            alt="Dribble icon"
            width={16}
            height={16}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </button>
      </div>
      <hr className="h-[1.5px] w-full bg-[#00000] opacity-10" />
      <p className="mx-12 mt-4 text-center text-xs leading-[18px] text-[#C7C1EA] lg:mt-[60px] lg:text-lg">
        We’ve built with the most growth company around the world
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-5 lg:mt-6">
        {ICONS.map((icon) => {
          return (
            <Image
              key={icon}
              src={icon}
              alt={icon}
              width={97}
              height={36}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
            />
          );
        })}
      </div>
    </section>
  );
}

export default Achievement;
