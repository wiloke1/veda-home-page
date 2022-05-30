import classNames from 'classnames';
import { FC } from 'react';

export interface LinkButtonProps {
  className?: string;
  onClick?: () => void;
}

export const LinkButton: FC<LinkButtonProps> = ({ onClick, children, className }) => {
  const containerClassName = 'd:inline-block fz:16px ff:font-primary fw:500 c:color-primary p:10px_0 cur:pointer';
  return (
    <span className={classNames(containerClassName, className)} onClick={onClick}>
      {children}
      <span className="d:inline-block fz:12px ml:8px trs:0.3s">
        <i className="far fa-arrow-right"></i>
      </span>
    </span>
  );
};
