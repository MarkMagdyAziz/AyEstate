import BlogCard from "@/components/Features/Blog/BlogCard";
import Suggested from "@/components/Features/Blog/Suggested";
import SearchInput from "@/components/shared/SearchInput";
import React from "react";
import BlogSmallCard from "@/components/Features/Blog/BlogSmallCard";
import BlogViewArticles from "@/components/Features/Blog/BlogViewArticles";
import TipCard from "@/components/Features/Blog/TipCard";

const blogData = [
  {
    date: "9 Sep 2022",
    paragraph: "The Quick Guide To virtual house flipping",
    title: "Career Tips",
    imageSrc: "/blog/virtual-house.png",
  },
  {
    date: "20 January 2024",
    paragraph: "Expert Home Price Forecasts For 2024 Revised Up",
    title: "Tips",
    imageSrc: "/blog/money-house.png",
  },
  {
    date: "15 January 2024",
    paragraph: "25 Companies Hiring for Remote, Work-From-Home Jobs Right Now",
    title: "Tips",
    imageSrc: "/blog/normal-house.png",
  },
];
async function BlogPage() {
  return (
    <div className="mb-[50px] mt-[30px] flex flex-col items-start justify-center px-5 lg:items-center lg:px-[120px]">
      <h2 className="mb-4 text-center text-2xl font-bold lg:text-[44px] lg:leading-[57px]">
        Our Blog
      </h2>
      <SearchInput placeholder="Search article" />
      <Suggested
        items={["Success Stories", "Tips", "Invest"]}
        className="mb-[50px]"
      />
      <BlogCard
        date="8 Feb 2024"
        title="Success Stories"
        paragraph="From $0 to $40 Million: How a 10-Year Old Orphan Became a Successful Investor"
      />

      <section className="mt-[30px] flex flex-col gap-y-5">
        {blogData.map((blog, index) => (
          <BlogSmallCard
            key={index}
            date={blog.date}
            paragraph={blog.paragraph}
            title={blog.title}
            imageSrc={blog.imageSrc}
          />
        ))}
      </section>

      <BlogViewArticles
        title="Popular Articles"
        paragraph="We provide blog that help start your career on jobify"
      />
      <BlogCard
        date="23 Desember 2023"
        title="Success Stories"
        paragraph="Luxury Living: Exploring High-End Real Estate Markets"
        subParagraph="Feeling like work is a constant source of stress? You..."
      />

      <BlogViewArticles
        title="Recently Articles"
        paragraph="Newest update article from jobify"
      />
      <section className="flex flex-col gap-y-5">
        <TipCard
          title="Tips"
          date="4 February 2024"
          imageSrc="/blog/aa2.png"
          paragraph="15 Reasons Why Real Estate is the best investment"
        />
        <TipCard
          title="Success Stories"
          date="24 January 2024"
          imageSrc="/blog/aa3.png"
          paragraph="Renters are still moving-these markets are where you should be investing"
        />
        <TipCard
          title="Invest"
          date="21 January 2024"
          imageSrc="/blog/aa4.png"
          paragraph="Every major u.s. city where it’s more expensive to rent than buy"
        />
      </section>
    </div>
  );
}

export default BlogPage;
