import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

interface PercentageBoxProps {
  percentage: number;
  title: string;
}
function PercentageBox(props: PercentageBoxProps) {
  return (
    <div className="border-l-2 ps-8 md:min-w-[373px]">
      <h2
        className="text-[56px] font-bold leading-[73px] md:text-[80px] md:leading-[104px]"
        style={roboto.style}
      >
        {props.percentage}%
      </h2>
      <h4 className="mt-2 text-[18px] font-bold leading-[25.2px] md:text-[20px] md:leading-[28px]">
        {props.title}
      </h4>
    </div>
  );
}

export default PercentageBox;
