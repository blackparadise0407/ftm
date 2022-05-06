import { memo } from 'react';

import ProfileInfo from 'components/ProfileInfo';
import TourCard from 'components/TourCard';

import './styles.scss';

export default memo(function Profile() {
    return (
        <div className="profile">
            <ProfileInfo />
            <div className="profile__description">
                <p className="text-base">
                    Since the age of 20, I have been looking for a way to
                    promote the magnificent city of Ohrid to the world. After
                    getting a Bachelor's degree in Tourism in Greece, I returned
                    in 2012 to fulfil my dream, and became a professional tour
                    guide, proudly and generously presenting the magic that the
                    town has to offer to the world. That very same dream
                    encouraged me to open a tour agency, and nowadays, after
                    many years of work and experience, being a tour guide has
                    remained the biggest passion of all to me. Once more, I have
                    the opportunity to present the magnificent town that is
                    Ohrid to you, with the same enthusiasm that I had with my
                    very first tour.
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
