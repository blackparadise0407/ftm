import { CSSProperties, HTMLProps, memo } from 'react';
import clsx from 'clsx';

import { AVATAR, BADGE, CARD_IMAGE, CARD_IMAGE_2 } from 'assets/images';
import { Clock } from 'assets/svgs';
import { Button } from 'components';

import './styles.scss';

interface TourCardProps extends HTMLProps<HTMLDivElement> {
  transparent?: boolean;
  compact?: boolean;
  onBookTour?: () => void;
}

export default memo(function TourCard({
  transparent = false,
  compact = false,
  onBookTour = () => {},
}: TourCardProps) {
  return (
    <div
      className={clsx(
        'tour-card relative overflow-hidden',
        transparent
          ? 'tour-card--transparent text-white'
          : 'tour-card--default text-dark',
        compact && 'tour-card--compact'
      )}
    >
      {!compact && (
        <div
          className="header flex relative"
          style={
            {
              '--bg-img': `url(${CARD_IMAGE_2}) center no-repeat`,
            } as CSSProperties
          }
        >
          <div className="avatar-wrapper relative">
            <img src={AVATAR} alt="" />
          </div>
          <div className="flex flex-col guide-info">
            <h5 className="h5">Name</h5>
            <p className="text-base">Profile guide</p>
          </div>
        </div>
      )}
      <div className="body">
        <img src={CARD_IMAGE} alt="" />
      </div>
      <div className="footer">
        <div className="flex items-center head-line relative">
          <img
            className="bg-primary self-start badge absolute"
            src={BADGE}
            alt=""
          />
          <h6 className={clsx('h6', compact && 'truncate')}>
            Lorem Ipsum is simply dummy text of the print ing
          </h6>
        </div>
        {!compact && (
          <div className="flex items-center action">
            <div className="flex flex-col extra-info">
              <span className="flex items-center guide">
                <span>
                  <b className="font-bold">Name</b> - Profile guide
                </span>
              </span>
              <span className="flex items-center">
                <Clock fill={transparent ? '#FAFBFD' : '#333333'} />
                <span>08:30 AM</span>
              </span>
            </div>
            <div className="flex-grow"></div>
            <Button size="small" onClick={onBookTour}>
              Book Tour
            </Button>
          </div>
        )}
      </div>
      {compact && (
        <div className="time">
          <h4 className="h4 text-primary">09:30 PM</h4>
        </div>
      )}
    </div>
  );
});
