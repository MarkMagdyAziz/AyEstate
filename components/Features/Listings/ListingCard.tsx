import { IDepartment } from "@/app/_core/interfaces/common";
import Image from "next/image";
import React from "react";
interface Props {
  department: IDepartment;
}
function ListingCard({ department }: Props) {
  return (
    <div className="max-w-[156px]">
      <div className="relative h-[130px] w-[156px] md:h-[365px] md:w-[304px]">
        <Image
          src={`/properties/${department.image}`}
          alt={department.title}
          fill
          className="rounded-md object-cover md:rounded-xl"
          priority={false}
          sizes="(max-width: 768px) 156px, 304px"
        />
        <span className="absolute left-2 top-3 gap-1 rounded-3xl bg-[#111111BF] px-[4px] py-[2px] text-[8px] font-semibold leading-3 text-white">
          Featured
        </span>
        <span className="absolute left-32 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFFBF]">
          <Image width={12} height={12} src="/heart.svg" alt="Heart icon" />
        </span>
      </div>
      <p className="my-2 max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-[18px]">
        {department.leasehold}
      </p>
      <p className="text-[10px] font-semibold leading-[15px]">
        {department.title}
      </p>

      <p className="my-1 text-[8px] font-normal leading-3">
        {department.location}
      </p>
      <div className="flex flex-wrap items-baseline justify-start gap-1 text-[10px] leading-3 text-app-grey2">
        <p className="flex items-center justify-center gap-[2px]">
          <Image width={20} height={20} src="/Frame (1).svg" alt="Heart icon" />
          4
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image width={20} height={20} src="/Frame (2).svg" alt="Heart icon" />
          2
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image width={20} height={20} src="/Frame (3).svg" alt="Heart icon" />
          Villa
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image width={20} height={20} src="/Frame (4).svg" alt="Heart icon" />
          1400m2
        </p>
        <p className="flex items-center justify-center gap-[2px]">
          <Image width={20} height={20} src="/Frame (1).svg" alt="Heart icon" />
          4
        </p>
      </div>
    </div>
  );
}

export default ListingCard;
