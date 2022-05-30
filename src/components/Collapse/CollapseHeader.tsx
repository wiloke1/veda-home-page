import classNames from 'classnames';
import { FC } from 'react';

export interface CollapseHeaderProps {
  active: boolean;
  onClick: () => void;
}

export const CollapseHeader: FC<CollapseHeaderProps> = ({ active, children, onClick }) => {
  const className = 'pos:relative ff:font-secondary fw:500 fz:16px c:var(--color-gray9) p:20px_50px_20px_20px cur:pointer us:none';
  const iconClassName = 'pos:absolute t:50% r:20px trf:translateY(-50%) fz:20px';
  const activeClassName = 'bdb:1px_solid_var(--color-gray3)';
  return (
    <div className={classNames(className, { [activeClassName]: active })} onClick={onClick}>
      {children}
      <i className={`fal fa-${active ? 'minus' : 'plus'} ${iconClassName}`}></i>
    </div>
  );
};
