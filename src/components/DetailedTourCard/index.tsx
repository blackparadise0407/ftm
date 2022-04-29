import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CARD_IMAGE_2 } from 'assets/images';
import { PIN, STAR } from 'assets/svgs';
import { Button } from 'components';

import './styles.scss';

interface DetailedTourCardProps {}

// eslint-disable-next-line no-empty-pattern
export default memo(function DetailedTourCard({}: DetailedTourCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="detailed-tour-card flex overflow-hidden"
      onClick={() => {
        navigate(`/tours/tour`);
      }}
    >
      <div className="detailed-tour-card__image relative">
        <div className="hour">
          <h4 className="h4">09:30 PM</h4>
        </div>
        <img src={CARD_IMAGE_2} alt="" />
        <div className="avatar">
          <img
            src="https://i.pravatar.cc/100"
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/guides/patrick`);
            }}
          />
        </div>
      </div>
      <div className="detailed-tour-card__info w-full flex items-start">
        <div className="info-group text-dark">
          <h4 className="h4 text-dark">Discover Ohrid - UNESCO city</h4>
          <p className="text-base">Apostolis Karajanis</p>
          <p className="text-base flex items-center">
            <img src={PIN} alt="" />
            Ochrid, North Macedonia
          </p>
          <p className="text-base flex items-center">
            <img src={STAR} alt="" />
            5.0 (3)
          </p>
        </div>
        <div className="flex-grow"></div>
        <Button
          className="uppercase relative"
          type="secondary"
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Book
        </Button>
      </div>
    </div>
  );
});
