import { PLAY, PLAYER } from 'assets/images';
import { Button, ProfileInfo } from 'components';
import './styles.scss';

export default function GuideList() {
  return (
    <div className="guide-list">
      <div className="about">
        <div className="container flex">
          <div className="about__heading">
            <div className="flex flex-col heading">
              <span className="text-gray-4">GET TO KNOW</span>
              <span>
                <span className="text-gray-4">YOUR </span>
                <span className="text-secondary">GUIDES!</span>
              </span>
            </div>
            <Button type="secondary" variant="outlined">
              ABOUT US
            </Button>
          </div>
          <div className="about__video relative">
            <div className="relative player-wrapper">
              <img className="player" src={PLAYER} alt="" />
              <img className="play" src={PLAY} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="profile-info-list">
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
          <ProfileInfo size="small" isCard />
        </div>
      </div>
    </div>
  );
}
