import FindPropertyCard from "@/components/shared/FindPropertyCard";
import MainButton from "@/components/shared/MainButton";
import { propertiesCard } from "@/core/data/landing";
import React from "react";

function FindProperties() {
  return (
    <div className="flex flex-col items-center justify-center py-[50px] text-center md:mb-[190px] md:px-16 md:pt-20">
      <section className="w-[335px] md:w-full">
        <h6 className="text-base font-semibold">Find</h6>
        <h2 className="mt-3 text-[32px] font-bold leading-[38px] md:mt-4 md:text-[48px] md:leading-[58px]">
          Properties
        </h2>
        <p className="mt-5 text-base md:mt-6 md:text-lg">
          Explore our curated list of properties and find your dream home.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-20 lg:grid-cols-3 xl:grid-cols-4">
          {propertiesCard.map((property, i) => {
            return (
              <FindPropertyCard
                backgroundImage={property.image}
                price={property.price}
                subTitle={property.subTitle}
                title={property.title}
                key={property.title + i}
              />
            );
          })}
        </div>
        <div className="mt-[18px] md:hidden">
          <MainButton title="View All" />
        </div>
      </section>
    </div>
  );
}

export default FindProperties;
