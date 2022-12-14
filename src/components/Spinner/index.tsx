import { CSSProperties, FC } from 'react';
import classNames from 'classnames';
import * as styles from './styles.module.scss';

export interface ActivityIndicatorProps {
  /** Kích thước của component */
  size?: 'small' | 'medium' | 'large' | number;
  itemClassName?: string;
}

export const Spinner: FC<ActivityIndicatorProps> = ({ size = 'small', itemClassName, ...rest }) => {
  const sizeClassName = typeof size === 'string' ? styles[size] : '';
  const sizeStyle: CSSProperties = typeof size === 'number' ? { width: size, height: size } : {};
  const itemClipRectStyle: CSSProperties = typeof size === 'number' ? { clip: `rect(0,  ${size}px,  ${size}px,  ${size / 2}px)` } : {};
  return (
    <div {...rest} className="d:inline-block">
      <div className={classNames('pos:relative', sizeClassName)} style={sizeStyle}>
        <div className={classNames(styles.item, itemClassName)} style={itemClipRectStyle} />
      </div>
    </div>
  );
};
