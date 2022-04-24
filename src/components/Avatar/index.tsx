import { AVATAR } from 'assets/images';
import { BELL } from 'assets/svgs';
import Button from 'components/Button';
import { memo } from 'react';

import './styles.scss';

interface AvatarProps {}

export default memo(function Avatar({}: AvatarProps) {
  return (
    <div className="avatar relative">
      <img src="https://i.pravatar.cc/200" alt="" />
      <Button>FOLLOW</Button>
      <div className="notification">
        <img src={BELL} alt="" />
      </div>
    </div>
  );
});
