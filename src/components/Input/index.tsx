import { HTMLProps, memo, ReactNode } from 'react';

import './styles.scss';

interface InputProps extends HTMLProps<HTMLDivElement> {
  inputProps?: HTMLProps<HTMLInputElement>;
  icon?: ReactNode;
}

export default memo(function Input({ inputProps, icon, ...rest }: InputProps) {
  return (
    <div className="input flex items-center" {...rest}>
      <input {...inputProps} />
      {icon && <span className="input__icon">{icon}</span>}
    </div>
  );
});