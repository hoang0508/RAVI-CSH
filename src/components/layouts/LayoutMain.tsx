import React from "react";
import { Navigation } from "./navigation";
import { LayoutProps } from "@/types";

const LayoutMain = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <div className="fixed bottom-0 w-full  bg-white py-[10px] border-t border-ravi-border-D2C4B4">
        <Navigation />
      </div>
    </div>
  );
};

export default LayoutMain;
