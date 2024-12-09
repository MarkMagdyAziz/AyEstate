import { IBlog } from "@/app/_core/interfaces/common";
import { db } from "@/app/_lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import components
const BlogViewArticles = dynamic(
  () => import("@/components/Features/Blog/BlogViewArticles"),
);
const TipCard = dynamic(() => import("@/components/Features/Blog/TipCard"));
const ListingPagination = dynamic(
  () => import("@/components/Features/Listings/ListingPagination"),
);

async function RecentlyArticlesPage() {
  const cardsQuerySnapShot = await getDocs(collection(db, "blogs-cards"));
  const cardsData: IBlog[] = cardsQuerySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IBlog, "id">),
    id: doc.id,
  }));

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
            key={index}
            title={card.title}
            date={card.date}
            imageSrc={card.imageSrc}
            paragraph={card.paragraph}
          />
        ))}
        {cardsData.map((card, index) => (
          <TipCard
            key={index + cardsData.length}
            title={card.title}
            date={card.date}
            imageSrc={card.imageSrc}
            paragraph={card.paragraph}
          />
        ))}
        {cardsData.map((card, index) => (
          <TipCard
            key={index + 2 * cardsData.length}
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
