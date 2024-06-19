import React from "react";
import PropertyCard from "../../shared/PropertyCard";
import MainButton from "../../shared/MainButton";

function DiscoverProperty() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-[50px]">
      <div className="w-[335px]">
        <h6 className="mb-3 text-base font-semibold">Discover</h6>
        <h2 className="text-[32px] font-bold leading-[38px]">
          Find Your Dream Property with Us
        </h2>
        <p className="mb-12 mt-[20px] text-sm font-normal">
          At our real estate agency, we offer a range of services to help you
          with your property needs. Whether you're looking to buy, sell, or get
          a valuation, our experienced team is here to assist you every step of
          the way.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PropertyCard
          key={1}
          iconPath="/card-property-icon.svg"
          iconAlt="property icon"
          title="Property Buying and Selling"
          description="We provide expert guidance for buying and selling properties, ensuring a smooth and successful transaction."
        />
        <PropertyCard
          key={2}
          iconPath="/card-property-icon.svg"
          iconAlt="property icon"
          title="Property Valuation Services"
          description="Our team of certified appraisers offers accurate property valuations to help you make informed decisions."
        />
        <PropertyCard
          key={3}
          iconPath="/card-property-icon.svg"
          iconAlt="property icon"
          title="Real Estate Investment Advice"
          description="Get expert advice on real estate investment strategies to maximize your returns."
        />
      </div>
      <div className="mt-10 flex w-full justify-start gap-6 ps-6">
        <MainButton title="Learn More" />
        <button className="flex items-center justify-center gap-2 text-[16px] leading-6">
          Contact
          <img src="/chevron-right.svg" alt="left arrow icon" />
        </button>
      </div>
    </section>
  );
}

export default DiscoverProperty;
