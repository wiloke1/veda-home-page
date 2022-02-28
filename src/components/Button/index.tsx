import classNames from 'classnames';
import { CSSProperties, FC } from 'react';
import * as styles from './Button.module.scss';

export interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset' | 'link';
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  radius?: number;
  size?: 'small' | 'medium' | 'large';
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  href,
  type,
  className,
  onClick,
  backgroundColor = 'var(--color-primary)',
  color = 'var(--color-light)',
  radius = 6,
  children,
  size = 'medium',
  style,
}) => {
  const styleVariables = {
    '--btn-radius': radius,
    '--btn-background-color': backgroundColor,
    '--btn-color': color,
    ...style,
  } as CSSProperties;

  if (!!href || type === 'link') {
    return (
      <a href={href} className={classNames(styles.container, styles[size], className)} onClick={onClick} style={styleVariables}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames(styles.container, styles[size], className)} onClick={onClick} style={styleVariables}>
      {children}
    </button>
  );
};
