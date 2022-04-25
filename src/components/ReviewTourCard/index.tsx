import { Link } from 'react-router-dom';

import Button from 'components/Button';

import './styles.scss';
import { AVATAR, CARD_IMAGE_2 } from 'assets/images';
import { memo } from 'react';
import { EditOutlined, PinOutlined } from 'assets/svgs';

interface ReviewTourCardProps {
  editable?: boolean;
  buttonText?: string;
  type?: 'review' | 'jumpin';
}

export default memo(function ReviewTourCard({
  buttonText = 'review',
  type = 'review',
  editable,
}: ReviewTourCardProps) {
  return (
    <div className="review-tour-card flex overflow-hidden">
      <div className="review-tour-card__image relative">
        <img src={CARD_IMAGE_2} alt="" />
      </div>
      <div className="review-tour-card__info w-full flex items-start">
        <div className="text-dark">
          <div className="info-group flex">
            <img className="avatar" src={AVATAR} alt="" />
            <div>
              <h5 className="h5">Apostolis Karajanis</h5>
              <Link to="/" className="location text-sm flex items-center">
                <PinOutlined fill="#2E65BA" />
                <span>Discover Ohrid - UNESCO city</span>
              </Link>
            </div>
          </div>
          <p className="text-sm">Mar 11, 2022 5:30 PM</p>
          <p className="text-sm">Riding bike around Discover Ohrid</p>
        </div>
        <div className="flex-grow"></div>
        <Button
          className="uppercase"
          type={type === 'review' ? 'secondary' : 'info'}
          variant="outlined"
        >
          {buttonText}
        </Button>
      </div>
      {editable && (
        <span className="edit-icon absolute">
          <EditOutlined fill="#2E65BA" />
        </span>
      )}
    </div>
  );
});
