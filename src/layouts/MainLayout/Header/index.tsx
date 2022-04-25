import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

import { LOGO_BLUE } from 'assets/images';
import { CHEV_DOWN } from 'assets/svgs';
import { Button } from 'components';
import { useAuthContext } from 'contexts';

import './styles.scss';

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

const _renderGuest = (onLogin: () => void) => {
  return (
    <Button type="primary" variant="filled" onClick={onLogin}>
      Log in
    </Button>
  );
};

const _renderUser = (onSignOut: () => void) => {
  return (
    <div className="user-info-wrapper relative">
      <div className="user-info-wrapper__user flex items-center">
        <img className="avatar" src="https://i.pravatar.cc/200" alt="" />
        <img src={CHEV_DOWN} alt="" />
      </div>
      <div className="user-info-wrapper__drop-down absolute text-dark">
        <div className="item">
          <span className="h5">Top-Up</span>
        </div>
        <Link to="/profile/patrick">
          <div className="item flex items-center item--profile text-dark">
            <img className="avatar" src="https://i.pravatar.cc/200" alt="" />
            <span className="h5">Profile</span>
          </div>
        </Link>
        <div className="item" onClick={onSignOut}>
          <span className="h5">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const { isAuth, onLogin, onSignOut } = useAuthContext();

  return (
    <header className="text-white">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <img src={LOGO_BLUE} alt="logo" />
          </Link>
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
        {isAuth ? _renderUser(onSignOut) : _renderGuest(onLogin)}
      </div>
    </header>
  );
}
