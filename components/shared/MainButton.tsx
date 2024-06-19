import React from "react";
interface MainButtonProps {
  title: string;
}
function MainButton(props: MainButtonProps) {
  return (
    <button className="rounded-xl bg-app-primary px-6 py-3 text-base font-semibold text-black">
      {props.title}
    </button>
  );
}

export default MainButton;
