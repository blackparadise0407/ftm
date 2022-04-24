import { CALENDAR, CHEV_RIGHT, HEART, PIN, USER } from 'assets/svgs';
import clsx from 'clsx';
import Avatar from 'components/Avatar';
import { Link } from 'react-router-dom';

import './styles.scss';

type Size = 'default' | 'small';

interface ProfileInfoProps {
  size?: Size;
  isCard?: boolean;
  data?: {
    id: string;
  };
}

export default function ProfileInfo({
  size = 'default',
  isCard = false,
  data = {
    id: 'patrick',
  },
}: ProfileInfoProps) {
  const isSmall = size === 'small';

  return (
    <div
      className={clsx(
        'profile-info flex',
        isSmall && 'profile-info--small',
        isCard && 'profile-info--card'
      )}
    >
      <Avatar size={size} />
      <div className="info">
        <span className={clsx(isSmall ? 'h4 uppercase' : 'h3')}>
          Patrick Twomey
        </span>
        <div className="item-wrapper text-sm">
          <div className="item">
            <img src={PIN} alt="" />
            <span>Canada</span>
          </div>
          <div className="item">
            <img src={USER} alt="" />
            <span>197 Followers</span>
          </div>
          <div className="item">
            <img width="12.44px" src={CALENDAR} alt="" />
            <span>Joined Feb 2022</span>
          </div>
          <div className="item">
            <img src={HEART} alt="" />
            <span>1920</span>
          </div>
        </div>
        <Link
          to={`/guides/${data.id}`}
          className="profile-link flex items-center"
        >
          <span className={clsx('text-primary', isSmall ? 'h6' : 'h5')}>
            See Profile
          </span>
          <img src={CHEV_RIGHT} alt="" />
        </Link>
      </div>
    </div>
  );
}
