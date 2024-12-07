import Image from "next/image";
import React from "react";

interface AchievementFeatureProps {
  title: string;
  subTitle?: string;
}
const AchievementFeature: React.FC<AchievementFeatureProps> = ({
  title,
  subTitle = "Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus pretium consectetur eros.",
}) => {
  return (
    <>
      <div>
        <Image
          src="/medal-star.svg"
          alt="Dribble icon"
          width={36}
          height={36}
        />
        <h6
          data-testid="title"
          className="mb-[12px] mt-[24px] text-xl font-bold leading-[28px] lg:text-[28px] lg:leading-[36px]"
        >
          {title}
        </h6>
        <p data-testid="sub-title" className="me-16 text-sm text-[#C7C1EA]">
          {subTitle}
        </p>
      </div>
    </>
  );
};

export default AchievementFeature;
