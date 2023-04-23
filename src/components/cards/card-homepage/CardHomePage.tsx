import Image from 'next/image';
import React, { useState } from 'react';
import img1 from '../../../assets/images/card-image.png';
import {
    IconArrowRight,
    IconFavorite,
    IconHeart,
    IconLocation,
} from '@/components/icons';

const CardHomePage = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="border rounded-xl pb-10 m-3">
            <div className="relative">
                <Image src={img1} alt="###" className="rounded-xl" />
                <div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full ${
                        isLiked ? 'bg-ravi-bg-F9DEBB' : 'bg-ravi-bg-EFE0CF'
                    }`}
                    onClick={() => setIsLiked(!isLiked)}
                >
                    <span className="absolute top-[10px] left-[10px]">
                        {isLiked ? <IconHeart /> : <IconFavorite />}
                    </span>
                </div>
            </div>
            <div className="mt-4 mx-4">
                <span className="font-medium text-xl">
                    Hasu village by Ravi
                </span>
                <div className="flex mt-2 mb-4">
                    <span className="icon mr-3">
                        <IconLocation />
                    </span>
                    <span className="">Xóm Nước Hang, Hòa Bình</span>
                </div>
            </div>
            <div className="text-ravi-text-primary float-right flex items-center mr-4 font-medium">
                Xem thông tin
                <span className="ml-4">
                    <IconArrowRight />
                </span>
            </div>
        </div>
    );
};

export default CardHomePage;
