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
        "flex w-full items-center justify-start gap-x-3",
        className,
      )}
    >
      <div className="relative size-[100px] min-w-[100px]">
        <Image
          alt={title + " image"}
          src={imageSrc}
          fill
          className="rounded-xl object-cover lg:rounded-[50%]"
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 80px, 80px"
        />
      </div>

      <section className="text-xs">
        <div className="flex items-center justify-start gap-x-3 leading-[15.6px] opacity-75">
          <span>{date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-white"></span>
          <span>{title}</span>
        </div>
        <h4
          className={cn(
            "mt-[6px] font-bold leading-[18.2px]",
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
