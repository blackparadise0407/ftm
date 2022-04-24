import { LANDSCAPE_SECONDARY } from 'assets/svgs';
import { Button, TourCard } from 'components';
import './styles.scss';

export default function ThemeList() {
  return (
    <div className="theme-list">
      <div className="container">
        <div className="theme-list__heading">
          <span className="flex items-center heading">
            <img src={LANDSCAPE_SECONDARY} alt="" />
            <h3 className="h3 capitalize text-secondary">landscape tour</h3>
          </span>
          <p className="text-lg">
            Over the years, humans have built cities, communities, statues,
            buildings and
          </p>
        </div>
        <div className="theme-list__main">
          <h4 className="h4 uppercase text-secondary">Tour Of Themes</h4>
          <div className="tour-card-list grid">
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
          </div>
          <div className="flex justify-center load-more">
            <Button variant="outlined" type="secondary">
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
