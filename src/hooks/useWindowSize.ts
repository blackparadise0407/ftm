import { useState } from 'react';

import { useIsomorphicLayoutEffect, useEventListener } from '.';

type WindowSize = [number, number];

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>([0, 0]);

  const handleSize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
