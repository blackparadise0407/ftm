import {
  GUIDED,
  GUIDED_BLUE,
  LANDSCAPE_PRIMARY,
  SIGHTSEEING,
  SIGHTSEEING_BLUE,
} from 'assets/svgs';
import clsx from 'clsx';
import { useQueryParams } from 'hooks';
import { memo } from 'react';

import './styles.scss';

type Tab = TourType;

interface TourListNavigationProps {
  onTabChange?: (tab: Tab) => void;
}

const tabs = [
  { to: 'guided', title: 'Guided Tour', icon: GUIDED, iconActive: GUIDED_BLUE },
  {
    to: 'sightseeing',
    title: 'Sightseeing Tour',
    icon: SIGHTSEEING,
    iconActive: SIGHTSEEING_BLUE,
  },
  {
    to: 'landscape',
    title: 'Landscape Tour',
    icon: LANDSCAPE_PRIMARY,
    iconActive: LANDSCAPE_PRIMARY,
  },
];

export default memo(function TourListNavigation({
  onTabChange = () => {},
}: TourListNavigationProps) {
  const [query, updateQuery] = useQueryParams<{
    tab: Tab;
  }>();

  const handleSelectTab = (tab: Tab) => {
    onTabChange(tab);
    updateQuery({ tab });
  };

  const { tab } = query;

  return (
    <div className="tour-list-navigation bg-primary flex items-end overflow-hidden">
      {tabs.map(({ to, title, icon, iconActive }, idx) => (
        <div
          key={idx}
          onClick={() => handleSelectTab(to as Tab)}
          className={clsx(
            'tour-list-navigation__item flex items-center',
            tab === to && 'tour-list-navigation__item--active'
          )}
        >
          <img src={tab === to ? iconActive : icon} alt="" />
          <h5 className="h5">{title}</h5>
        </div>
      ))}
    </div>
  );
});
