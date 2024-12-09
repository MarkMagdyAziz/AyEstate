import { IBlog } from "@/app/_core/interfaces/common";
import { db } from "@/app/_lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Transition from "../../../transation";

// Dynamically import components
const BlogViewArticles = dynamic(
  () => import("@/components/Features/Blog/BlogViewArticles"),
);
const DetailHeader = dynamic(
  () => import("@/components/Features/Blog/DetailHeader"),
);
const DetailSection = dynamic(
  () => import("@/components/Features/Blog/DetailSection"),
);
const TipCard = dynamic(() => import("@/components/Features/Blog/TipCard"));

async function ArticleDetailPage() {
  const cardsQuerySnapShot = await getDocs(collection(db, "blogs-cards"));
  const cardsData: IBlog[] = cardsQuerySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IBlog, "id">),
    id: doc.id,
  }));

  return (
    <div className="my-[50px] flex flex-col items-start justify-center px-5 text-center lg:mb-[100px] lg:mt-[120px] lg:items-center lg:justify-center lg:px-[100px]">
      <Transition>
        <DetailHeader />
      </Transition>
      <div className="relative mx-auto mt-[18px] min-h-[260px] w-full min-w-[335px] lg:mt-[50px] lg:min-h-[660px] lg:w-[1240px]">
        <Image
          alt="House Image"
          src="/blog/house-blog.png"
          fill
          className="rounded-2xl object-cover lg:rounded-2xl"
          sizes="(max-width: 768px) 335px, (max-width: 1024px) 350px, 1240px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
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
            key={index}
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
