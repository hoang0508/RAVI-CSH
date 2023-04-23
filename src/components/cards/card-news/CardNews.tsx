import Image from 'next/image';
import React from 'react';
import img1 from '../../../assets/images/card-image.png';

const CardNews = () => {
    return (
        <div>
            <div className="border rounded-xl relative pb-4 m-3">
                <div className="">
                    <Image src={img1} alt="###" className="rounded-xl" />
                </div>
                <div className="mt-4 mx-4 ">
                    <div className="flex font-normal text-sm text-ravi-text-817567">
                        <span className="">04/11/2022</span>
                        <li className="ml-4">3 PHÚT ĐỌC</li>
                    </div>
                    <span className="font-medium text-xl line-clamp-2 my-2">
                        Công bố kết quả sự kiện bốc thăm đợt 3 &quot;Tri ân cuối
                        năm, Bốc thăm trúng lớn&quot;
                    </span>
                    <span className="font-normal text-base line-clamp-2">
                        Vừa qua, vào ngày 07.04, sự kiện bốc thăm đợt 3, đồng
                        thời là sự kiện cuối cùng trong chuỗi chương trình “Tri
                        ân cuối năm - Bốc thăm trúng lớn” đã được tổ chức dành
                        cho các Khách hàng tham dự sự kiện từ ngày 01/03/2023
                        đến hết ngày 31/03/2023. Sự kiện được diễn ra tại văn
                        phòng Công ty Cổ phần Đầu tư
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardNews;
