import Image from "next/image";
import React from "react";

interface SimplifyCardProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
  imageRounded?: boolean;
}
function SmplifyCard(props: SimplifyCardProps) {
  return (
    <div className="flex max-w-[335px] flex-col items-center justify-center lg:max-w-[405px]">
      {/* <img
        src={props.imagePath}
        alt={props.imageAlt}
        className={`md:w-[405px] ${props.imageRounded ? "rounded-md" : ""}`}
      /> */}
      <div
        className={`relative h-[198px] w-[320px] md:h-[240px] md:w-[340px] lg:w-[405px]`}
      >
        <Image
          src={props.imagePath}
          alt={props.imageAlt}
          fill
          className="rounded-md object-cover md:rounded-xl" // Updated to use CSS class
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 340px, 405px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </div>
      <h4 className="mb-5 mt-6 text-[24px] font-bold leading-[34px] md:text-[32px] md:leading-[42px]">
        {props.title}
      </h4>
      <p className="text-base">{props.description}</p>
    </div>
  );
}

export default SmplifyCard;
