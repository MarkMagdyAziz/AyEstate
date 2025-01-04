import { cn } from "@/app/_lib/clsx";
import React from "react";
interface Props {
  label: string;
  placeholder: string;
  astrike?: boolean;
  type: string;
  className?: string;
  parentClassName?: string;
}
const FormInput: React.FC<Props> = ({
  label,
  astrike,
  type,
  placeholder,
  className,
  parentClassName,
}) => {
  return (
    <div className={cn("flex w-full flex-col lg:w-[49%]", parentClassName)}>
      <label className="text-sm font-bold capitalize lg:text-base">
        {label} {astrike && <span className="text-[#E60019]">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          className={cn("mt-3 w-full rounded-2xl bg-[#F6F8F9] p-4", className)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={cn("mt-3 w-full rounded-2xl bg-[#F6F8F9] p-4", className)}
        />
      )}
    </div>
  );
};

export default FormInput;
