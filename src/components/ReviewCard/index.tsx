import classNames from 'classnames';
import _ from 'lodash';
import { FC } from 'react';
import * as styles from './ReviewCard.module.scss';

export interface ReviewCardProps {
  name: string;
  rate: number;
  date: string;
  text: string;
  hightlight?: boolean;
}

const RATE_MAX = 5;

export const ReviewCard: FC<ReviewCardProps> = ({ name, rate, date, text, hightlight }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.highlight]: hightlight,
      })}
    >
      <div className="header">
        <div>
          <h4 className={classNames(styles.name, { [styles.nameHighlight]: hightlight })}>{name}</h4>
          <div className={classNames(styles.date, { [styles.dateHighlight]: hightlight })}>{date}</div>
        </div>
        <div>
          {_.range(0, RATE_MAX).map((item, index) => {
            return <i key={item} className={`${rate > index ? 'fas' : 'far'}  fa-star`}></i>;
          })}
        </div>
      </div>
      <div className="body">
        <div>{text}</div>
      </div>
    </div>
  );
};
