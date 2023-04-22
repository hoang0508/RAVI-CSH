import { LayoutProps } from "@/types";
import React from "react";

const LayoutBottom = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <div className="w-full flex items-center justify-center">
        <div className="fixed bottom-0 z-50  flex justify-center items-center max-w-[140px] w-full h-[5px] ml-auto mr-auto mb-[10px] rounded-full bg-ravi-text-black25"></div>
      </div>
    </div>
  );
};

export default LayoutBottom;
