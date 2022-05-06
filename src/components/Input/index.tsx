import {
    ForwardedRef,
    forwardRef,
    HTMLProps,
    memo,
    MouseEvent,
    ReactNode,
} from 'react';

import './styles.scss';

interface InputProps extends HTMLProps<HTMLDivElement> {
    inputProps?: HTMLProps<HTMLInputElement>;
    icon?: ReactNode;
    iconOnClick?: (
        e?: MouseEvent<HTMLSpanElement>,
        inputValue?: string
    ) => void;
}

export default memo(
    forwardRef(function Input(
        {
            inputProps,
            icon,
            value,
            iconOnClick = () => {},
            ...rest
        }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) {
        return (
            <div className="input relative" {...rest}>
                <input ref={ref} value={value} {...inputProps} />
                {icon && (
                    <span
                        className="input__icon absolute"
                        onClick={(e) => {
                            iconOnClick(e, value as string);
                        }}
                    >
                        {icon}
                    </span>
                )}
            </div>
        );
    })
);
