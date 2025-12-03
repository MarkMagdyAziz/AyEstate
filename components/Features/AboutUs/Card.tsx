import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  name: string;
}
const Card: React.FC<CardProps> = ({ name, title }) => {
  return (
    <div className="flex flex-col lg:w-[304px] lg:justify-center lg:text-center">
      <div
        className={`relative mx-auto min-h-[260px] w-full lg:size-20 lg:min-h-20 lg:rounded-[50%]`}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/29c7/3f4c/85a7b06709b9438e0628282894f0c85b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oq9tbVztXhIQAPZ~1NlYlufS0VS97ui150Yhjv2G~xUIxdyoqFz3b1Hg0qGjeKrX7o2bN-PM0WepEPtlAoeikd-EpAPB3e67v6hjMnALmsGOxPF~G~qRuWBiIN6N093WBASmUpfVLGtSGTxSVy0a0VM3O0-mPr1Z5xtpej3P1qWkWCjydeBlsv~fLl0gHHuDcO0azvkWBjfZV4U034V3U3mXCPzBJ3SBXxLEMNlbA4J7f5CzQjWnjxKgTiqEukQfAJQfpF3iJr4~M0pll0S2vYnZwoHRarD8Bvw-KfOKlKUy7IC3KGzxg4gQ~WU7hb9VSsHOJOb1ohbkMBVSGe2vow__"
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
