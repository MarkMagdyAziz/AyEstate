"use client";
import React from "react";
import { Playball } from "next/font/google";
import MainButton from "../shared/MainButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const playPoll = Playball({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const path = usePathname();
  return (
    <nav
      className={`flex w-full items-center justify-between bg-white p-5 ${path === "/" ? "lg:bg-[#F6F3F3]" : ""} lg:px-[100px]`}
    >
      <h5 className="text-[28px] leading-9" style={playPoll.style}>
        AyEstate
      </h5>
      <Image
        className="lg:hidden"
        width={24}
        height={24}
        src="/menu.svg"
        alt="menu icon"
      />
      <div className="hidden text-[18px] font-semibold leading-[23px] text-[#7F879E] lg:block">
        <ul className="flex gap-[50px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/departments">Listings</Link>
          </li>
          <li>
            <Link href="#">Company</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <MainButton title="Contact Us" classes="hidden lg:block" />
    </nav>
  );
}

export default Navbar;
