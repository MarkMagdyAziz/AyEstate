import React from "react";

interface FindPropertyCardProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  price: number;
}
function FindPropertyCard(props: FindPropertyCardProps) {
  return (
    <div className="flex flex-col">
      <div
        className="h-[189px] w-[155px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>
      <h4>{props.title}</h4>
      <h6>{props.subTitle}</h6>
      <span>{props.price}</span>
      <button className="rounded-xl border border-app-primary">
        View Details
      </button>
    </div>
  );
}

export default FindPropertyCard;
