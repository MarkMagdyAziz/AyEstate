import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FindPropertyCardProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  price: string;
  id: string;
}
function FindPropertyCard(props: FindPropertyCardProps) {
  return (
    <div className="mb-8 flex flex-col md:items-center md:justify-center">
      <div className="relative h-[189px] w-[155px] md:h-[365px] md:w-[304px]">
        <Image
          src={`/properties/${props.backgroundImage}`}
          alt={props.title}
          fill
          className="rounded-md object-cover md:rounded-xl" // Updated to use CSS class
          priority={false} // Use high priority only for critical images
          sizes="(max-width: 768px) 155px, 304px" // Adjust sizes for responsive design
        />
      </div>
      <h4 className="mt-4 text-base font-semibold md:text-[18px] md:leading-[27px]">
        {props.title}
      </h4>
      <h6 className="text-sm font-normal">{props.subTitle}</h6>
      <span className="mb-4 mt-2 text-lg font-semibold md:text-[20px] md:leading-[30px]">
        {props.price}
      </span>
      <Link
        href={"departments/" + props.id}
        className="rounded-xl border border-app-primary px-5 py-2 text-sm font-semibold md:w-[304px] lg:border-app-black2"
      >
        View Details
      </Link>
    </div>
  );
}

export default FindPropertyCard;
