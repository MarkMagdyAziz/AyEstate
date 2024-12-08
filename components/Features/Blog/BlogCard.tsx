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
}
const BlogCard: React.FC<Props> = ({
  className,
  date,
  paragraph,
  title,
  subParagraph,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto min-h-[317px] w-full lg:size-20 lg:min-h-20 lg:rounded-[50%]",
        className,
      )}
    >
      <Image
        alt="house blog"
        src={`/blog/house-blog.png`}
        fill
        className="rounded-xl object-cover lg:rounded-[50%]"
        sizes="(max-width: 768px) 320px, (max-width: 1024px) 80px, 80px"
      />
      <article className="absolute bottom-4 left-4 text-white">
        <div className="flex items-center justify-start gap-x-3 leading-[15.6px] opacity-75">
          <span>{date}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-white"></span>
          <span>{title}</span>
        </div>
        <h4 className="mt-[6px] text-sm font-bold leading-[18.2px]">
          {paragraph}
        </h4>
        {subParagraph && (
          <p className="mt-2 text-xs text-[#FFFFFFB2] opacity-70">
            {subParagraph}
          </p>
        )}
      </article>
    </div>
  );
};

export default BlogCard;
