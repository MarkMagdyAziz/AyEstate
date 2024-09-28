import React from "react";
import { IDepartment } from "@/app/_core/interfaces/common";
import DepartmentDetailBadge from "./DepartmentDetailBadge";
import Image from "next/image";
import MainButton from "@/components/shared/MainButton";

function DepartmentDetail(department: IDepartment) {
  return (
    <section className="px-5 py-[50px]">
      <h1 className="text-[40px] font-bold leading-[48px]">
        {department.title}
      </h1>
      <p className="mb-6 mt-5 text-base">
        Experience the ultimate in beachfront luxury with breathtaking ocean
        views.
      </p>
      <div className="mb-12 mt-6 flex gap-x-2 text-sm font-semibold">
        <DepartmentDetailBadge title="Beachfront" />
        <DepartmentDetailBadge title="Modern" />
        <DepartmentDetailBadge title="Spacious" />
      </div>
      <div className="mb-12 grid grid-cols-2 gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold leading-[25px]">Client</h4>
          <h6 className="text-base">John Doe</h6>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold leading-[25px]">Date</h4>
          <h6 className="text-base">March 2023</h6>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold leading-[25px]">Location</h4>
          <h6 className="text-base capitalize">{department.location}</h6>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-lg font-bold leading-[25px]">Price</h4>
          <h6 className="text-base">{department.price}</h6>
        </div>
      </div>
      <Image
        alt={department.title}
        src={`/properties/${department.image}`}
        width={335}
        height={188}
        className="h-[188px] w-[335px] rounded-xl"
      />
      <h3 className="mt-[50px] text-4xl font-bold leading-[43px]">
        Stunning <br /> Property with Luxurious Amenities
      </h3>
      <article className="text-base">
        <p className="mt-5">
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>
        <p className="mt-4">
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus.
        </p>
        <p className="mt-4">
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
          Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
          ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
          posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
          adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
          cursus diam.
        </p>
      </article>
      <Image
        alt={department.title}
        src={`/properties/${department.image}`}
        width={335}
        height={335}
        className="mt-12 h-[335px] w-[335px] rounded-xl"
      />
      <Image
        alt={department.title}
        src={`/properties/${department.image}`}
        width={335}
        height={335}
        className="mt-6 h-[335px] w-[335px] rounded-xl"
      />
      <Image
        alt={department.title}
        src={`/properties/${department.image}`}
        width={335}
        height={335}
        className="mt-6 h-[335px] w-[335px] rounded-xl"
      />
      <div className="mt-[50px]">
        <h6 className="text-base font-semibold">Luxury</h6>
        <h2 className="mb-5 mt-3 text-4xl font-bold leading-[43px]">
          Experience the Perfect Blend of Comfort and <br /> Style
        </h2>
        <p className="text-base">
          Welcome to our stunning property! With a beautiful image gallery,
          immersive virtual tour, and outstanding features, this is the perfect
          place to call home. Explore the spacious rooms, modern amenities, and
          convenient location that make this property truly exceptional.
        </p>
        <div className="mt-6 flex gap-x-6">
          <MainButton title="Learn More" />
          <button className="flex items-center justify-center gap-2 text-base">
            Contact
            <Image
              src="/chevron-right.svg"
              width={0}
              height={0}
              className="h-auto w-auto"
              alt="left arrow icon"
            />
          </button>
        </div>
      </div>
      <Image
        alt={department.title}
        src={`/properties/${department.image}`}
        width={335}
        height={335}
        className="mt-12 h-[348px] w-[335px] rounded-xl"
      />
    </section>
  );
}

export default DepartmentDetail;
