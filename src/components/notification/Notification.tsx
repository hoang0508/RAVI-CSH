import React from "react";

const Notification = () => {
  return (
    <div className="shadow-shadownNoti bg-white rounded-xl p-4 hover:bg-gradient-notification">
      <div className="flex items-center justify-between mb-4">
        <span className="text-ravi-text-4F4539 font-normal text-sm">
          24.03.2023 - 10:32
        </span>
        <span className="w-[10px] h-[10px] rounded-full bg-ravi-bg-BA1A1A"></span>
      </div>
      <h3 className="mb-2 font-medium text-xl text-ravi-text-black25">
        Thông báo
      </h3>
      <p className="text-ravi-text-4F4539 font-normal text-base">Body text</p>
    </div>
  );
};

export default Notification;
