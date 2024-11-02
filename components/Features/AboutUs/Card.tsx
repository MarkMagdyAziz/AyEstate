import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  name: string;
}
const Card: React.FC<CardProps> = ({ image, name, title }) => {
  return (
    <div className="flex flex-col lg:justify-center lg:text-center lg:w-[304px]">
        <div className={`relative min-h-[260px] lg:min-h-20 w-full lg:size-20 lg:rounded-[50%] mx-auto`}>
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl object-cover lg:rounded-[50%]" // Updated to use CSS class
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 80px, 80px"
          />
        </div>
        <h6 className="mt-4  lg:mt-6 text-base font-bold">{name}</h6>
        <p className="mt-2 lg:mt-0 text-[#534F69]">{title}</p>
        <p className="lg:mt-4 hidden lg:block mx-4 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <ul className=" gap-x-4 w-full justify-center items-center mt-7 hidden lg:flex">
          <li><Image src="/LinkedIn.svg" alt="linkedIn icon" width={24} height={24}/></li>
          <li><Image src="/X.svg" alt="X icon" width={24} height={24}/></li>
          <li><Image src="/Dribble.svg" alt="Dribble icon" width={24} height={24}/></li>
        </ul>
    </div>
  );
};

export default Card;
