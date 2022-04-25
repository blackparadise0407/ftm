import { AVATAR } from 'assets/images';
import { Button } from 'components';
import { ReactNode } from 'react';

import './styles.scss';

interface ActionGuideCardProps {
  body?: ReactNode;
  data?: {
    name: string;
    date: string;
  };
  buttonText?: string;
  onAction?: () => void;
}

export default function ActionGuideCard({
  body,
  buttonText,
  data = {
    name: 'Huy Ong',
    date: 'Thu, 31 Mar 09:30 PM',
  },
  onAction = () => {},
}: ActionGuideCardProps) {
  return (
    <div className="action-guide-card flex items-center text-gray-5">
      {typeof body === 'string' ? (
        <h5 className="h5">{body}</h5>
      ) : (
        <div className="action-guide-card__info flex items-center">
          <img src={AVATAR} alt="" />
          <div className="flex flex-col">
            <p className="text-sm">{data.name}</p>
            <h5 className="h5">{data.date}</h5>
          </div>
        </div>
      )}
      <div className="flex-grow"></div>
      <Button
        size="small"
        type="secondary"
        variant="outlined"
        onClick={onAction}
      >
        {buttonText}
      </Button>
    </div>
  );
}
