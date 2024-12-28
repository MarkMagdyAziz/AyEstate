import React from "react";
import CardIcon from "@/components/shared/CardIcon";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/app/_lib/clsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/_lib/firebaseConfig";
import { IFaqCard } from "@/app/_core/interfaces/common";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

async function CardsSection() {
  const faqsCardsQuerySnapShot = await getDocs(collection(db, "faqs"));
  const cardsData: IFaqCard[] = faqsCardsQuerySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IFaqCard, "id">),
    id: doc.id,
  }));

  return (
    <div className="mt-[50px] flex flex-col flex-wrap gap-y-5 md:flex-row lg:mb-[100px] lg:mt-[100px] lg:flex-nowrap lg:gap-x-5 lg:gap-y-0">
      {cardsData.map((cardContent) => {
        return (
          <CardIcon key={cardContent.title}>
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
            </div>
          </CardIcon>
        );
      })}
    </div>
  );
}

export default CardsSection;
