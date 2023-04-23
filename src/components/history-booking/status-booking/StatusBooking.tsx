import {
  IconArrowCircle,
  IconConfirmHistory,
  IconRemoveHistory,
} from "@/components/icons";
import { StatusHistoryBook } from "@/constants/general.status";
import React from "react";

interface IStatusBookingProps {
  typeStatus: string;
}

const StatusBooking = ({ typeStatus }: IStatusBookingProps) => {
  let defaultClassName: string =
    "py-[6px] px-2 inline-flex items-center justify-center gap-x-[10px] w-max rounded text-ravi-text-281800 font-normal text-base";
  let textStatus: string = "";
  let iconStatus: React.ReactNode;
  switch (typeStatus) {
    case StatusHistoryBook.PENDING:
      defaultClassName = defaultClassName + ` bg-ravi-bg-FFDDB0`;
      textStatus = "Đã gửi";
      iconStatus = <IconArrowCircle />;
      break;
    case StatusHistoryBook.APPROVE:
      defaultClassName = defaultClassName + ` bg-ravi-bg-D2EABD`;
      textStatus = "Đã chấp nhận";
      iconStatus = <IconConfirmHistory />;
      break;
    case StatusHistoryBook.REJECT:
      defaultClassName = defaultClassName + ` bg-ravi-bg-EAE1D9`;
      textStatus = "Đã hủy";
      iconStatus = <IconRemoveHistory />;
      break;

    default:
      break;
  }
  return (
    <div className={defaultClassName}>
      <span>{iconStatus}</span>
      <span>{textStatus}</span>
    </div>
  );
};

export default StatusBooking;
