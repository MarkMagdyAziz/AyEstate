import Achievement from "@/components/Features/AboutUs/Achievement/Achievement";
import Header from "@/components/Features/AboutUs/Header";
import Services from "@/components/Features/AboutUs/Services";
import StartProject from "@/components/Features/landing/StartProject";
import Image from "next/image";
import React from "react";
import Transition from "../transation";
import CardsList from "@/components/Features/AboutUs/CardsList";

export const metadata = {
  title: "About Us",
};

async function Page() {
  return (
    <>
      <Transition>
        <div className={`relative min-h-[240px] w-full lg:min-h-[500px]`}>
          <Image
            src="/large-screen/83c7c8e601370339697b0812d226cb7b.jpg"
            alt="about us slider"
            fill
            className="object-cover" // Updated to use CSS class
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 340px, 405px"
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
