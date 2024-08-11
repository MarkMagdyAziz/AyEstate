import React from "react";
import Link from "next/link";
interface FooterLinksProps {
  links: string[];
  title: string;
}
function FooterLinks(props: FooterLinksProps) {
  return (
    <div className="mt-[30px] flex flex-col">
      <h6 className="text-[16px] font-bold leading-[21px] text-white">
        {props.title}
      </h6>
      <ul className="mt-4 flex flex-col gap-3 text-[#7F879E] lg:mt-8">
        {props.links.map((link) => {
          return (
            <li key={link}>
              <Link href="#">{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinks;
