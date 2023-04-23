import React from 'react';

interface Props {
    label?: string;
    type?: string;
    name?: string;
    value?: string;
}

const InputText = ({ label, type, name, value }: Props) => {
    return (
        <div className="mx-3 mb-10">
            <span className="text-sm text-ravi-bg-primary ml-4">
                {label || 'Họ và tên đầy đủ'}
            </span>
            <input
                type={type || 'text'}
                className="w-full border-b border-ravi-text-primary outline-none px-4 text-base text-ravi-text-1F1B16"
                name={name}
                value={value}
            />
        </div>
    );
};

export default InputText;
