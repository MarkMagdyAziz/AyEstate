import React from "react";
import Transition from "../transation";
import dynamic from "next/dynamic";
import CardsSection from "@/components/Features/Faqs/CardsSection";
import Questions from "@/components/Features/landing/Questions";
import HaveQuestion from "@/components/Features/Faqs/HaveQuestion";

const SearchInput = dynamic(() => import("@/components/shared/SearchInput"));

function Faqs() {
  return (
    <div className="mb-[100px] mt-[30px] flex flex-col items-start justify-center px-5 lg:mb-[224px] lg:mt-[120px] lg:items-center lg:px-[120px]">
      <Transition className="flex flex-col items-center justify-center">
        <h2 className="mb-4 w-full text-start text-2xl font-bold capitalize lg:mb-[50px] lg:text-center lg:text-[44px] lg:leading-[57px]">
          Helping you is our priority
        </h2>
        <SearchInput
          placeholder="Search question"
          className="lg:max-w-[820px]"
        />
        <p className="max-w-[300px] px-8 text-center text-xs leading-[19px] text-app-grey-text lg:max-w-full lg:text-base lg:font-semibold lg:leading-[20px]">
          *We are collect your searching keywords to improve our FAQ
        </p>
      </Transition>

      <CardsSection />
      <Transition>
        <Questions
          showFAQ={false}
          title="Our Website"
          subTitle="Frequently asked question about my account"
          className="lg:grid-cols-1"
          firstQuestionBody="Our website lists a variety of properties including residential homes, apartments, condos, townhouses, commercial properties, vacant land, and more. You can filter your search based on your preferences."
        />
      </Transition>
      <Transition>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold lg:text-[44px] lg:leading-[58px]">
            Still Have a question?
          </h3>
          <p className="mt-4 px-5 text-sm leading-[22px] text-app-grey-text lg:mt-[30px] lg:w-[730px] lg:text-lg">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We will answer to you shortly!
          </p>
        </div>
        <HaveQuestion />
      </Transition>
    </div>
  );
}

export default Faqs;
