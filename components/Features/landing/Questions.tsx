import MainButton from "@/components/shared/MainButton";
import Question from "@/components/shared/Question";
import React from "react";

function Questions() {
  return (
    <section className="flex items-center justify-center py-[50px] text-center">
      <div className="flex w-[355px] flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold">
          Frequently Asked <br />
          Question
        </h2>
        <p className="mb-6 text-[14px] leading-[22.4px] text-[#7F879E]">
          Did you find the question as you expected?
        </p>
        <div className="flex flex-col gap-5">
          <Question
            title="What Types of properties are available on your website?"
            body="Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo."
          />
          <Question title="How Do i schedule a viewing of a property listed on your website?" />
          <Question title="Can i list my property for sale or rent on your website?" />
          <Question title="What should i consider when buying a home?" />
          <Question title="how do i determine the value of my property?" />
        </div>
        <div className="mt-6 w-full">
          <MainButton
            title="Give A Quote"
            classes="w-full !font-bold text-[12px] leading-[16px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Questions;
