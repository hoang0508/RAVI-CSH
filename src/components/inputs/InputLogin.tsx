import React from 'react';
import { IconWarning } from '../icons';

interface Props {
    error?: boolean;
}

const InputLogin = ({ error = false }: Props) => {
    return (
        <div
            className={`mx-3 mb-10 h-14 bg-ravi-bg-EFE0CF rounded-t-[4px] relative ${
                error ? 'border-b-2 border-red-700' : ''
            }`}
        >
            <input
                type="number"
                placeholder=" "
                className="w-full outline-none bg-ravi-bg-EFE0CF text-base text-ravi-text-1F1B16  px-4 mt-6 phoneInput"
            />
            <label
                className={`text-ravi-bg-primary ml-4 absolute top-4 left-0 transition-all ${
                    error ? 'text-red-700' : ''
                }`}
            >
                Số điện thoại
            </label>
            {error ? (
                <span className="absolute -bottom-6 left-0 text-xs font-normal text-red-700 ml-4 ">
                    Vui lòng nhập số điện thoại
                </span>
            ) : (
                <span className="absolute -bottom-9 left-0 text-xs font-normal mx-4  ">
                    Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số
                    điện thoại.
                </span>
            )}

            {error && (
                <span className="absolute top-4 right-3">
                    <IconWarning />
                </span>
            )}
        </div>
    );
};

export default InputLogin;
