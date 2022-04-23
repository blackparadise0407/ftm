import { HTMLProps, memo, useMemo } from 'react';
import clsx from 'clsx';

import './styles.scss';
import { CHEV_DOWN, CHEV_UP, HEART } from 'assets/svgs';

interface UserRankingProps
  extends Omit<HTMLProps<HTMLDivElement>, 'data' | 'size'> {
  size?: 'default' | 'large';
  data?: {
    rank: number;
    likes: number;
    status: 'up' | 'down';
  };
}

export default memo(function UserRanking({
  size = 'default',
  data = {
    rank: 1,
    likes: 1024,
    status: 'up',
  },
  className,
  ...rest
}: UserRankingProps) {
  const isDefault = useMemo(() => size === 'default', [size]);

  return (
    <div
      className={clsx(
        'user-ranking flex',
        `user-ranking--${size}`,
        isDefault ? 'flex-row items-center' : 'flex-col',
        className
      )}
      {...rest}
    >
      <div className="user-ranking__avatar-wrapper relative">
        {!isDefault && (
          <img
            className="status"
            src={data.status === 'down' ? CHEV_DOWN : CHEV_UP}
            alt=""
          />
        )}
        <img className="avatar" src="https://i.pravatar.cc/200" alt="" />
        <div className="rank">
          <span className="h5">{data.rank}</span>
        </div>
      </div>
      <div
        className={clsx(
          'user-ranking__info-wrapper justify-center',
          isDefault ? 'text-white text-left' : 'text-dark text-center'
        )}
      >
        <div
          className={clsx('flex items-center', !isDefault && 'justify-center')}
        >
          <h5 className="h5">Apostolis</h5>
          {isDefault && (
            <img
              className="status"
              src={data.status === 'down' ? CHEV_DOWN : CHEV_UP}
              alt=""
            />
          )}
        </div>
        <span
          className={clsx(
            'flex ranking items-center',
            isDefault ? 'justify-start' : 'justify-center'
          )}
        >
          <img src={HEART} alt="" />
          <p className="text-base block">{data.likes}</p>
        </span>
      </div>
    </div>
  );
});
