import classNames from 'classnames';
import { CSSProperties, FC, HTMLAttributes } from 'react';
import * as styles from './Section.module.scss';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
}

export const Section: FC<SectionProps> = ({ children, backgroundColor, ...rest }) => {
  const styleVariables = {
    ...(backgroundColor ? { '--section-background-color': backgroundColor } : {}),
    ...rest.style,
  } as CSSProperties;
  return (
    <section {...rest} style={styleVariables} className={classNames(styles.container, rest.className)}>
      {children}
    </section>
  );
};
