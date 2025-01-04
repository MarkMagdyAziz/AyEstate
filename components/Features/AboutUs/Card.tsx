import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  name: string;
}
const Card: React.FC<CardProps> = ({ image, name, title }) => {
  return (
    <div className="flex flex-col lg:w-[304px] lg:justify-center lg:text-center">
      <div
        className={`relative mx-auto min-h-[260px] w-full lg:size-20 lg:min-h-20 lg:rounded-[50%]`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-xl object-cover lg:rounded-[50%]" // Updated to use CSS class
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 80px, 80px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </div>
      <h6 className="mt-4 text-base font-bold lg:mt-6" data-testid="name">
        {name}
      </h6>
      <p className="mt-2 text-[#534F69] lg:mt-0" data-testid="title">
        {title}
      </p>
      <p className="mx-4 hidden text-base lg:mt-4 lg:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <ul className="mt-7 hidden w-full items-center justify-center gap-x-4 lg:flex">
        <li>
          <Image
            src="icons/LinkedIn.svg"
            alt="linkedIn icon"
            width={24}
            height={24}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </li>
        <li>
          <Image src="icons/X.svg" alt="X icon" width={24} height={24} />
        </li>
        <li>
          <Image
            src="icons/Dribble.svg"
            alt="Dribble icon"
            width={24}
            height={24}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </li>
      </ul>
    </div>
  );
};

export default Card;
