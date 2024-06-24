import React from "react";

interface PropertyCardProps {
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}
function PropertyCard(props: PropertyCardProps) {
  return (
    <div className="mx-6 flex max-w-[405px] flex-col gap-5 lg:mx-0">
      <img
        src={props.iconPath}
        className="h-[64px] w-[64px]"
        alt={props.iconAlt}
      />
      <h4 className="text-2xl font-bold">{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default PropertyCard;
