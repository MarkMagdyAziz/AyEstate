"use client";
import Image from "next/image";
import React, { useState } from "react";
interface QuestionProps {
  title: string;
  body?: string;
}
function Question(props: QuestionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[18px] border-2 border-[#F9F9F9] p-5 text-start">
      <div className="flex w-full items-center justify-between">
        <h5 className="w-[237px] text-[14px] font-bold capitalize leading-[18px]">
          {props.title}
        </h5>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-fit w-fit transform transition-transform duration-300"
        >
          <Image
            src={props.body && isOpen ? "/minus.svg" : "/add.svg"}
            alt="minus icon"
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </button>
      </div>
      {props?.body && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="mt-[6px] text-[14px] font-normal leading-[22px] text-[#7F879E]">
            {props.body}
          </p>
          <div className="mt-[10px]">
            <button className="text-[16px] font-bold leading-[20px] text-app-primary lg:text-[#3860E2]">
              Read More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
