import React from "react";
import { IconClendar, IconLineVoucher } from "../icons";
import Image from "next/image";
import VouncherImage from "../../assets/images/vouncher-image.png";

const Voucher = () => {
  return (
    <>
      <div className="w-full bg-white rounded">
        <div className="relative">
          <div className="py-4  mx-4 border-b border-ravi-border-d2">
            <div className="py-[6px] px-2 bg-ravi-bg-d2 inline-block">
              <span className="text-sm">Quà tặng của bạn</span>
            </div>
          </div>
          <div className="py-4 px-4 flex items-center gap-x-3">
            <div className="h-[72px] max-w-[84px] rounded flex-shrink-0">
              <Image
                src={VouncherImage}
                alt="vouncher-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-base line-clamp-1 mb-1">
                Voucher quyền nghỉ 3N2Đ - Quà tặng
              </h3>
              <div className="flex flex-col gap-y-1 text-ravi-text-4F4539 font-normal text-sm">
                <span className="">Loại voucher: SAKANA</span>
                <span>Mã voucher: RAVI3N2Đ</span>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-2/4 top-[80%] -translate-y-2/4 -translate-x-2/4">
              <IconLineVoucher />
            </span>
          </div>
          <div className="flex justify-between items-center py-5 px-5">
            <div className="flex gap-x-[10px] items-center">
              <span>
                <IconClendar />
              </span>
              <span className="font-normal text-ravi-text-4F4539 text-sm">
                HSD: 07/12/2024
              </span>
            </div>
            <span className="text-ravi-text-primary font-medium text-base">
              Sử dụng
            </span>
          </div>
          <div className="absolute bg-ravi-bg-f0f0f0 h-8 top-[80%] left-0 -translate-y-2/4 w-[15px] border border-transparent border-l-0  rounded-tr-full rounded-br-full" />
          <div className="absolute bg-ravi-bg-f0f0f0  h-8 top-[80%] right-0 -translate-y-2/4 w-[15px] border border-transparent border-r-0 rounded-tl-full rounded-bl-full" />
        </div>
      </div>
    </>
  );
};

export default Voucher;
