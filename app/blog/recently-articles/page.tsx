import React from "react";
import BlogViewArticles from "@/components/Features/Blog/BlogViewArticles";
import TipCard from "@/components/Features/Blog/TipCard";
import ListingPagination from "@/components/Features/Listings/ListingPagination";

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
async function RecentlyArticlesPage() {
  return (
    <div className="mb-[50px] mt-[30px] flex flex-col items-start justify-center px-5 lg:mb-[100px] lg:mt-0 lg:items-center lg:px-[120px]">
      <BlogViewArticles
        title="Recently Articles"
        paragraph="Newest update article from AyEstate"
        paragraphClassName="hidden lg:block text-[18px] leading-[32px] font-normal"
        className="justify-between font-bold"
        buttonClassName="font-semibold h-[30px] flex justify-center items-center lg:hidden"
      />

      <section className="grid grid-cols-1 items-stretch gap-y-5 lg:grid-cols-3 lg:gap-x-[30px]">
        {cardsData.map((card, index) => (
          <TipCard
            key={index} // Use index or a unique ID if available
            title={card.title}
            date={card.date}
            imageSrc={card.imageSrc}
            paragraph={card.paragraph}
          />
        ))}
        {cardsData.map((card, index) => (
          <TipCard
            key={index} // Use index or a unique ID if available
            title={card.title}
            date={card.date}
            imageSrc={card.imageSrc}
            paragraph={card.paragraph}
          />
        ))}
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

      <div className="col-span-2 mt-[50px] flex w-full items-center justify-between gap-2 md:justify-center lg:gap-x-11">
        <ListingPagination />
      </div>
    </div>
  );
}

export default RecentlyArticlesPage;
