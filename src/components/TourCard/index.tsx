import { HTMLProps, memo } from 'react';
import clsx from 'clsx';

import { AVATAR, BADGE, CARD_IMAGE } from 'assets/images';
import { Clock } from 'assets/svgs';
import { Button } from 'components';

import './styles.scss';

interface TourCardProps extends HTMLProps<HTMLDivElement> {
  transparent?: boolean;
  onBookTour?: () => void;
}

export default memo(function TourCard({
  transparent = false,
  onBookTour = () => {},
}: TourCardProps) {
  return (
    <div
      className={clsx(
        'tour-card',
        transparent ? 'tour-card--transparent text-white' : 'text-dark'
      )}
    >
      <div className="header flex">
        <img src={AVATAR} alt="" />
        <div className="flex flex-col">
          <h5 className="h5">Apostolis Karajanis</h5>
          <p className="text-base">Profile guide</p>
        </div>
      </div>
      <div className="body">
        <img src={CARD_IMAGE} alt="" />
      </div>
      <div className="footer">
        <div className="flex head-line">
          <img className="bg-primary" src={BADGE} alt="" />
          <h6 className="h6">
            Lorem Ipsum is simply dummy text of the print ing
          </h6>
        </div>
        <div className="flex items-center action">
          <span className="flex items-center">
            <Clock className={transparent ? '#FAFBFD' : '#333333'} />
            <span className="text-sm">08:30 AM</span>
          </span>
          <div className="flex-grow"></div>
          <Button size="small" onClick={onBookTour}>
            Book Tour
          </Button>
        </div>
      </div>
    </div>
  );
});
