import React from "react";
import CardIcon from "@/components/shared/CardIcon";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/app/_lib/clsx";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const cardsData = [
  {
    icon: "icons/user-green.svg",
    contact: "+(1) 2345 6789",
    paragraph: "Our 24/7 Customer Services",
  },
  {
    icon: "icons/document-text-green.svg",
    contact: "support@ayestate.com",
    paragraph: "Alternative way to get anwser faster.",
  },
  {
    icon: "icons/global-green.svg",
    contact: "Real Estate Management",
    paragraph: "Our community ready to help you",
  },
];
async function HaveQuestion() {
  return (
    <div className="mt-[50px] flex flex-col flex-wrap gap-y-5 md:flex-row lg:flex-row lg:flex-nowrap lg:gap-x-[20px] lg:gap-y-0">
      {cardsData.map((cardContent) => {
        return (
          <CardIcon key={cardContent.contact}>
            <div
              className={cn(
                "flex w-full flex-col items-center justify-center px-3 py-4 lg:p-6",
                plusJakartaSans.className,
              )}
            >
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F9F9F9] lg:h-[76px] lg:w-[76px]">
                <Image
                  alt={cardContent.contact}
                  src={cardContent.icon}
                  width={0}
                  height={0}
                  style={{ height: "auto", width: "22px", color: "#B7E08A" }}
                />
              </div>
              <h3 className="mt-4 text-base font-bold leading-[20px] lg:mt-[30px] lg:text-2xl lg:font-bold">
                {cardContent.contact}
              </h3>
              <p className="mt-2 text-center text-sm leading-[22px] text-app-grey-text lg:mt-4 lg:text-lg">
                {cardContent.paragraph}
              </p>
            </div>
          </CardIcon>
        );
      })}
    </div>
  );
}

export default HaveQuestion;
