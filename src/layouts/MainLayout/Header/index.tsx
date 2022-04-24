import { NavLink } from 'react-router-dom';

import { LOGO_BLUE } from 'assets/images';
import { Button } from 'components';

import './styles.scss';
import clsx from 'clsx';

const links = [
  { to: '/tours', title: 'Tours' },
  {
    to: '/guides',
    title: 'Guides',
  },
  {
    to: '/themes',
    title: 'Themes',
  },
  {
    to: '/destinations',
    title: 'Destinations',
  },
];

export default function Header() {
  return (
    <header className="text-white">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img src={LOGO_BLUE} alt="logo" />
        </div>
        <ul className="flex uppercase">
          {links.map(({ to, title }, idx) => (
            <li key={idx} className="h4">
              <NavLink
                className={({ isActive }) =>
                  clsx('link', isActive ? 'link--active' : '')
                }
                to={to}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button type="primary" variant="filled">
          Log in
        </Button>
      </div>
    </header>
  );
}
