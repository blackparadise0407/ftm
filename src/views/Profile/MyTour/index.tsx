import { useState } from 'react';

import {
  EyeOutlined,
  FileAddOutlined,
  HeartOutlined,
  StarOutlined,
} from 'assets/svgs';
import { CustomLink, ReviewTourCard } from 'components';

import './styles.scss';

export default function MyTour() {
  const [isViewAll, setIsViewAll] = useState(false);

  return (
    <div className="my-tour">
      <div className="my-tour__action-list">
        <div className="action">
          <EyeOutlined fill="#2E65BA" />
          <span className="h4">2 trips</span>
        </div>
        <div className="action">
          <HeartOutlined fill="#2E65BA" />
          <span className="h4">1 tips</span>
        </div>
        <div className="action">
          <StarOutlined fill="#2E65BA" />
          <span className="h4">0 reviews</span>
        </div>
        <div className="action">
          <FileAddOutlined fill="#2E65BA" />
          <span className="h4">Add Tour</span>
        </div>
      </div>
      <h5 className="h5 title">Upcoming Tours</h5>
      <div className="my-tour__tour-list flex flex-col">
        <ReviewTourCard />
      </div>
      <h5 className="h5 title">Previous Tour</h5>
      <div className="my-tour__tour-list flex flex-col">
        <ReviewTourCard type="jumpin" buttonText="jump in" />
      </div>
      <h5 className="h5 title">Tours List</h5>
      <div className="my-tour__tour-list flex flex-col">
        <ReviewTourCard editable />
        <ReviewTourCard editable />
        {isViewAll && (
          <>
            <ReviewTourCard editable />
            <ReviewTourCard editable />
            <ReviewTourCard editable />
            <ReviewTourCard editable />
          </>
        )}
      </div>
      <div className="flex view-all">
        <div className="flex-grow"></div>
        <CustomLink
          to=""
          title="View All"
          small
          onClick={() => setIsViewAll(true)}
        />
      </div>
    </div>
  );
}
