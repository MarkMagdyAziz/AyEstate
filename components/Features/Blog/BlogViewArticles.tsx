import { cn } from "@/app/_lib/clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  title: string;
  paragraph: string;
  buttonClassName?: string;
  paragraphClassName?: string;
}

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const BlogViewArticles: React.FC<Props> = ({
  className,
  paragraph,
  title,
  buttonClassName,
  paragraphClassName,
}) => {
  return (
    <div
      className={cn(
        "mb-[30px] mt-[50px] flex w-full items-center justify-center gap-x-20 lg:mb-[50px] lg:mt-[100px] lg:w-full lg:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 lg:gap-3">
        <h3 className="text-base font-bold leading-[20px] text-[#1B2124] lg:text-[32px] lg:leading-[41.6px]">
          {title}
        </h3>
        <p
          className={cn(
            "text-xs leading-[20px] text-[#7F879E] lg:text-lg",
            paragraphClassName,
          )}
        >
          {paragraph}
        </p>
      </div>
      <Link
        href="/blog/recently-articles"
        className={cn(
          "max-h-fit min-w-fit rounded-xl border border-[#B7E08A] bg-transparent px-3 py-[6px] text-sm font-medium text-[#111111] lg:border-[#111111] lg:text-lg lg:font-semibold",
          plusJakartaSans.className,
          buttonClassName,
        )}
      >
        View All
      </Link>
    </div>
  );
};

export default BlogViewArticles;
