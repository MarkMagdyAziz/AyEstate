import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardIcon: React.FC<Props> = ({ children }) => {
  return (
    <section className="h-[167px] w-[335px] overflow-hidden rounded-[16px] border-[1.5px] border-[#F9F9F9] lg:h-[260px] lg:w-[388px]">
      {children}
    </section>
  );
};

export default CardIcon;
