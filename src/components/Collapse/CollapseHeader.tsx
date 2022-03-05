import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './Collapse.module.scss';

export interface CollapseHeaderProps {
  active: boolean;
  onClick: () => void;
}

export const CollapseHeader: FC<CollapseHeaderProps> = ({ active, children, onClick }) => {
  return (
    <div className={classNames(styles.header, { [styles.headerActive]: active })} onClick={onClick}>
      {children}
      <i className={`fal fa-${active ? 'minus' : 'plus'} ${styles.icon}`}></i>
    </div>
  );
};
