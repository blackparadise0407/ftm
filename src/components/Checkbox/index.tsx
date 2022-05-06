import { HTMLProps } from 'react';

import './styles.scss';

interface CheckboxProps extends HTMLProps<HTMLDivElement> {
    inputProps?: HTMLProps<HTMLInputElement>;
}

export default function Checkbox({
    label,
    inputProps,
    ...rest
}: CheckboxProps) {
    return (
        <label className="checkbox flex items-center">
            <input className="hidden" type="checkbox" {...inputProps} />
            <div className="checkbox__box relative">
                <div className="checkmark"></div>
            </div>
            <span>{label}</span>
        </label>
    );
}
