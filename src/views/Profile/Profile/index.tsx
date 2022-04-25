import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';

import './styles.scss';

const items = [
  {
    to: 'overview',
    title: 'Overview',
  },
  {
    to: 'mytour',
    title: 'My Tour',
  },
  {
    to: 'reviews',
    title: 'Reviews',
  },
  {
    to: 'following',
    title: 'Following',
  },
  {
    to: 'snaps',
    title: 'Snaps',
  },
  {
    to: 'settings',
    title: 'Settings',
  },
];

export default function Profile() {
  const { pathname } = useLocation();
  const id = 'patrick';

  const currentPage = pathname.substring(
    pathname.lastIndexOf('/') + 1,
    pathname.length
  );

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-page__main flex">
          <div className="profile-page__navigation">
            {items.map(({ title, to }, idx) => (
              <Link
                className={clsx(
                  'block item text-dark',
                  currentPage === to && 'item--active'
                )}
                key={idx}
                to={`/profile/${id}/${to}`}
              >
                <h5 className="h5">{title}</h5>
              </Link>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
