import Achievement from "@/components/Features/AboutUs/Achievement/Achievement";
import Card from "@/components/Features/AboutUs/Card";
import Header from "@/components/Features/AboutUs/Header";
import Services from "@/components/Features/AboutUs/Services";
import StartProject from "@/components/Features/landing/StartProject";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { db } from "../_lib/firebaseConfig";
import { IAboutUsCard } from "../_core/interfaces/common";

export const metadata = {
  title: "About Us",
};

async function Page() {
  const querySnapShot = await getDocs(collection(db, "about-us"));
  const aboutUsCards: IAboutUsCard[] = querySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IAboutUsCard, "id">), // Explicitly cast data to Department type, omitting the 'id'
    id: doc.id,
  }));
  return (
    <div>
      <div className={`relative min-h-[240px] w-full lg:min-h-[500px]`}>
        <Image
          src="/large-screen/about-us.png"
          alt="about us slider"
          fill
          className="object-cover" // Updated to use CSS class
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 340px, 405px"
        />
      </div>
      <section className="mx-3 flex flex-col items-center justify-center p-5 lg:mx-[100px]">
        <Header />
        <Services />
        {/*  SECTION CARDS */}
        <div className="grid w-full grid-cols-1 gap-y-5 lg:mb-[178px] lg:mt-[120px] lg:grid-cols-4 lg:gap-8">
          {aboutUsCards.map((cardItemData) => {
            return <Card {...cardItemData} key={cardItemData.name} />;
          })}
        </div>
      </section>
      <Achievement />
      <StartProject />
    </div>
  );
}

export default Page;
