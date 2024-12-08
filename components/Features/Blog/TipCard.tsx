import Image from "next/image";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  date: string;
  title: string;
  paragraph: string;
  imageSrc: string;
}
const TipCard: React.FC<Props> = ({ date, paragraph, title, imageSrc }) => {
  return (
    <div>
      <div className={"relative mx-auto min-h-[260px] w-full"}>
        <Image
          alt={title}
          src={imageSrc}
          fill
          className="rounded-xl object-cover lg:rounded-[50%]"
          sizes="(max-width: 768px) 335px, (max-width: 1024px) 80px, 80px"
        />
      </div>
      <p className="mt-4 flex gap-x-7 text-xs text-[#7F879E]">
        <span>{date}</span>
        <span>{title}</span>
      </p>
      <h5 className="mr-6 mt-[6px] text-sm font-bold leading-[18.2px]">
        {paragraph}
      </h5>
    </div>
  );
};

export default TipCard;
