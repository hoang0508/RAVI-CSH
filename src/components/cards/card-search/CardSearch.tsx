import { IconHeart, IconLocation } from '@/components/icons';
import Image from 'next/image';
import img1 from '../../../assets/images/card-image.png';

const CardSearch = () => {
    return (
        <div className="border rounded-xl m-3">
            <div className="relative">
                <Image src={img1} alt="###" className="rounded-t-xl" />
                <div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-ravi-bg-F9DEBB`}
                >
                    <span className="absolute top-[10px] left-[10px]">
                        <IconHeart />
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
        </div>
    );
};

export default CardSearch;
