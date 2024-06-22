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
    <div className="max-[335px] flex flex-col items-center justify-center lg:max-w-[405px]">
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        className={`md:w-[405px] ${props.imageRounded ? "rounded-md" : ""}`}
      />
      <h4 className="mb-5 mt-6 text-[24px] font-bold leading-[34px] md:text-[32px] md:leading-[42px]">
        {props.title}
      </h4>
      <p className="text-base">{props.description}</p>
    </div>
  );
}

export default SmplifyCard;
