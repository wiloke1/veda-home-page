import { useLocation } from '@reach/router';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { createGlobalState } from 'react-use';
import { isBrowser } from 'utils/isBrowser';

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
  const [type, setPlanToggleState] = usePlanToggleStatePrivate();
  const location = useLocation();

  useEffect(() => {
    if (isBrowser) {
      const queryParam = new URLSearchParams(location.search);
      onChange?.(queryParam.get('plantype') as PlanToggleType);
      setPlanToggleState(queryParam.get('plantype') as PlanToggleType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isBrowser) {
      const url = new URL(location.href);
      url.searchParams.set('plantype', type);
      window.history.pushState({}, '', url.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className="d:flex ai:center">
      <div className="mr:10px ff:font-secondary fw:500 c:color-gray9">Monthly</div>
      <div
        className="pos:relative w:54px h:30px bgc:color-primary bdrs:30px p:3px cur:pointer"
        onClick={() => {
          if (type === 'monthly') {
            onChange?.('yearly');
            setPlanToggleState('yearly');
          } else {
            onChange?.('monthly');
            setPlanToggleState('monthly');
          }
        }}
      >
        <div
          className={classNames('pos:absolute w:24px h:24px bgc:color-light bdrs:50% trs:0.2s', type === 'yearly' ? 'trf:translateX(100%)' : '')}
        ></div>
      </div>
      <div className="ml:10px ff:font-secondary fw:500 c:color-gray9">Yearly</div>
    </div>
  );
};
