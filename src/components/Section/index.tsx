import classNames from 'classnames';
import { GatsbyImage, Image } from 'components/Image';
import { CSSProperties, FC, HTMLAttributes } from 'react';
import * as styles from './Section.module.scss';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  backgroundImage?: GatsbyImage;
}

export const Section: FC<SectionProps> = ({ children, backgroundColor, backgroundImage, ...rest }) => {
  const styleVariables = {
    ...(backgroundColor ? { '--section-background-color': backgroundColor } : {}),
    ...rest.style,
  } as CSSProperties;
  return (
    <section {...rest} style={styleVariables} className={classNames(styles.container, rest.className)}>
      {children}
      {!!backgroundImage && <Image src={backgroundImage} alt="" />}
    </section>
  );
};
