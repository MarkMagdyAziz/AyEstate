import React from "react";
import classes from "./CustomCheckbox.module.css"; // Import regular stylesheet

function CustomCheckbox({
  id,
  name,
  value,
  label = "Luxury Building",
}: {
  id: string;
  name: string;
  value: string;
  label: string;
}) {
  return (
    <div className={classes.formControl}>
      <input type="checkbox" id={id} value={value} name={name} />
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
    </div>
  );
}

export default CustomCheckbox;
