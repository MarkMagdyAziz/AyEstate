import { cn } from "@/app/_lib/clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Props {
  children?: React.ReactNode;
  className?: string;
  date: string;
  title: string;
  paragraph: string;
  imageSrc: string;
}
const BlogSmallCard: React.FC<Props> = ({
  className,
  date,
  paragraph,
  title,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-x-3 lg:gap-x-6",
        className,
      )}
    >
      <div className="relative size-[100px] min-w-[100px] lg:min-h-[176px] lg:min-w-[190px]">
        <Image
          alt={title + " image"}
          src={imageSrc}
          fill
          className="rounded-2xl object-cover"
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 180px"
        />
      </div>

      <section className="text-xs lg:text-base lg:font-semibold lg:leading-[20.8px]">
        <div className="flex items-center justify-start gap-x-3 leading-[15.6px] opacity-75">
          <span>{date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-[#D4D7DF]"></span>
          <span>{title}</span>
        </div>
        <h4
          className={cn(
            "mr-2 mt-[6px] text-sm font-bold leading-[18.2px] lg:mr-0 lg:mt-3 lg:text-xl lg:leading-[26px]",
            plusJakartaSans.className,
          )}
        >
          {paragraph}
        </h4>
      </section>
    </div>
  );
};

export default BlogSmallCard;
