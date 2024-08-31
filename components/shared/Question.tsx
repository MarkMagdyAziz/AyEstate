import Image from "next/image";
import React from "react";
interface QuestionProps {
  title: string;
  body?: string;
}
function Question(props: QuestionProps) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[18px] border-2 border-[#F9F9F9] p-5 text-start">
      <div className="flex w-full items-center justify-between">
        <h5 className="w-[237px] text-[14px] font-bold capitalize leading-[18px]">
          {props.title}
        </h5>
        <Image
          src={props.body ? "/minus.svg" : "/add.svg"}
          alt="minus icon"
          width={20}
          height={20}
        />
      </div>
      {props?.body && (
        <>
          <p className="mt-[6px] text-[14px] font-normal leading-[22px] text-[#7F879E]">
            {props.body}
          </p>
          <div className="mt-[10px]">
            <button className="text-[16px] font-bold leading-[20px] text-app-primary lg:text-[#3860E2]">
              Read More
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Question;
