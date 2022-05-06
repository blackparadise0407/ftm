import { useEffect } from 'react';

import { DetailedTourCard, Filter } from 'components';
import { useQueryParams } from 'hooks';
import TourListNavigation from './TourListNavigation';

import './styles.scss';

export default function TourList() {
    const [query, setQuery] = useQueryParams<{ tab: TourType }>();

    useEffect(() => {
        if (!query.tab) {
            setQuery({ tab: 'landscape' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container flex tour-list">
            <Filter />
            <div className="tour-list__wrapper">
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
