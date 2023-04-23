import { ITabComp } from "@/types";
import { Tabs } from "antd";
import React from "react";

const TabComp = ({ items, onChange, className = "" }: ITabComp) => {
  return (
    <Tabs
      className={`tab-custom ${className}`}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default TabComp;
