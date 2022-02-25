import classNames from 'classnames';
import { FC } from 'react';
import * as styles from './Title.module.scss';

export interface TitleProps {
  subTitle?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center' | 'right';
}

export const Title: FC<TitleProps> = ({ subTitle, title, text, align = 'center' }) => {
  return (
    <div className={classNames(styles.container, styles[align])}>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      <h2 className={styles.title}>{title}</h2>
      {!!text && <div className={styles.text}>{text}</div>}
    </div>
  );
};
