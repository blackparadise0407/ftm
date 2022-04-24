import { BANNER_3 } from 'assets/images';
import { BELL, BI_HEART, CALENDAR, HEART, PIN, SHARE, USER } from 'assets/svgs';
import { Button, ProfileInfo, TourCard } from 'components';

import './styles.scss';

export default function GuideDetail() {
  return (
    <div className="guide-detail">
      <div
        className="guide-detail__banner"
        style={{
          background: `url(${BANNER_3}) center no-repeat`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="container">
        <div className="guide-detail__main flex">
          <div className="main">
            <div className="info flex">
              <div className="wrapper">
                <div className="avatar-wrapper">
                  <img src="https://i.pravatar.cc/200" alt="" />
                </div>
              </div>
              <div className="extra-info">
                <h3 className="h3 name">Patrick Twomey</h3>
                <div className="item-list flex">
                  <div className="item">
                    <img src={USER} alt="" />
                    <span>197 Followers</span>
                  </div>
                  <div className="item">
                    <img src={HEART} alt="" />
                    <span>1920</span>
                  </div>
                  <div className="item">
                    <img src={PIN} alt="" />
                    <span>Canada</span>
                  </div>
                  <div className="item">
                    <img width="12.44px" src={CALENDAR} alt="" />
                    <span>Joined Feb 2022</span>
                  </div>
                </div>
                <div className="action-list flex">
                  <Button icon={<img src={BELL} alt="" />} size="small">
                    Follow
                  </Button>
                  <Button
                    icon={<img src={SHARE} alt="" />}
                    size="small"
                    variant="outlined"
                  >
                    Share
                  </Button>
                  <Button icon={<img src={BI_HEART} alt="" />} size="small">
                    Heart
                  </Button>
                </div>
              </div>
            </div>
            <div className="article">
              <h2 className="title h2 text-secondary capitalize">
                <span>“</span> <br /> Experience Paris with the finest local
                guides
              </h2>
              <h5 className="h5">About</h5>
              <p className="text-base">
                Based in the majestic Canadian Rockies, I am an international
                tour guide / tour operator and published author. I have led
                hundreds of tours to over 40 countries. At home in Banff, I
                continue to bike, ski, climb and hike. My creative outlet is
                writing blogs on 2metours.com. With Irish roots, my humour
                shines through and I love connecting with people around the
                world. I am fluent in English, French and Spanish.
              </p>
            </div>
            <div className="related-tour">
              <h3 className="h3 text-secondary">Patrick Twomey</h3>
              <div className="tour-list flex">
                <TourCard />
                <TourCard />
              </div>
            </div>
          </div>
          <div className="side">
            <h5 className="h5 capitalize">People also viewed</h5>
            <div className="also-view flex flex-col">
              <ProfileInfo size="small" isCard />
              <ProfileInfo size="small" isCard />
              <ProfileInfo size="small" isCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
