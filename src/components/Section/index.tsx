import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import * as styles from './Section.module.scss';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export const Section: FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <section {...rest} className={classNames(styles.container, rest.className)}>
      {children}
    </section>
  );
};
