import { LOGO } from 'assets/images';
import { Button } from 'components';
import './styles.scss';

export default function Header() {
  return (
    <header className="text-white ">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <ul className="flex uppercase">
          <li className="h4">Tour</li>
          <li className="h4">Guides</li>
          <li className="h4">Themes</li>
          <li className="h4">Destinations</li>
        </ul>
        <Button type="primary" variant="outlined">
          Log in
        </Button>
      </div>
    </header>
  );
}
