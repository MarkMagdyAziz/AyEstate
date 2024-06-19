import React from "react";
import SmplifyCard from "../../shared/SmplifyCard";

function Simplify() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-[335px]">
        <h6 className="mb-3 text-base font-semibold">Simplify</h6>
        <h2 className="text-[32px] font-bold leading-[38px]">
          Streamline Your Property Buying or Selling Process
        </h2>
        <p className="mt-5 text-base">
          Our website provides a step-by-step guide to help you seamlessly
          navigate the process of buying or selling property. From finding the
          perfect property to closing the deal, we've got you covered.
        </p>
        <div className="my-12 grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <SmplifyCard
            key={1}
            imagePath="/simplify-placeholder-1.png"
            imageAlt="Find Your Dream Property placeholder"
            title="Find Your Dream Property"
            description="Browse through a wide selection of properties that match your preferences and requirements."
          />
          <SmplifyCard
            key={2}
            imagePath="/simplify-placeholder-2.png"
            imageAlt="Connect with Trusted Agents placeholder 2"
            title="Connect with Trusted Agents"
            imageRounded={true}
            description="Our platform connects you with experienced and reliable real estate agents who will guide you through the process."
          />
          <SmplifyCard
            key={3}
            imagePath="/simplify-placeholder-3.png"
            imageAlt="simplify placeholder 3"
            title="Negotiate and Close the Deal"
            imageRounded={true}
            description="Our experts will assist you in negotiating the best terms and ensuring a smooth closing process."
          />
        </div>
      </div>
    </div>
  );
}

export default Simplify;
