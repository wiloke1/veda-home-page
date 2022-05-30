import classNames from 'classnames';
import { CSSProperties, FC } from 'react';
import * as styles from './Button.module.scss';

export interface ButtonProps {
  href?: string;
  target?: 'blank' | 'self' | 'parent' | 'top';
  type?: 'button' | 'submit' | 'reset' | 'link';
  className?: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  radius?: number;
  size?: 'small' | 'medium' | 'large';
  style?: CSSProperties;
  border?: boolean;
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
  border = false,
  target = 'self',
}) => {
  const styleVariables = {
    '--btn-radius': radius,
    '--btn-background-color': backgroundColor,
    '--btn-color': color,
    ...style,
  } as CSSProperties;

  const containerClassName =
    'd:inline-block bxsh:none bd:0 p:14px_30px bgc:var(--btn-background-color) bdrs:6px c:var(--btn-color) fz:14px ff:var(--font-secondary) fw:500 ta:center td:none cur:pointer trs:0.2s';
  const classes = classNames(containerClassName, styles[size], { [styles.border]: border }, className);

  if (!!href || type === 'link') {
    return (
      <a href={href} target={`_${target}`} className={classes} onClick={onClick} style={styleVariables}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} style={styleVariables}>
      {children}
    </button>
  );
};
