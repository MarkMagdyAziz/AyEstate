import React from "react";
import CardIcon from "@/components/shared/CardIcon";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/app/_lib/clsx";
import { IContactCard } from "@/app/_core/interfaces/common";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const cardsData: IContactCard[] = [
  {
    icon: "icons/sms.svg",
    title: "Email Us",
    paragraph:
      "Ask us a question by email and we will respond within a few days.",
    subTitle: "Leave a messages",
  },
  {
    icon: "icons/location.svg",
    title: "Official Office",
    paragraph:
      "You can meet us at our office and discuss the details of your question.",
    subTitle: "Get Directions",
  },
  {
    icon: "icons/24-support.svg",
    title: "Customer Support",
    paragraph: "Call us if your question requires an immediate response.",
    subTitle: "+(632) 3892402",
  },
];

function CardsSection() {
  return (
    <div className="mt-[50px] flex flex-col flex-wrap gap-y-5 md:flex-row lg:my-[100px] lg:flex-nowrap lg:gap-x-5 lg:gap-y-0">
      {cardsData.map((cardContent) => {
        return (
          <CardIcon key={cardContent.title} className="h-[201px] lg:h-[333px]">
            <div
              className={cn(
                "flex w-full flex-col items-center justify-center px-3 py-4 lg:p-6",
                plusJakartaSans.className,
              )}
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F9F9F9] lg:h-[76px] lg:w-[76px]">
                <Image
                  alt="user icon"
                  src={cardContent.icon}
                  width={0}
                  height={0}
                  style={{ height: "auto", width: "22px" }}
                />
              </div>
              <h3 className="mt-4 text-base font-bold leading-[20px] lg:mt-[30px] lg:text-2xl lg:font-bold">
                {cardContent.title}
              </h3>
              <p className="mt-2 text-center text-sm leading-[22px] text-app-grey-text lg:mt-4 lg:text-lg">
                {cardContent.paragraph}
              </p>
              <h6
                className={cn(
                  "mt-[16px] text-sm font-bold leading-[18px] text-app-primary lg:mt-6 lg:text-base lg:leading-[20px] lg:text-black",
                  plusJakartaSans.className,
                )}
              >
                {cardContent.subTitle}
              </h6>
            </div>
          </CardIcon>
        );
      })}
    </div>
  );
}

export default CardsSection;
