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
    paragraph:
      "Renters are still moving-these markets are where you should be investing",
  },
  {
    title: "Invest",
    date: "21 January 2024",
    imageSrc: "/blog/aa4.png",
    paragraph:
      "Every major u.s. city where it’s more expensive to rent than buy",
  },
];
async function BlogPage() {
  return (
    <div className="mb-[50px] mt-[30px] flex flex-col items-start justify-center px-5 lg:mb-[224px] lg:items-center lg:px-[120px]">
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
      <BlogViewArticles
        title="Popular Articles"
        paragraph="We provide blog that help start your career on jobify"
      />

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
      <BlogViewArticles
        title="Recent Articles"
        paragraph="Newest update article from jobify"
      />
      <section className=":grid-cols-1 grid gap-y-5 lg:grid-cols-3 lg:gap-x-[30px]">
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

export default BlogPage;
