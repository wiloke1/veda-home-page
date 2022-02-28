import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './LinkButton.module.scss';

export interface LinkButtonProps {
  className?: string;
  onClick?: () => void;
}

export const LinkButton: FC<LinkButtonProps> = ({ onClick, children, className }) => {
  return (
    <span className={classNames(styles.container, className)} onClick={onClick}>
      {children}
      <span className={styles.icon}>
        <i className="far fa-arrow-right"></i>
      </span>
    </span>
  );
};
