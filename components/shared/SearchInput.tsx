import Image from "next/image";
import React from "react";
import MainButton from "./MainButton";

interface Props {
  placeholder: string;
}
const SearchInput: React.FC<Props> = ({ placeholder }) => {
  return (
    <div className="custom-input-shadow relative min-h-[52px] w-full">
      <input
        className="relative w-full rounded-2xl border px-8 py-4 pl-10"
        type="search"
        placeholder={placeholder}
      />
      <Image
        src="/search-normal.svg"
        className="relative left-2 top-[-25px] -translate-y-1/2"
        alt="search icon"
        width={18}
        height={18}
      />
      <MainButton
        title="Search"
        className="absolute right-1 top-1 hidden rounded-xl px-8 py-3 lg:block"
      />
    </div>
  );
};

export default SearchInput;
