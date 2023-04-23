import { IconArrowRight } from '../icons';

interface Props {
    icon?: any;
    label?: string;
    arrow?: any;
    border?: any;
    borderBottom?: any;
}

const InputSearch = ({ arrow, label, icon, border, borderBottom }: Props) => {
    return (
        <div
            className={`flex items-center mx-3 mb-10 h-14 ${
                borderBottom ? 'border-b border-ravi-text-817567' : ''
            } ${
                border
                    ? 'bg-ravi-text-FFF8F3 border-ravi-text-817567 border rounded-[4px]'
                    : ''
            }`}
        >
            <span className="flex-none mx-3">{icon}</span>
            <label className="flex-1 font-normal">{label || 'Label'}</label>
            {arrow && (
                <span className="flex-none mr-5">
                    <IconArrowRight />
                </span>
            )}
        </div>
    );
};

export default InputSearch;
