import { cn } from "@/app/_lib/clsx";
import MainButton from "@/components/shared/MainButton";
import Question from "@/components/shared/Question";
import React from "react";
interface Props {
  title: React.ReactNode & string;
  subTitle: string;
  showFAQ: boolean;
  className?: string;
  firstQuestionBody: string;
}
const Questions: React.FC<Props> = ({
  subTitle,
  title,
  showFAQ,
  className,
  firstQuestionBody,
}) => {
  return (
    <div className="flex items-center justify-center py-[50px] text-center lg:py-[100px]">
      <section className="flex w-[355px] flex-col items-center justify-center lg:w-full">
        {showFAQ && (
          <p className="mb-5 hidden text-[18px] leading-[24px] text-[#F59A74] lg:block lg:font-semibold">
            FAQ
          </p>
        )}
        <h2 className="mb-4 text-2xl font-bold lg:mb-[30px] lg:text-[44px] lg:leading-[57px]">
          {title}
        </h2>
        <p className="mb-6 text-[14px] leading-[22.4px] text-[#7F879E] lg:mb-[53px]">
          {subTitle}
        </p>

        <div
          className={cn(
            "grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:px-[100px]",
            className,
          )}
        >
          <Question
            title="What Types of properties are available on your website?"
            body={firstQuestionBody}
            titleClassName={!showFAQ ? "w-full" : ""}
          />
          <Question
            title="How Do i schedule a viewing of a property listed on your website?"
            titleClassName={!showFAQ ? "w-full" : ""}
          />
          <Question
            title="Can i list my property for sale or rent on your website?"
            titleClassName={!showFAQ ? "w-full" : ""}
          />
          <Question
            title="What should i consider when buying a home?"
            titleClassName={!showFAQ ? "w-full" : ""}
          />
          <Question
            title="how do i determine the value of my property?"
            titleClassName={!showFAQ ? "w-full" : ""}
          />
        </div>
        <div className="mt-6 w-full md:mt-[66px]">
          <MainButton
            title="Give A Quote"
            className="w-full text-[12px] !font-bold leading-[16px] lg:w-fit"
          />
        </div>
      </section>
    </div>
  );
};

export default Questions;
