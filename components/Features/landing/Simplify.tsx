import React from "react";
import SmplifyCard from "../../shared/SmplifyCard";

function Simplify() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-[50px] text-center md:py-20">
      <section className="max-w-[335px] md:max-w-[768px]">
        <h6 className="mb-3 text-base font-semibold">Simplify</h6>
        <h2 className="text-[32px] font-bold leading-[38px] md:text-[48px] md:leading-[58px]">
          Streamline Your Property Buying or Selling Process
        </h2>
        <p className="mt-5 text-base md:text-[18px] md:leading-[27px]">
          Our website provides a step-by-step guide to help you seamlessly
          navigate the process of buying or selling property. From finding the
          perfect property to closing the deal, we&lsquo;ve got you covered.
        </p>
      </section>
      <div className="my-12 grid grid-cols-1 items-baseline justify-center gap-12 sm:grid-cols-2 md:w-full md:px-16 lg:my-20 lg:grid-cols-3">
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
  );
}

export default Simplify;
