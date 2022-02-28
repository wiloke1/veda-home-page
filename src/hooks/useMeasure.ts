import { MouseEventHandler, useState } from 'react';
import { offset } from 'utils/offset';

type MeasureKey = 'top' | 'left' | 'width' | 'height';

export const useMeasure = () => {
  const [{ top, left, width, height }, setMeasureState] = useState({} as Record<MeasureKey, number>);

  const setMeasure: MouseEventHandler<HTMLElement> = event => {
    const el = event.currentTarget as HTMLElement;
    const { offsetWidth, offsetHeight } = el;
    const { top, left } = offset(el);
    setMeasureState({
      width: offsetWidth,
      height: offsetHeight,
      top,
      left,
    });
  };

  return {
    setMeasure,
    top,
    left,
    width,
    height,
  };
};
