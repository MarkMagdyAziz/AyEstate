"use client";
import Image from "next/image";
import React, { useState } from "react";

export const FiltersSectionWrapper: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="flex justify-between">
        <h6 className="text-base font-bold leading-[22px]">{title}</h6>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-fit w-fit transform transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <Image
            width={12}
            height={12}
            src="/arrow-up.svg"
            alt="arrow down icon"
          />
        </button>
      </div>
      <div
        className={`mt-3 flex flex-col gap-y-3 overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
};

export default FiltersSectionWrapper;
