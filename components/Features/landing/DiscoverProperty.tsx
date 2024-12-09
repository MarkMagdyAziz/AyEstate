"use client";
import React from "react";
import PropertyCard from "../../shared/PropertyCard";
import MainButton from "../../shared/MainButton";
import Image from "next/image";

function DiscoverProperty() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-[50px] lg:px-16 lg:py-20">
      <div className="mb-12 w-[335px] lg:flex lg:w-full lg:items-baseline lg:justify-between lg:gap-20">
        <div className="lg:w-2/4">
          <h6 className="mb-3 text-base font-semibold lg:mb-4">Discover</h6>
          <h2 className="text-[32px] font-bold leading-[38px]">
            Find Your Dream <br />
            Property with Us
          </h2>
        </div>
        <p className="mt-[20px] text-sm font-normal leading-[21px] lg:w-2/4 lg:text-[18px]">
          At our real estate agency, we offer a range of services to help you
          with your property needs. Whether you&lsquo;re looking to buy, sell,
          or get a valuation, our experienced team is here to assist you every
          step of the way.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
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
      <div className="mt-10 flex w-full justify-start gap-6 ps-6 lg:mt-12 lg:ps-0">
        <MainButton title="Learn More" />
        <button className="flex items-center justify-center gap-2 text-[16px] leading-6">
          Contact
          <Image
            src="/chevron-right.svg"
            width={0}
            height={0}
            className="h-auto w-auto"
            alt="left arrow icon"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
        </button>
      </div>
    </section>
  );
}

export default DiscoverProperty;
