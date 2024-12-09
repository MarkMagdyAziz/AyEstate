import BlogViewArticles from "@/components/Features/Blog/BlogViewArticles";
import DetailHeader from "@/components/Features/Blog/DetailHeader";
import DetailSection from "@/components/Features/Blog/DetailSection";
import TipCard from "@/components/Features/Blog/TipCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardsData = [
  {
    title: "Tips",
    date: "4 February 2024",
    imageSrc: "/blog/aa2.png",
    paragraph: "15 Reasons Why Real Estate is the best investment",
  },
  {
    title: "Success Stories",
    date: "24 January 2024",
    imageSrc: "/blog/aa3.png",
    paragraph: "Renters are still moving-these markets are",
  },
  {
    title: "Invest",
    date: "21 January 2024",
    imageSrc: "/blog/aa4.png",
    paragraph: "Every major u.s. city where it’s more expensive to rent",
  },
];

async function ArticleDetailPage() {
  return (
    <div className="my-[50px] flex flex-col items-start justify-center px-5 text-center lg:mb-[100px] lg:mt-[120px] lg:items-center lg:justify-center lg:px-[100px]">
      <DetailHeader />
      <div className="relative mx-auto mt-[18px] min-h-[260px] w-full min-w-[335px] lg:mt-[50px] lg:min-h-[660px] lg:w-[1240px]">
        <Image
          alt="House Image"
          src="/blog/house-blog.png"
          fill
          className="rounded-2xl object-cover lg:rounded-2xl"
          sizes="(max-width: 768px) 335px, (max-width: 1024px) 350px, 1240px"
        />
      </div>
      <DetailSection />
      <div className="mb-[30px] mt-7 flex w-full justify-between capitalize lg:hidden">
        <h3 className="text-base font-bold leading-[20.8px]">
          Related Articles
        </h3>
        <Link href="#" className="text-sm font-semibold text-app-primary">
          View All
        </Link>
      </div>
      <BlogViewArticles
        title="Recently Articles"
        paragraph="Newest update article from AyEstate"
        titleContainerClassName="items-start"
        paragraphClassName="text-[18px] leading-[32px] font-normal"
        className="hidden justify-between font-semibold lg:flex"
        buttonClassName="font-semibold h-[30px] flex justify-center items-center"
      />
      <section className="grid grid-cols-1 items-stretch gap-y-5 text-start lg:grid-cols-3 lg:gap-x-[30px]">
        {cardsData.map((card, index) => (
          <TipCard
            key={index} // Use index or a unique ID if available
            title={card.title}
            date={card.date}
            imageSrc={card.imageSrc}
            paragraph={card.paragraph}
          />
        ))}
      </section>
    </div>
  );
}

export default ArticleDetailPage;
