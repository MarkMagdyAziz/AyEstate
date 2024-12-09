import { cn } from "@/app/_lib/clsx";
import Image from "next/image";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  date: string;
  title: string;
  paragraph: string;
  subParagraph?: string;
  imageSrc: string;
}
const BlogCard: React.FC<Props> = ({
  className,
  date,
  paragraph,
  title,
  subParagraph,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto min-h-[317px] w-full min-w-[335px] lg:h-[588px] lg:w-[690px] lg:rounded-2xl",
        className,
      )}
    >
      <Image
        alt="house blog"
        src={imageSrc}
        fill
        className="rounded-xl object-cover lg:rounded-2xl"
        sizes="(max-width: 768px) 320px, (max-width: 1024px) 690px, 690px"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
      />
      <article className="absolute bottom-4 left-4 text-white lg:mr-2">
        <div className="flex items-center justify-start gap-x-3 leading-[15.6px] opacity-75 lg:left-[24px] lg:text-lg lg:font-semibold">
          <span>{date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-white"></span>
          <span>{title}</span>
        </div>
        <h4 className="mt-[6px] text-sm font-bold leading-[18.2px] lg:mr-10 lg:mt-3 lg:text-[28px] lg:leading-[36px]">
          {paragraph}
        </h4>
        {subParagraph && (
          <p className="mt-2 text-xs text-[#FFFFFFB2] opacity-70 lg:text-lg lg:font-semibold">
            {subParagraph}
          </p>
        )}
      </article>
    </div>
  );
};

export default BlogCard;
