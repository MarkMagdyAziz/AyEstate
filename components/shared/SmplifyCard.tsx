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
    <div className="flex flex-col items-center justify-center">
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        className={props.imageRounded ? "rounded-md" : ""}
      />
      <h4 className="mb-5 mt-6 text-[24px] font-bold leading-[34px]">
        {props.title}
      </h4>
      <p className="text-base">{props.description}</p>
    </div>
  );
}

export default SmplifyCard;
