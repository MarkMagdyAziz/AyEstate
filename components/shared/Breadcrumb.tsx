import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  items: { page: string; link: string }[];
}
function Breadcrumb({ items }: Props) {
  return (
    <ul className="flex gap-x-2 text-xs leading-5">
      {items.map((item, index) => {
        const lastItem = items.length - 1 === index;

        return (
          <li
            key={item.page}
            className={`flex items-center justify-center gap-2 ${lastItem ? "text-app-black2" : "text-[#1D9E34]"}`}
          >
            <Link href={item.link}>{item.page}</Link>
            {!lastItem && (
              <Image
                alt="right arrow icon"
                src={"/arrow-right.svg"}
                height={0}
                width={0}
                className="h-3 w-3"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
