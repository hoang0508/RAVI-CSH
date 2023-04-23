import React, { useState } from "react";
import { IconModal } from "../icons";

interface ShowModalBottomProps {
  show: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
  className?: string;
  children?: React.ReactNode;
  title: string;
}

const ModalBottom = ({
  setShow,
  show,
  className = "",
  title,
  children,
}: ShowModalBottomProps) => {
  return (
    <div>
      <div
        onClick={() => setShow(false)}
        className={`${
          show
            ? "fixed inset-0 w-ful h-full bg-[rgba(0,0,0,0.5)] duration-300 ease-linear z-20"
            : ""
        }`}
      ></div>
      <div
        className={`bg-white fixed bottom-0 right-0 left-0 w-full  duration-300 ease-linear rounded-t-2xl z-30 ${
          show
            ? "opacity-100 visible translate-y-0 duration-300 ease-linear"
            : "opacity-0 invisible translate-y-full"
        } ${className}`}
      >
        <div className="flex items-center gap-x-5 border-b border-ravi-border-D2C4B4 py-[18px] px-[18px]">
          <span onClick={() => setShow(false)}>
            <IconModal />
          </span>
          <h3 className="text-[22px] font-normal text-ravi-text-black25">
            {title}
          </h3>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalBottom;
