import Card from "@/components/Features/AboutUs/Card";
import Header from "@/components/Features/AboutUs/Header";
import Services from "@/components/Features/AboutUs/Services";
import StartProject from "@/components/Features/landing/StartProject";
import Image from "next/image";
import React from "react";

const CARD_DATA = [
    {image:"/about-us/Juan-Ordonez.png",name:"Muhammad Abubakar A.",title:"Director"},
    {image:"/about-us/JamesBarr.png",name:"Alexander Isak",title:"CEO"},
    {image:"/about-us/Preview.png",name:"Christina W.",title:"CEO"},
     {image:"/about-us/Juan-Ordonez.png",name:"Muhammad Abubakar A.",title:"Director"},
    {image:"/about-us/JamesBarr.png",name:"Alexander Isak",title:"CEO"},
    {image:"/about-us/Preview.png",name:"Christina W.",title:"CEO"},
    {image:"/about-us/JamesBarr.png",name:"Alexander Isak",title:"CEO"},
    {image:"/about-us/Preview.png",name:"Christina W.",title:"CEO"}

]
export const metadata = {
  title: "About Us",
};

async function Page() {
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

        <section className="lg:mb-[178px] grid w-full grid-cols-1 gap-y-5 lg:gap-16 lg:grid-cols-4 lg:gap-8 lg:mt-[120px]">
         {CARD_DATA.map((cardItemData)=>{
            return <Card {...cardItemData} key={cardItemData.name}/>
         })}
        </section>

      </section>
      <StartProject/>

    </div>
  );
}

export default Page;
