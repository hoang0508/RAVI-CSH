import React, { useEffect } from 'react';
import {
    IconArrowRight,
    IconCancel,
    IconCheckCircle,
    IconClockLoader,
} from '../icons';

const Contract = () => {
    let status = 'success';

    const StatusComp = () => {
        let jsx = (
            <span
                className={`rounded inline-flex items-center mb-2 p-2 ${
                    status === 'warning'
                        ? 'bg-ravi-bg-FFE5CC text-ravi-text-CC6600'
                        : status === 'success'
                        ? 'bg-ravi-bg-D5FAD1 text-ravi-text-1A8A0F'
                        : 'bg-ravi-bg-F0F0F0 text-ravi-text-666666'
                }`}
            >
                {status === 'warning' ? (
                    <IconClockLoader />
                ) : status === 'success' ? (
                    <IconCheckCircle />
                ) : (
                    <IconCancel />
                )}
                <span className="ml-2">
                    {' '}
                    {status === 'warning'
                        ? 'Đang xử lí '
                        : status === 'success'
                        ? 'Đã hoàn thành '
                        : 'Đã hủy '}
                </span>
            </span>
        );
        return jsx;
    };

    return (
        <div className="rounded-xl bg-ravi-text-FFF8F3 border border-ravi-text-D2C4B4 m-4 pb-14">
            <div className="header m-4 ">
                <StatusComp />
                <p className="text-base font-medium">RAVI hợp đồng booking</p>
            </div>
            <div className="body border-y border-ravi-text-D2C4B4">
                <div className="item grid grid-cols-2 my-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Mã hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">92456</span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Số hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">
                            RAVI20230310
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Mã hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">92456</span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Số hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">
                            RAVI20230310
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Loại hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">Hợp đồng</span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Nguồn hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">Outside</span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Chi nhánh
                        </p>
                        <span className="text-ravi-text-black25">Cầu Giấy</span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Ngày tạo hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">
                            16/03/2023
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Tên khách hàng
                        </p>
                        <span className="text-ravi-text-black25">
                            Nguyễn Văn Nam
                        </span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Số điện thoại
                        </p>
                        <span className="text-ravi-text-black25">
                            01234567889
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Tổng số ngày
                        </p>
                        <span className="text-ravi-text-black25">
                            200 ngày nghỉ dưỡng
                        </span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Số ngày còn lại
                        </p>
                        <span className="text-ravi-text-black25">
                            200 ngày nghỉ dưỡng
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Trạng thái hợp đồng
                        </p>
                        <span className="text-ravi-text-black25">
                            Đang xử lí{' '}
                        </span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Loại thẻ
                        </p>
                        <span className="text-ravi-text-black25">
                            RAVI COUPLE
                        </span>
                    </div>
                </div>
                <div className="item grid grid-cols-2 mb-4">
                    <div className="left pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Cần thanh toán
                        </p>
                        <span className="text-ravi-text-black25">
                            200.000.000đ{' '}
                        </span>
                    </div>
                    <div className="right border-[#D2C4B4] border-l pl-4">
                        <p className="text-sm text-ravi-text-4F4539">
                            Bạn đã thanh toán
                        </p>
                        <span className="text-ravi-text-black25">
                            20.500.000đ
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-ravi-text-primary float-right flex items-center mr-4 mt-4 font-medium">
                Xem chi tiết
                <span className="ml-4">
                    <IconArrowRight />
                </span>
            </div>
        </div>
    );
};

export default Contract;
