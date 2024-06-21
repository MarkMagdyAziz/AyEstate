import Image from "next/image";
import React from "react";

interface FindPropertyCardProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  price: string;
}
function FindPropertyCard(props: FindPropertyCardProps) {
  return (
    <div className="mb-8 flex flex-col">
      <Image
        src={"/properties/" + props.backgroundImage}
        alt={props.title}
        width={155}
        height={189}
        priority={true}
        fetchPriority="low"
      />
      <h4 className="mt-4 text-base font-semibold">{props.title}</h4>
      <h6 className="text-sm font-normal">{props.subTitle}</h6>
      <span className="mb-4 mt-2 text-lg font-semibold">{props.price}</span>
      <button className="rounded-xl border border-app-primary px-5 py-2 text-sm font-semibold">
        View Details
      </button>
    </div>
  );
}

export default FindPropertyCard;
