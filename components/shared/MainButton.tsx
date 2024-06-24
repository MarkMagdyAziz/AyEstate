import React from "react";
import clsx from "clsx";
interface MainButtonProps {
  title: string;
  classes?: string;
}
function MainButton(props: MainButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl bg-app-primary px-6 py-3 text-base font-semibold text-black",
        props.classes,
      )}
    >
      {props.title}
    </button>
  );
}

export default MainButton;
