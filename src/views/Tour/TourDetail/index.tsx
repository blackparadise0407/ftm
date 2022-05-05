import { BANNER_2 } from 'assets/images';
import { Profile, TourCard } from 'components';
import ActionGuideCard from './ActionGuideCard';
import GuideCard from './GuideCard';

import './styles.scss';

export default function TourDetail() {
  return (
    <div className="tour-detail">
      <div
        className="tour-detail__banner"
        style={{
          background: `url(${BANNER_2}) center no-repeat`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="container flex main-wrapper relative">
        <div className="tour-detail__main">
          <div className="about">
            <h5 className="h5 text-secondary capitalize title">
              About The Tour
            </h5>
            <p className="text-lg">
              If you want to escape from reality for a while and rest your soul,
              join me in an easy walk along the coast. I promise you a piece of
              paradise that will enchant you and you will want to see even more.
              Enjoy with me the sound of nature, the sound of the sea, the
              swaying of the waves, the chirping of birds and the view that will
              mesmerize you and leave you speechless.
            </p>
          </div>

          <div>
            <h5 className="h5 text-secondary capitalize title">
              Get to know your guides
            </h5>
            <Profile />
          </div>
        </div>
        <div className="tour-detail__side relative">
          <div className="wrapper flex flex-col absolute">
            <GuideCard />
            <ActionGuideCard buttonText="Book tour" />
            <ActionGuideCard buttonText="Book tour" />
            <ActionGuideCard
              buttonText="Follow"
              body="New date announcement?"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="might-like-tour">
          <h5 className="h5 text-secondary uppercase title">
            tour you might like
          </h5>
          <div className="tour-card-groups flex">
            <TourCard compact />
            <TourCard compact />
            <TourCard compact />
            <TourCard compact />
          </div>
        </div>
      </div>
      <div className="container flex flex-col action-guide-card-groups">
        <ActionGuideCard buttonText="Book tour" />
        <ActionGuideCard buttonText="Book tour" />
        <ActionGuideCard buttonText="Follow" body="New date announcement?" />
      </div>
    </div>
  );
}
