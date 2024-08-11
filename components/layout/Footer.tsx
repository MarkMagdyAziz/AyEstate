import React from "react";
import { Playball } from "next/font/google";
import FooterLinks from "./FooterLinks";

const playPoll = Playball({
  weight: "400",
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-[50px] lg:pb-8 lg:pe-[172px] lg:ps-[100px] lg:pt-[100px]">
      <div className="flex flex-col items-center justify-start lg:flex-row lg:items-baseline lg:justify-center xl:gap-[230px]">
        <section className="flex w-full flex-col text-start">
          <h2
            className="text-[32px] font-normal leading-[42px] text-white"
            style={playPoll.style}
          >
            AyEstate
          </h2>
          <div className="flex w-[199px] flex-col">
            <span className="mt-[30px] text-[14px] leading-[22px] text-[#7F879E] lg:mt-[34px]">
              hello.ayestate@example.com (+1) 2345 6789
            </span>
            <span className="mt-5 text-[14px] leading-[22px] text-[#7F879E] lg:mt-6">
              4140 Parker Rd. Allentown,{" "}
              <br className="hidden lg:inline-block" /> New Mexico 31134
            </span>
          </div>
          <span className="mt-[30px] h-[2px] w-full bg-[#2E334B] pe-5 lg:hidden" />
        </section>
        <div
          className={`${"grid w-full grid-cols-2 items-start justify-start gap-[107px] lg:min-w-fit lg:grid-cols-4 lg:gap-20"}`}
        >
          <FooterLinks links={["Listings", "About us", "Blog"]} title="Pages" />
          <FooterLinks
            links={["Properties", "FAQ", "Contact Us"]}
            title="Support"
          />
          <FooterLinks
            links={[
              "Terms of Services",
              "Terms and Condition",
              "Complaints Process",
              "Privacy Policy",
            ]}
            title="Legal"
          />
          <FooterLinks links={["Desktop App", "Mobile App"]} title="Platform" />
        </div>
      </div>
      <h6 className="mt-[31px] text-center text-[18px] leading-[28px] text-[#F3F3F3]">
        Copyright © AyEstate | Designed by AY Studio
      </h6>
    </footer>
  );
}

export default Footer;
