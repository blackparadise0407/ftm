import { HTMLProps, memo, ReactNode } from 'react';
import clsx from 'clsx';

import './styles.scss';

type ButtonHTMLType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
    htmlType?: ButtonHTMLType;
    size?: 'default' | 'small';
    variant?: 'filled' | 'outlined';
    type?: 'primary' | 'secondary' | 'info';
    block?: boolean;
    icon?: ReactNode;
}

export default memo(function Button({
    htmlType = 'button',
    size = 'default',
    variant = 'filled',
    type = 'primary',
    block = false,
    className,
    children,
    icon,
    ...rest
}: ButtonProps) {
    return (
        <button
            className={clsx(
                'button',
                `button--${size}`,
                `button--${variant}`,
                `button--${type}`,
                block && 'button--block',
                className
            )}
            type={htmlType as any}
            {...rest}
        >
            {icon && icon}
            {children}
        </button>
    );
});
