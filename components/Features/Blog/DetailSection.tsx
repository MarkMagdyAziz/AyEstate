import { cn } from "@/app/_lib/clsx";
import Image from "next/image";
import React from "react";

const paragraphClasses =
  "mt-3 lg:mt-[30px] pr-3 text-start text-sm leading-[22px] text-[#7F879E] lg:text-lg";

const h3Classes =
  "flex items-center justify-start gap-x-[6px] text-center text-base font-bold capitalize leading-[20px]";

function DetailSection() {
  return (
    <section className="lg:px-60">
      <p className={cn(paragraphClasses, "lg:mt-[50px]")}>
        Imagine one day living in a luxurious, spacious house with everything
        you could possibly want in life. Now contrast that with red and blue
        lights filling your home, with officers yelling and sirens blaring.
        Then, envision a SWAT team ripping you away from your parents. Although
        it seems far-fetched, this actually happened.
        <br />
        <br />
        <br /> By all accounts, John was living a charmed “trust fund” life, but
        that was quickly all taken away from him. At age 10, that left John
        Mansor a ward of the state—orphaned and alone, with only his brother,
        David, alongside him. He’s spent the last 15-plus years climbing back to
        the top.
      </p>
      <h2 className="mb-3 mt-2 text-start text-base font-bold capitalize leading-[20px] lg:mt-5 lg:text-[32px]">
        A Way Out: Focusing on What Can Be Controlled
      </h2>
      <p className={cn(paragraphClasses, "lg:mt-6")}>
        Living as a ward of the state, life was a real battle of survival for
        John as a child. As he entered middle school, an opportunity for a
        change of scenery changed his perspective on life. He was granted a
        scholarship to a sleepaway camp nestled in the Adirondack Mountains
        called the Raquette Lake Boys Camp.
      </p>
      <h3 className={cn(h3Classes, "mt-2 lg:mt-5")}>
        <span className="inline-block h-[2px] w-[14px] bg-[#F59A74]"></span>
        Preparation Meets Opportunity
      </h3>
      <p className={cn(paragraphClasses)}>
        Upon graduating, the harsh reality of the job market hit him when many
        potential employers believed he lacked relevant experience for an
        entry-level finance job. Undeterred, John entered tech sales. After some
        success, John realized something was missing and couldn’t figure out how
        to get back to the life he used to have as a kid.
      </p>
      <h3 className={cn(h3Classes, "mt-[30px] lg:mt-6")}>
        <span className="inline-block h-[2px] w-[14px] bg-[#F59A74]"></span>
        Luck or Fate? Becoming a Wholesaler
      </h3>
      <p className={cn(paragraphClasses)}>
        There’s a saying that “luck is when preparation meets opportunity.” This
        is the type of luck that those in search of financial freedom seek. They
        don’t wait for something good to happen—they find ways to stack the deck
        in their favor. That’s exactly what John did. Once John set his sights
        on earning more, he began researching ways to create passive income,
        searching the internet for phrases like “how to build generational
        wealth.”
      </p>
      <h3 className={cn(h3Classes, "mt-[30px] lg:mt-6")}>
        <span className="inline-block h-[2px] w-[14px] bg-[#F59A74]"></span>
        The Value of Active Listening
      </h3>
      <p className={cn(paragraphClasses)}>
        Early on, John realized that sales is fundamentally about active
        listening—a skill that involves understanding the other party’s needs,
        concerns, and motivations. With determination, grit, and an inherent
        knack for connecting with people on a genuine level, John recognized the
        power of emotional intelligence in real estate transactions.
      </p>
      <div className="relative mx-auto mt-[96px] min-h-[200px] w-full min-w-[335px] lg:mt-[21px] lg:min-h-[520px] lg:w-[946px]">
        <Image
          alt="House Image"
          src="/blog/virtual-house.png"
          fill
          className="rounded-2xl object-cover lg:rounded-2xl"
          sizes="(max-width: 768px) 335px, (max-width: 1024px) 946px, 520px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </div>
      <h3
        className={cn(
          h3Classes,
          "mt-[30px] font-bold lg:mt-6 lg:text-[32px] lg:leading-[41px]",
        )}
      >
        From $0 to $40 Million in Assets
      </h3>
      <p className={cn(paragraphClasses)}>
        Taking down this eight-unit property marked a shift from quick, active
        income to a more strategic approach focused on creating sustainable
        wealth. With a keen eye for acquisitions and a knack for sourcing
        opportunities, John entered real estate with a commitment to invest back
        into the business.
        <br />
        <br /> The journey was one of bootstrapping, where each step forward was
        a lesson in sourcing, acquiring, and operating the acquired assets. This
        quickly led to rapid growth over a two-year period, where they would
        purchase RV parks and more multifamily properties, such as a 40-unit
        townhouse community on Cape Cod.
      </p>
    </section>
  );
}

export default DetailSection;
