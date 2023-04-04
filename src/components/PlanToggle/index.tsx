import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { createGlobalState } from 'react-use';
import { pmChildren } from 'utils/postMessage';

export type PlanToggleType = 'monthly' | 'yearly';

export interface PlanToggleProps {
  onChange?: (type: PlanToggleType) => void;
}

const usePlanToggleStatePrivate = createGlobalState<PlanToggleType>('monthly');
const useCurrentType = createGlobalState<PlanToggleType | null>(null);

export const usePlanToggleState = () => {
  const [state] = usePlanToggleStatePrivate();
  const [currentType] = useCurrentType();
  return {
    currentType,
    nextType: state ?? 'monthly',
  };
};

export const PlanToggle: FC<PlanToggleProps> = ({ onChange }) => {
  const [type, setPlanToggleState] = usePlanToggleStatePrivate();
  const [currentType, setCurrentType] = useCurrentType();

  useEffect(() => {
    const off = pmChildren.on('@landing/currentPlan', ({ type }) => {
      setPlanToggleState(type);
      if (currentType === null) {
        setCurrentType(type);
      }
      onChange?.(type);
    });
    const off2 = pmChildren.on('@landing/plan/success', ({ type }) => {
      setCurrentType(type);
    });

    return () => {
      off();
      off2();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d:flex ai:center">
      <div className="mr:10px ff:font-secondary fw:500 c:color-gray9">Monthly</div>
      <div
        className="pos:relative w:54px h:30px bgc:color-primary bdrs:30px p:3px cur:pointer"
        onClick={() => {
          if (type === 'yearly') {
            onChange?.('monthly');
            setPlanToggleState('monthly');
          } else {
            onChange?.('yearly');
            setPlanToggleState('yearly');
          }
        }}
      >
        <div
          className={classNames('pos:absolute w:24px h:24px bgc:color-light bdrs:50% trs:0.2s', type === 'yearly' ? 'trf:translateX(100%)' : '')}
        ></div>
      </div>
      <div className="ml:10px ff:font-secondary fw:500 c:color-gray9">Annual (save 2 months)</div>
    </div>
  );
};
