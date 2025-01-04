import React from "react";
import { IDepartment } from "@/app/_core/interfaces/common";
import DepartmentDetailBadge from "./DepartmentDetailBadge";
import Image from "next/image";
import MainButton from "@/components/shared/MainButton";

function DepartmentDetail(department: IDepartment) {
  return (
    <section className="px-5 py-[50px]">
      <header className="flex flex-col md:mb-20 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h1 className="text-[40px] font-bold leading-[48px] md:text-[56px] md:leading-[67px]">
            {department.title}
          </h1>
          <p className="mb-6 mt-5 text-base md:text-lg">
            Experience the ultimate in beachfront luxury with breathtaking ocean
            views.
          </p>
          <div className="mb-12 mt-6 flex gap-x-2 text-sm font-semibold md:mb-0">
            <DepartmentDetailBadge title="Beachfront" />
            <DepartmentDetailBadge title="Modern" />
            <DepartmentDetailBadge title="Spacious" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-y-8 md:mb-0">
          <div className="flex min-w-[151px] flex-col gap-y-1 md:min-w-[216px]">
            <h4 className="text-lg font-bold leading-[25px]">Client</h4>
            <h6 className="text-base">John Doe</h6>
          </div>
          <div className="flex min-w-[151px] flex-col gap-y-1 md:min-w-[216px]">
            <h4 className="text-lg font-bold leading-[25px]">Date</h4>
            <h6 className="text-base">March 2023</h6>
          </div>
          <div className="flex min-w-[151px] flex-col gap-y-1 md:min-w-[216px]">
            <h4 className="text-lg font-bold leading-[25px]">Location</h4>
            <h6 className="text-base capitalize">{department.location}</h6>
          </div>
          <div className="flex min-w-[151px] flex-col gap-y-1 md:min-w-[216px]">
            <h4 className="text-lg font-bold leading-[25px]">Price</h4>
            <h6 className="w-fit text-base">
              {department.price}
              <hr className="mt-[-2px] h-[1.4px] bg-black" />
            </h6>
          </div>
        </div>
      </header>
      <div className="relative h-[188px] w-full overflow-hidden rounded-xl lg:h-[738px]">
        <Image
          alt={department.title}
          src={`/properties/${department.image}`}
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container without distortion
          className="rounded-xl"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </div>
      <div className="mt-[100px] md:grid md:grid-cols-2 md:gap-x-20">
        <article className="text-base">
          <h3 className="text-4xl font-bold leading-[43px] md:text-5xl md:leading-[58px]">
            Stunning <br className="md:hidden" /> Property
            <br className="hidden md:block" /> with Luxurious
            <br className="hidden md:block" /> Amenities
          </h3>
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
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
            gravida enim posuere cursus diam.
          </p>
        </article>
        <section>
          <div className="relative mt-12 h-[335px] w-full overflow-hidden rounded-xl md:mt-0 lg:h-[768px]">
            <Image
              alt={department.title}
              src={`/properties/${department.image}`}
              layout="fill" // Fills the parent container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
            />
          </div>
          <div className="relative mt-6 h-[335px] w-full overflow-hidden rounded-xl lg:h-[768px]">
            <Image
              alt={department.title}
              src={`/properties/${department.image}`}
              layout="fill" // Fills the parent container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
            />
          </div>
          <div className="relative mt-6 h-[335px] w-full overflow-hidden rounded-xl lg:h-[768px]">
            <Image
              alt={department.title}
              src={`/properties/${department.image}`}
              layout="fill" // Fills the parent container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
            />
          </div>
        </section>
      </div>
      <article className="mt-12 items-stretch justify-between md:grid md:grid-cols-2 md:items-center">
        <div>
          <h6 className="text-base font-semibold">Luxury</h6>
          <h2 className="mb-5 mt-3 text-4xl font-bold leading-[43px] md:text-5xl md:leading-[48px]">
            Experience the Perfect <br className="hidden md:block" /> Blend of
            Comfort and <br /> Style
          </h2>
          <p className="text-base md:mt-6 md:text-lg">
            Welcome to our stunning property! With a beautiful image gallery,
            immersive virtual tour, and outstanding features, this is the
            perfect place to call home. Explore the spacious rooms, modern
            amenities, and convenient location that make this property truly
            exceptional.
          </p>
          <div className="mt-6 flex gap-x-6 md:mt-[52px]">
            <MainButton title="Learn More" />
            <button className="flex items-center justify-center gap-2 text-base">
              Contact
              <Image
                src="icons/chevron-right.svg"
                width={0}
                height={0}
                className="h-auto w-auto"
                alt="left arrow icon"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
              />
            </button>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="relative h-[335px] w-[605px] overflow-hidden rounded-xl lg:h-[605px]">
            <Image
              alt={department.title}
              src={`/properties/${department.image}`}
              layout="fill" // Fills the parent container
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-xl"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default DepartmentDetail;
