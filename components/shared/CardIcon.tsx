import { cn } from "@/app/_lib/clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CardIcon: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "h-[167px] w-[335px] overflow-hidden rounded-[16px] border-[1.5px] border-[#F9F9F9] lg:h-[260px] lg:w-[388px]",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default CardIcon;
