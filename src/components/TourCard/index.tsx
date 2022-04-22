import { HTMLProps } from 'react';
import clsx from 'clsx';

import { AVATAR, BADGE, CARD_IMAGE } from 'assets/images';

import './styles.scss';
import { CLOCK } from 'assets/svgs';
import Button from 'components/Button';

interface TourCardProps extends HTMLProps<HTMLDivElement> {
  transparent?: boolean;
}

export default function TourCard({ transparent = false }: TourCardProps) {
  return (
    <div className={clsx('tour-card', transparent && 'tour-card--transparent')}>
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
            <img src={CLOCK} alt="" />
            <span className="text-sm">08:30 AM</span>
          </span>
          <div className="flex-grow"></div>
          <Button size="small">Book Tour</Button>
        </div>
      </div>
    </div>
  );
}
