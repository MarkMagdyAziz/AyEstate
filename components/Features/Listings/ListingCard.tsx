import { IDepartment } from "@/app/_core/interfaces/common";
import Image from "next/image";
import React from "react";
interface Props {
  department: IDepartment;
}
function ListingCard({ department }: Props) {
  return (
    <div className="max-w-[156px] lg:max-w-[429px]">
      <div className="relative h-[130px] w-[156px] md:h-[365px] md:w-[304px] lg:h-[400px] lg:w-[429px]">
        <Image
          src={`/properties/${department.image}`}
          alt={department.title}
          fill
          className="rounded-md object-cover md:rounded-xl"
          priority={false}
          sizes="(max-width: 768px) 156px, 429px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
        <span className="absolute left-2 top-3 gap-1 rounded-3xl bg-[#111111BF] px-[4px] py-[2px] text-[8px] font-semibold leading-3 text-white lg:left-6 lg:top-4 lg:px-5 lg:py-2 lg:text-sm lg:leading-[22px]">
          Featured
        </span>
        <span className="absolute left-32 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFFBF] lg:left-[calc(100%-60px)] lg:top-4 lg:h-9 lg:w-9">
          <Image
            width={0}
            height={0}
            className="h-3 w-3 lg:h-[14px] lg:w-4"
            src="icons/heart.svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </span>
      </div>
      <p className="my-2 max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-[18px] lg:max-w-full lg:text-[22px] lg:font-semibold lg:leading-[33px]">
        {department.leasehold}
      </p>
      <p className="text-[10px] font-semibold leading-[15px] lg:text-[18px] lg:font-semibold lg:leading-[27px]">
        {department.title}
      </p>

      <p className="my-1 text-[8px] font-normal leading-3 lg:text-sm">
        {department.location}
      </p>
      <div className="flex flex-wrap items-baseline justify-start gap-1 text-[10px] leading-3 text-app-grey2 lg:gap-[14px] lg:text-sm lg:leading-[18px]">
        <p className="flex items-center justify-center gap-[2px]">
          <Image
            width={20}
            height={20}
            src="icons/Frame (1).svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          4
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image
            width={20}
            height={20}
            src="icons/Frame (2).svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          2
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image
            width={20}
            height={20}
            src="icons/Frame (3).svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          Villa
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image
            width={20}
            height={20}
            src="icons/Frame (4).svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          1400m2
        </p>
        <p className="flex items-center justify-center gap-[2px]">
          <Image
            width={20}
            height={20}
            src="icons/Frame (1).svg"
            alt="Heart icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          4
        </p>
      </div>
    </div>
  );
}

export default ListingCard;
