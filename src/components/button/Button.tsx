import { IButtonTypes } from "@/types";
import React from "react";

const Button = ({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  kind,
}: IButtonTypes) => {
  let defaultClassName = `py-3 px-6 flex items-center justify-center rounded-full font-medium text-base cursor-pointer`;
  switch (kind) {
    case "button-primary":
      defaultClassName = defaultClassName + ` bg-ravi-bg-primary text-white`;
      break;
    case "button-secondary":
      defaultClassName =
        defaultClassName +
        ` border border-ravi-border-817567 bg-white text-ravi-text-primary`;
      break;
    case "button-bar":
      defaultClassName =
        defaultClassName +
        ` bg-ravi-bg-primary text-white max-w-[396px] w-full`;
    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${defaultClassName} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
