import { FOOTER_IMG } from 'assets/images';
import { FACEBOOK, INSTAGRAM, PINTEREST, YOUTUBE } from 'assets/svgs';
import { Button } from 'components';
import './styles.scss';

const sections = [
  {
    title: 'COMPANY',
    items: [
      {
        name: 'About',
        href: '/',
      },
      {
        name: 'Contact',
        href: '/',
      },
      {
        name: 'Join as A Guide',
        href: '/',
      },
    ],
  },
  {
    title: 'EXPLORE',
    items: [
      {
        name: 'Tour',
        href: '/',
      },
      {
        name: 'Guides',
        href: '/',
      },
      {
        name: 'Themes',
        href: '/',
      },
      {
        name: 'Destinations',
        href: '/',
      },
    ],
  },
  {
    title: 'POLICIES',
    items: [
      {
        name: 'Privacy Policy',
        href: '/',
      },
      {
        name: 'Terms Of Services',
        href: '/',
      },
      {
        name: 'Review Policy',
        href: '/',
      },
      {
        name: 'Cookie Policy',
        href: '/',
      },
    ],
  },
];

const _renderLinkSection = (): JSX.Element => {
  return (
    <ul className="flex links">
      {sections.map((section) => (
        <li key={section.title} className="section">
          <h4 className="title h4">{section.title}</h4>
          <ul className="flex flex-col">
            {section.items.map((item) => (
              <a className="text-white" key={item.name} href={item.href}>
                <li className="h5">{item.name}</li>
              </a>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="flex flex-col h-full container">
        <div className="flex w-full">
          <div className="left">
            <h1 className="h1" style={{ fontWeight: 400 }}>
              fillthemap
            </h1>
            {_renderLinkSection()}
          </div>
          <div className="flex-grow"></div>
          <div className="right flex flex-col">
            <img src={FOOTER_IMG} alt="footer" />
            <Button size="small" type="secondary" variant="outlined">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="copyright flex">
          <p className="text-sm">© 2021 fillthemap. All rights reserved</p>
          <div className="flex-grow"></div>
          <ul className="flex icon-groups">
            <li>
              <img src={FACEBOOK} alt="" />
            </li>
            <li>
              <img src={INSTAGRAM} alt="" />
            </li>
            <li>
              <img src={YOUTUBE} alt="" />
            </li>
            <li>
              <img src={PINTEREST} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
