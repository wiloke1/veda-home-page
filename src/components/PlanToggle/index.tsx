import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { createGlobalState } from 'react-use';
import * as styles from './PlanToggle.module.scss';

export type PlanToggleType = 'monthly' | 'yearly';

export interface PlanToggleProps {
  onChange?: (type: PlanToggleType) => void;
}

const usePlanToggleStatePrivate = createGlobalState<PlanToggleType>('monthly');

export const usePlanToggleState = () => {
  const [state] = usePlanToggleStatePrivate();
  return state;
};

export const PlanToggle: FC<PlanToggleProps> = ({ onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setPlanToggleState] = usePlanToggleStatePrivate();

  useEffect(() => {
    if (containerRef.current) {
      const observer = new MutationObserver(() => {
        if (containerRef.current?.getAttribute('data-type') === 'monthly') {
          onChange?.('monthly');
          setPlanToggleState('monthly');
        } else {
          onChange?.('yearly');
          setPlanToggleState('yearly');
        }
      });
      observer.observe(containerRef.current, {
        attributes: true,
      });
      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={classNames(styles.container, 'd:flex ai:center pricing-toggle')}>
      <div className="mr:10px ff:font-secondary fw:500 c:color-gray9">Monthly</div>
      <div
        className="pos:relative w:54px h:30px bgc:color-primary bdrs:30px p:3px cur:pointer"
        onClick={() => {
          if (!containerRef.current?.getAttribute('data-type') || containerRef.current?.getAttribute('data-type') === 'monthly') {
            containerRef.current?.setAttribute('data-type', 'yearly');
          } else {
            containerRef.current?.setAttribute('data-type', 'monthly');
          }
        }}
      >
        <div className={classNames(styles.item, 'pos:absolute w:24px h:24px bgc:color-light bdrs:50% trs:0.2s')}></div>
      </div>
      <div className="ml:10px ff:font-secondary fw:500 c:color-gray9">Yearly</div>
    </div>
  );
};
