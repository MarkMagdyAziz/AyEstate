import { cn } from "@/app/_lib/clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  date: string;
  title: string;
  paragraph: string;
  imageSrc: string;
}
const TipCard: React.FC<Props> = ({
  date,
  paragraph,
  title,
  imageSrc,
  className,
}) => {
  return (
    <Link href="/blog/recently-articles/detail">
      <div
        className={cn(
          "relative mx-auto min-h-[260px] w-full lg:min-h-[300px] lg:w-[394px]",
          className,
        )}
      >
        <Image
          alt={title}
          src={imageSrc}
          fill
          className="rounded-xl object-cover lg:rounded-2xl"
          sizes="(max-width: 768px) 335px, (max-width: 1024px) 350px"
        />
      </div>
      <p className="mt-4 flex items-center justify-start gap-x-7 text-xs capitalize text-[#7F879E] lg:gap-x-3 lg:text-lg lg:leading-[23px]">
        <span>{date}</span>
        <span className="h-[3px] w-[3px] rounded-full bg-[#7F879E]"></span>
        <span>{title}</span>
      </p>
      <h5 className="mr-6 mt-[6px] text-sm font-bold capitalize leading-[18.2px] lg:mt-3 lg:text-2xl lg:font-bold lg:leading-[32px]">
        {paragraph}
      </h5>
    </Link>
  );
};

export default TipCard;
