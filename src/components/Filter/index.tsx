import { SEARCH } from 'assets/svgs';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { memo, useState } from 'react';
import { Range } from 'react-range';
import { getFormatTimeFromMinute } from 'utils/string';

import './styles.scss';

const MIN = 0;
const MAX = 1380;

export default memo(function Filter() {
  const [range, setRange] = useState<number[]>([MIN, MAX]);
  return (
    <div className="filter">
      <div className="filter__title">
        <h4 className="h4 uppercase text-gray-5">Filters</h4>
      </div>
      <div className="filter__section">
        <span className="h5">49 </span>
        <span className="text-base">tours available</span>
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Location</h5>
        <Input
          inputProps={{
            placeholder: 'Search location',
          }}
          icon={<img src={SEARCH} alt="icon" />}
        />
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Guides</h5>
        <Input
          inputProps={{
            placeholder: 'Search guides',
          }}
          icon={<img src={SEARCH} alt="icon" />}
        />
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Day Of Week</h5>
        <div className="flex flex-col options">
          <Checkbox label="Sunday" />
          <Checkbox label="Monday" />
          <Checkbox label="Tuesday" />
          <Checkbox label="Wednesday" />
          <Checkbox label="Thursday" />
          <Checkbox label="Friday" />
          <Checkbox label="Saturday" />
        </div>
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Time Of Day</h5>
        <div style={{ marginTop: '40px' }}>
          <Range
            step={1}
            min={MIN}
            max={MAX}
            values={range}
            draggableTrack
            onChange={(v) => setRange(v)}
            renderThumb={({ props, value }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '16px',
                  width: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#2E65BA',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 'calc(-100% - 10px)',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <span className="h5">{getFormatTimeFromMinute(value)}</span>
                </div>
              </div>
            )}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  borderRadius: '4px',
                  backgroundColor: '#2E65BA',
                }}
              >
                {children}
              </div>
            )}
          />
        </div>
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Date Range</h5>
      </div>
      <div className="filter__section">
        <h5 className="h5 title">Categories</h5>
        <div className="flex flex-col options">
          <Checkbox label="Shopping & Fashion (3)" />
          <Checkbox label="Eat & Drink (5)" />
          <Checkbox label="Wellness (1)" />
          <Checkbox label="Sport & Adventure (3)" />
          <Checkbox label="Limited Run (1)" />
          <Checkbox label="Personal Stories (7)" />
          <Checkbox label="History & Archaeology (28)" />
          <Checkbox label="City Life (16)" />
          <Checkbox label="Nature & Wildlife (10)" />
          <Checkbox label="Bucket List Destinations (12)" />
          <Checkbox label="Art & Culture (22)" />
          <Checkbox label="Family (1)" />
          <Checkbox label="Religious Sites (6)" />
        </div>
      </div>
    </div>
  );
});
