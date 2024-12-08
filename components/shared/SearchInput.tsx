import Image from "next/image";
import React from "react";
import MainButton from "./MainButton";
import { cn } from "@/app/_lib/clsx";

interface Props {
  placeholder: string;
  className?: string;
}
const SearchInput: React.FC<Props> = ({ placeholder, className }) => {
  return (
    <div className={cn("custom-input-shadow relative w-full", className)}>
      <input
        className="relative w-full rounded-2xl border px-8 py-4 pl-10 placeholder:text-base placeholder:text-[#7F879E] lg:placeholder:font-semibold"
        type="search"
        placeholder={placeholder}
      />
      <Image
        src="/search-normal.svg"
        className="relative left-3 top-[-28px] -translate-y-1/2"
        alt="search icon"
        width={18}
        height={18}
      />
      <MainButton
        title="Search"
        className="absolute right-1 top-1 hidden rounded-xl px-10 py-3 lg:block"
      />
    </div>
  );
};

export default SearchInput;
