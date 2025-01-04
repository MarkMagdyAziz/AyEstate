import React from "react";
import FormInput from "./FormInput";
import MainButton from "@/components/shared/MainButton";
import CustomCheckbox from "@/components/ui/CustomCheckbox";

function ContactForm() {
  return (
    <div className="mt-7 flex min-h-[796px] w-full flex-col justify-center gap-x-5 gap-y-5 rounded-2xl bg-white p-4 shadow-md lg:min-h-[650px] lg:w-[1111px] lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:p-[30px]">
      <FormInput
        label="Your Name"
        astrike={true}
        type="text"
        placeholder="Enter your name"
      />
      <FormInput
        label="Email"
        astrike={true}
        type="email"
        placeholder="Enter your email"
      />
      <FormInput
        label="phone number"
        astrike={true}
        type="number"
        placeholder="Enter your phone number"
      />
      <FormInput
        label="How Can Our Sales Team Help?"
        astrike={true}
        type="text"
        placeholder="What you want"
      />
      <FormInput
        label="Anything Else You’d Like Us To Know?"
        astrike={true}
        type="textarea"
        placeholder="Type anything"
        className="min-h-[183px]"
        parentClassName="lg:w-full"
      />
      <CustomCheckbox
        label="I agree to Loom's Terms of Service and Privacy Policy."
        name="terms"
        id="terms"
        value="terms"
        labelClassName="text-xs font-base font-medium !text-black"
      />
      <MainButton title="Contact Sales" className="h-fit" />
    </div>
  );
}

export default ContactForm;
