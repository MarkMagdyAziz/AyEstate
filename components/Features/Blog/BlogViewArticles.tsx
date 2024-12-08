import { cn } from "@/app/_lib/clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  title: string;
  paragraph: string;
}

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const BlogViewArticles: React.FC<Props> = ({ className, paragraph, title }) => {
  return (
    <div
      className={cn(
        "mb-[30px] mt-[50px] flex items-center justify-center gap-x-20",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-base font-bold leading-[20px] text-[#1B2124]">
          {title}
        </h3>
        <p className="text-xs leading-[20px] text-[#7F879E]">{paragraph}</p>
      </div>
      <button
        className={cn(
          "max-h-fit min-w-fit rounded-xl border border-[#B7E08A] bg-transparent px-3 py-[6px] text-sm font-medium text-[#111111]",
          plusJakartaSans.className,
        )}
      >
        View All
      </button>
    </div>
  );
};

export default BlogViewArticles;
