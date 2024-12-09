import Image from "next/image";
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
      <Image
        src={props.iconPath}
        alt={props.iconAlt}
        width={64}
        height={64}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
      />
      <h4 className="text-2xl font-bold">{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default PropertyCard;
