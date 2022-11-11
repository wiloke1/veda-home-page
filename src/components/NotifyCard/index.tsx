import { FC } from 'react';
import * as styles from './NotifyCard.module.scss';

export interface NotifyCardProps {
  title: string;
  description: string;
  date: string;
}

export const NotifyCard: FC<NotifyCardProps> = ({ title, description, date }) => {
  return (
    <div className={styles.container}>
      <div className="p:15px_20px d:flex jc:space-between">
        <div className="pr:20px">
          <h3 className={styles.title}>{title}</h3>
          <div>{description}</div>
        </div>
        <div className="fz:12px c:color-gray6 flxs:0">{date}</div>
      </div>
    </div>
  );
};
