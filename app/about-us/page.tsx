import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import Transition from "../transation";

export const metadata = {
  title: "About Us",
};

// Dynamically import components for lazy loading
const Achievement = dynamic(
  () => import("@/components/Features/AboutUs/Achievement/Achievement"),
);
const Header = dynamic(() => import("@/components/Features/AboutUs/Header"));
const Services = dynamic(
  () => import("@/components/Features/AboutUs/Services"),
);
const StartProject = dynamic(
  () => import("@/components/Features/landing/StartProject"),
);
const CardsList = dynamic(
  () => import("@/components/Features/AboutUs/CardsList"),
);

async function Page() {
  return (
    <>
      <Transition>
        <div className={`relative min-h-[240px] w-full lg:min-h-[500px]`}>
          <Image
            src="/large-screen/83c7c8e601370339697b0812d226cb7b.jpg"
            alt="about us slider"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 340px, 405px"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </Transition>
      <section className="mx-3 flex flex-col items-center justify-center p-5 lg:mx-[100px]">
        <Transition>
          <Header />
          <Services />
        </Transition>

        <Transition>
          <CardsList />
        </Transition>
      </section>

      <Transition>
        <Achievement />
      </Transition>

      <Transition>
        <StartProject />
      </Transition>
    </>
  );
}

export default Page;
