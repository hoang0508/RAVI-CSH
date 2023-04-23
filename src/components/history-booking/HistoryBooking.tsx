import React from "react";
import HistoryImage from "../../assets/images/history-booking-image.png";
import Image from "next/image";

import StatusBooking from "./status-booking/StatusBooking";
import {
  IconClendarV1History,
  IconClendarV2History,
  IconLiveHistory,
  IconUsersHistory,
} from "../icons";

interface IHistoryBooking {
  statusHistoryBook: string;
}

const HistoryBooking = ({ statusHistoryBook }: IHistoryBooking) => {
  return (
    <div className="bg-ravi-bg-FFF8F3 border border-ravi-border-D2C4B4 rounded">
      <div className="border-b border-ravi-border-D2C4B4 py-4 mx-4 flex flex-col gap-y-2">
        <StatusBooking typeStatus={statusHistoryBook} />
        <span className="text-ravi-text-4F4539 text0=-base font-medium">
          Hợp đồng: RAVI20230310
        </span>
      </div>
      <div className="flex gap-x-3 py-4 px-4">
        <div className="flex-shrink-0 h-[138px]">
          <Image
            src={HistoryImage}
            alt="history-image"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1  max-w-[205px] w-full">
          <h3 className="text-xl font-medium mb-2">Hasu Village by Ravi</h3>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-[10px] text-ravi-text-4F4539 ">
              <span>
                <IconClendarV1History />
              </span>
              <span className="text-sm font-normal">T3, 25 tháng 4</span>
            </div>
            <div className="flex items-center gap-x-[10px] text-ravi-text-4F4539 ">
              <span>
                <IconLiveHistory />
              </span>
              <span className="text-sm font-normal">7 đêm</span>
            </div>
            <div className="flex items-center gap-x-[10px] text-ravi-text-4F4539 ">
              <span>
                <IconClendarV2History />
              </span>
              <span className="text-sm font-normal">T3, 18 tháng 4</span>
            </div>
            <div className="flex items-center gap-x-[10px] text-ravi-text-4F4539 ">
              <span>
                <IconUsersHistory />
              </span>
              <span className="text-sm font-normal">1 phòng, 2 người lớn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBooking;
