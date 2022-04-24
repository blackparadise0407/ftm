import { DetailedTourCard, Filter } from 'components';

import TourListNavigation from './TourListNavigation';

import './styles.scss';

export default function TourList() {
  return (
    <div className="container flex tour-list">
      <Filter />
      <div>
        <TourListNavigation />
        <div className="tour-groups">
          <h4 className="h4 grouped-title">Wed, 16 Mar</h4>
          <DetailedTourCard />
          <h4 className="h4 grouped-title">Thu, 17 Mar</h4>
          <DetailedTourCard />
          <DetailedTourCard />
          <DetailedTourCard />
          <h4 className="h4 grouped-title">Fri, 18 Mar</h4>
          <DetailedTourCard />
          <DetailedTourCard />
          <DetailedTourCard />
          <DetailedTourCard />
          <DetailedTourCard />
          <DetailedTourCard />
        </div>
      </div>
    </div>
  );
}
