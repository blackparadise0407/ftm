import Input from 'components/Input';
import { memo } from 'react';

import './styles.scss';

export default memo(function Filter() {
  return (
    <div className="filter">
      <div className="filter__title">
        <h4 className="h4 uppercase text-gray-5">Filters</h4>
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Location</h5>
        <Input />
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Guides</h5>
        <Input />
      </div>
      <div className="filter__section"></div>
    </div>
  );
});
