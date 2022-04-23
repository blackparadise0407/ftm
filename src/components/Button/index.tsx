import clsx from 'clsx';
import { HTMLProps, memo } from 'react';

import './styles.scss';

type ButtonHTMLType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  htmlType?: ButtonHTMLType;
  size?: 'default' | 'small';
  variant?: 'filled' | 'outlined';
  type?: 'primary' | 'secondary';
  block?: boolean;
}

export default memo(function Button({
  htmlType = 'button',
  size = 'default',
  variant = 'filled',
  type = 'primary',
  block = false,
  className,
  children,
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
      {children}
    </button>
  );
});