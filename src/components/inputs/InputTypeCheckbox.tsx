interface Props {
    css?: string;
    label?: string;
    wrapCss?: string;
    require?: any;
    value?: string;
    field?: any;
}

const InputTypeCheckbox = ({
    css,
    label,
    wrapCss,
    require,
    value,
    field,
}: Props) => {
    return (
        <div
            className={`${
                wrapCss ? `${wrapCss} flex items-center` : `flex items-center `
            } `}
        >
            <input
                type="checkbox"
                id={label}
                className={` ${css}`}
                {...field}
                value={value}
            />
            <div className="ml-3 mr-[30px] text-xs">
                <label htmlFor={label}>{label}</label>
                {require && <span className="text-red-500 ml-1">*</span>}
            </div>
        </div>
    );
};

export default InputTypeCheckbox;
