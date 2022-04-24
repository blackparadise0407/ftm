import { CALENDAR, CHEV_RIGHT, HEART, PIN, USER } from 'assets/svgs';
import Avatar from 'components/Avatar';
import CompactTourCard from 'components/CompactTourCard';
import TourCard from 'components/TourCard';
import { memo } from 'react';

import './styles.scss';

export default memo(function Profile() {
  return (
    <div className="profile">
      <div className="profile__info flex">
        <Avatar />
        <div className="info">
          <h3 className="h3">Patrick Twomey</h3>
          <div className="item-wrapper">
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
          <div className="profile-link flex items-center">
            <span className="h5 text-primary">See Profile</span>
            <img src={CHEV_RIGHT} alt="" />
          </div>
        </div>
      </div>
      <div className="profile__description">
        <p className="text-base">
          Since the age of 20, I have been looking for a way to promote the
          magnificent city of Ohrid to the world. After getting a Bachelor's
          degree in Tourism in Greece, I returned in 2012 to fulfil my dream,
          and became a professional tour guide, proudly and generously
          presenting the magic that the town has to offer to the world. That
          very same dream encouraged me to open a tour agency, and nowadays,
          after many years of work and experience, being a tour guide has
          remained the biggest passion of all to me. Once more, I have the
          opportunity to present the magnificent town that is Ohrid to you, with
          the same enthusiasm that I had with my very first tour.
        </p>
      </div>
      <h5 className="h5 text-secondary">Patrick Twomey</h5>
      <div className="tour-card-group flex">
        <TourCard compact />
        <TourCard compact />
      </div>
    </div>
  );
});
