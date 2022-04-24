import { BELL } from 'assets/svgs';
import clsx from 'clsx';
import Button from 'components/Button';
import { memo } from 'react';

import './styles.scss';

type Size = 'default' | 'small';
interface AvatarProps {
  size?: Size;
}

export default memo(function Avatar({ size }: AvatarProps) {
  const isSmall = size === 'small';

  return (
    <div className={clsx('avatar relative', isSmall && 'avatar--small')}>
      <img className="img" src="https://i.pravatar.cc/200" alt="" />
      <Button
        className={clsx(isSmall ? 'capitalize h6' : 'uppercase')}
        size={size}
      >
        Follow
      </Button>
      <div className="notification">
        <img src={BELL} alt="" />
      </div>
    </div>
  );
});
