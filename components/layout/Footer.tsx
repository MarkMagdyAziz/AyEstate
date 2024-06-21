import React from "react";
import { Playball, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import FooterLinks from "./FooterLinks";

const playPoll = Playball({
  weight: "400",
  subsets: ["latin"],
});

const plusJakarataSans = Playball({
  weight: ["400"],
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-start bg-[#111111] px-5 py-[50px]">
      <div className="flex w-full flex-col text-start">
        <h2
          className="text-[32px] font-normal leading-[42px] text-white"
          style={playPoll.style}
        >
          AyEstate
        </h2>
        <div className="flex w-[199px] flex-col">
          <span className="mt-[30px] text-[14px] leading-[22px] text-[#7F879E]">
            hello.ayestate@example.com (+1) 2345 6789
          </span>
          <span className="mt-5 text-[14px] leading-[22px] text-[#7F879E]">
            4140 Parker Rd. Allentown, New Mexico 31134
          </span>
        </div>
        <span className="mt-[30px] h-[2px] w-full bg-[#2E334B] pe-5" />
      </div>
      <div
        className={`${"grid w-full grid-cols-2 items-start justify-start gap-[107px]" + plusJakarataSans.className}`}
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
    </footer>
  );
}

export default Footer;
