import { cn } from "@/app/_lib/clsx";
import React from "react";

interface Props {
  children?: React.ReactNode;
  items: string[];
  className?: string;
}
const Suggested: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn("flex items-center gap-x-4", className)}>
      <h6 className="text-[#7F879E]">Suggested:</h6>
      <ul className="flex gap-x-4 text-[#3860E2]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggested;
