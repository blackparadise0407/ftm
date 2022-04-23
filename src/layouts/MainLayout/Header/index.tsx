import { NavLink } from 'react-router-dom';

import { LOGO } from 'assets/images';
import { Button } from 'components';

import './styles.scss';

const links = [{ to: '/tours', title: 'Tours' }];

export default function Header() {
  return (
    <header className="text-white ">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <ul className="flex uppercase">
          <li className="h4">
            <NavLink to="/tours">Tour</NavLink>
          </li>
          <li className="h4">
            <NavLink to="/guides">Guides</NavLink>
          </li>
          <li className="h4">
            <NavLink to="/themes">Themes</NavLink>
          </li>
          <li className="h4">
            <NavLink
              className={({ isActive }) => (isActive ? 'link--active' : '')}
              to="/destinations"
            >
              Destinations
            </NavLink>
          </li>
        </ul>
        <Button type="primary" variant="outlined">
          Log in
        </Button>
      </div>
    </header>
  );
}
