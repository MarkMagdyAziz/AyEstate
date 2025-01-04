import React from "react";
import classes from "./CustomCheckbox.module.css"; // Import regular stylesheet
import { cn } from "@/app/_lib/clsx";

function CustomCheckbox({
  id,
  name,
  value,
  label = "Luxury Building",
  className,
  labelClassName,
}: {
  id: string;
  name: string;
  value: string;
  label: string;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className={cn(classes.formControl, className)}>
      <input type="checkbox" id={id} value={value} name={name} />
      <label htmlFor={id} className={cn(classes.label, labelClassName)}>
        {label}
      </label>
    </div>
  );
}

export default CustomCheckbox;
