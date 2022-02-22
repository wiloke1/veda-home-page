import { FC, ReactNode } from 'react';
import * as styles from './Title.module.scss';

export interface TitleProps {
  title: string;
  text?: string;
  Left?: ReactNode;
  Right?: ReactNode;
}

const Title: FC<TitleProps> = ({ title, text, Right, Left }) => {
  return (
    <div className={styles.title}>
      <div>
        <div>{Left}</div>
        <div>
          <div>{title}</div>
          {!!text && <div>{text}</div>}
        </div>
      </div>
      <div>{Right}</div>
    </div>
  );
};

export default Title;
