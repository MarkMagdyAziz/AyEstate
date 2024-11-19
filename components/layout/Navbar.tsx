"use client";
import React from "react";
import { Playball } from "next/font/google";
import MainButton from "../shared/MainButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const playPoll = Playball({
  weight: "400",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Listings" },
  { href: "/about-us", label: "About Us" },
  { href: "#", label: "Company" },
  { href: "#", label: "Blog" },
];

function Navbar() {
  const path = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          {navLinks.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`relative ${path === link.href ? "text-app-primary" : ""}`}
              >
                {link.label}
                {path === link.href && (
                  <motion.span
                    className="absolute left-0 top-7 h-[3px] w-full bg-app-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
      >
        <MainButton title="Contact Us" className="hidden lg:block" />
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
