import React from "react";
import { Playball } from "next/font/google";
import MainButton from "../shared/MainButton";
import Link from "next/link";

const playPoll = Playball({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  return (
    <nav
      className={`flex w-full items-center justify-between bg-white p-5 lg:bg-[#F6F3F3] lg:px-[100px]`}
    >
      <h5 className="text-[28px] leading-9" style={playPoll.style}>
        AyEstate
      </h5>
      <img
        className="lg:hidden"
        width={24}
        height={24}
        src="/menu.svg"
        alt="menu icon"
      />
      <div className="hidden text-[18px] font-semibold leading-[23px] text-[#7F879E] lg:block">
        <ul className="flex gap-[50px]">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Listings</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
        </ul>
      </div>
      <MainButton title="Contact Us" classes="hidden lg:block" />
    </nav>
  );
}

export default Navbar;
