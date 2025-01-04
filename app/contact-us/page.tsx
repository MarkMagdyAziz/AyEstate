import React from "react";
import Transition from "../transation";
import dynamic from "next/dynamic";
import CardsSection from "@/components/Features/ContactUs/CardsSection";
import ContactForm from "@/components/Features/ContactUs/ContactForm";
import Heading from "@/components/Features/ContactUs/Heading";

const ContactUsMap = dynamic(
  () => import("@/components/Features/ContactUs/Map"),
);

function ContactUs() {
  return (
    <div className="mb-[42px] mt-[30px] flex flex-col items-start justify-center px-5 lg:mb-[224px] lg:mt-[120px] lg:items-center lg:px-[120px]">
      <Transition className="flex flex-col items-center justify-center">
        <Heading />
      </Transition>
      <ContactUsMap />
      <CardsSection />
      <h6 className="mt-[100px] w-full text-center text-2xl font-bold capitalize lg:text-[44px] lg:leading-[57px]">
        Contact our sales team
      </h6>
      <p className="mt-4 px-5 text-center text-sm text-[#7F879E] lg:mt-[30px] lg:text-lg">
        Built for every team across your company, Jobify Enterprise boosts
        productivity with <br className="hidden lg:block" /> upgraded security
        and account support. Contact us today to unlock:
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactUs;
