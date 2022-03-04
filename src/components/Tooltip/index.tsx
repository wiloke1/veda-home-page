import { Portal } from 'components/Portal';
import { useMeasure } from 'hooks/useMeasure';
import { FC, useState, MouseEventHandler } from 'react';
import * as styles from './Tooltip.module.scss';

export interface TooltipProps {
  title: string;
}

const DURATION = 200;

export const Tooltip: FC<TooltipProps> = ({ title, children }) => {
  const [visibleState, setVisibleState] = useState(false);
  const { top, left, width, setMeasure } = useMeasure();

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = event => {
    setMeasure(event);
    setVisibleState(true);
  };

  const handleMouseLeave = () => {
    setVisibleState(false);
  };

  return (
    <div className={styles.container}>
      <Portal visible={visibleState}>
        <div
          className={styles.tooltip}
          style={{
            top: top - 5,
            left: left + width / 2,
            transition: `all ${DURATION}ms`,
          }}
        >
          {title}
        </div>
      </Portal>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};
