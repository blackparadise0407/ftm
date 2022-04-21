import clsx from "clsx";
import { HTMLProps } from "react";

import "./styles.scss";

type ButtonHTMLType = "button" | "submit" | "reset" | undefined;

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  htmlType?: ButtonHTMLType;
  size?: "default" | "small";
  variant?: "filled" | "outlined";
  type?: "primary" | "secondary";
  block?: boolean;
}

export default function Button({
  htmlType = "button",
  size = "default",
  variant = "filled",
  type = "primary",
  block = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "button",
        `button--${size}`,
        `button--${variant}`,
        `button--${type}`,
        block && "button--block"
      )}
      type={htmlType as any}
      {...rest}
    >
      {children}
    </button>
  );
}
