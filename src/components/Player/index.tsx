import { memo, useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { PLAY, PLAYER } from 'assets/images';

import './styles.scss';

interface PlayerProps {
  url?: string;
  thumb?: string;
  autoPlay?: boolean;
}

export default memo(function Player({
  url = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
  thumb = PLAYER,
  autoPlay = false,
}: PlayerProps) {
  const [playing, setPlaying] = useState(autoPlay);
  const loaded = useRef(false);

  const handlePlayPause = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <div className="player relative">
      <ReactPlayer
        width="690px"
        height="515px"
        playing={playing}
        url={url}
        onClickPreview={() => {
          loaded.current = true;
        }}
        light={thumb ?? false}
        playIcon={
          <img
            className="player__play-btn"
            src={PLAY}
            alt=""
            onClick={handlePlayPause}
          />
        }
      />
      {loaded.current && (
        <div className="player__overlay" onClick={handlePlayPause}>
          {!playing && <img className="player__play-btn" src={PLAY} alt="" />}
        </div>
      )}
    </div>
  );
});
