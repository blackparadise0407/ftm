import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

import { CHEV_RIGHT } from 'assets/svgs';

import './styles.scss';

interface CustomLinkProps extends LinkProps {
  small?: boolean;
  title?: string;
}

export default function CustomLink({ title = '', to, small }: CustomLinkProps) {
  return (
    <Link to={to} className="custom-link flex items-center">
      <span className={clsx('text-primary', small ? 'h6' : 'h5')}>{title}</span>
      <img src={CHEV_RIGHT} alt="" />
    </Link>
  );
}
