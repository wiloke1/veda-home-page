import classNames from 'classnames';
import { FC } from 'react';
import { Section } from 'types/general';
import { decorates } from './Decorate';
import * as styles from './Title.module.scss';

export interface TitleProps {
  subTitle?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center' | 'right';
  decorate?: Section['decorate'];
}

export const Title: FC<TitleProps> = ({ subTitle, title, text, align = 'center', decorate }) => {
  return (
    <div className={classNames(styles.container, styles[align])}>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: !!decorate ? title.replace(/<span>/g, `<span>${decorates[decorate]}`) : title,
        }}
      />
      {!!text && <div className={styles.text}>{text}</div>}
    </div>
  );
};
