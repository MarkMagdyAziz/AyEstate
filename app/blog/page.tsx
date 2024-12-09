import dynamic from "next/dynamic";
import React from "react";
import Transition from "../transation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../_lib/firebaseConfig";
import { IBlog } from "../_core/interfaces/common";

// Dynamically import components
const BlogCard = dynamic(() => import("@/components/Features/Blog/BlogCard"));
const Suggested = dynamic(() => import("@/components/Features/Blog/Suggested"));
const SearchInput = dynamic(() => import("@/components/shared/SearchInput"));
const BlogSmallCard = dynamic(
  () => import("@/components/Features/Blog/BlogSmallCard"),
);
const BlogViewArticles = dynamic(
  () => import("@/components/Features/Blog/BlogViewArticles"),
);
const TipCard = dynamic(() => import("@/components/Features/Blog/TipCard"));

async function BlogPage() {
  const blogQuerySnapShot = await getDocs(collection(db, "blogs"));
  const blogData: IBlog[] = blogQuerySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IBlog, "id">),
    id: doc.id,
  }));

  const cardsQuerySnapShot = await getDocs(collection(db, "blogs-cards"));
  const cardsData: IBlog[] = cardsQuerySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IBlog, "id">),
    id: doc.id,
  }));

  return (
    <div className="mb-[50px] mt-[30px] flex flex-col items-start justify-center px-5 lg:mb-[224px] lg:items-center lg:px-[120px]">
      <Transition className="flex flex-col items-center justify-center">
        <h2 className="mb-4 w-full text-center text-2xl font-bold lg:text-[44px] lg:leading-[57px]">
          Our Blog
        </h2>
        <SearchInput
          placeholder="Search article name"
          className="lg:max-w-[820px]"
        />
        <Suggested
          items={["Success Stories", "Tips", "Invest"]}
          className="mb-[50px] ms-2 lg:mb-[100px] lg:ms-0"
        />
      </Transition>
      <Transition>
        <div className="w-full lg:flex lg:items-center lg:gap-x-[30px]">
          <BlogCard
            imageSrc="/blog/house-blog.png"
            date="8 Feb 2024"
            title="Success Stories"
            paragraph="From $0 to $40 Million: How a 10-Year Old Orphan Became a Successful Investor"
            className="capitalize"
          />
          <section className="mt-[30px] flex flex-col gap-y-5 lg:mt-0 lg:w-[44%] lg:items-baseline lg:justify-start lg:gap-[30px]">
            {blogData.map((blog, index) => (
              <BlogSmallCard
                key={index}
                date={blog.date}
                paragraph={blog.paragraph}
                title={blog.title}
                imageSrc={blog.imageSrc}
                className="capitalize"
              />
            ))}
          </section>
        </div>
      </Transition>
      <Transition>
        <BlogViewArticles
          title="Popular Articles"
          paragraph="We provide blog that help start your career on jobify"
        />
      </Transition>

      <Transition>
        <section className="lg:flex lg:justify-between lg:gap-x-[30px]">
          <BlogCard
            imageSrc="/blog/aa6.png"
            date="23 Desember 2023"
            title="Success Stories"
            paragraph="Luxury Living: Exploring High-End Real Estate Markets"
            subParagraph="Feeling like work is a constant source of stress? You’re not..."
            className="lg:h-[502px] lg:w-[605px]"
          />
          <BlogCard
            imageSrc="/blog/aa7.png"
            date="9 Nov 2023"
            title="Tips"
            paragraph="Short vs. Long-Term Real Estate Investing"
            subParagraph="Whether you’re speaking with the recruiter or you're final..."
            className="hidden lg:block lg:h-[502px] lg:w-[605px]"
          />
        </section>
      </Transition>
      <BlogViewArticles
        title="Recent Articles"
        paragraph="Newest update article from jobify"
      />
      <Transition>
        <section className=":grid-cols-1 grid gap-y-5 lg:grid-cols-3 lg:gap-x-[30px]">
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
      </Transition>
    </div>
  );
}

export default BlogPage;
