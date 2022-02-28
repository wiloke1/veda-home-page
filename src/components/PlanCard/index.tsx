import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { LinkButton } from 'components/LinkButton';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Plans } from 'types/Pricing';
import * as styles from './PlanCard.module.scss';

export interface PlanCardProps extends Plans {
  onMoreClick?: () => void;
}

export const PlanCard: FC<PlanCardProps> = ({ description, body, buttonText, highlight, price, title, onMoreClick }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.highlight]: highlight,
      })}
    >
      <div>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.price} dangerouslySetInnerHTML={{ __html: price }} />
        </div>
        <div>{description}</div>
        <div className={styles.divider} />
        <div className={styles.btn}>
          <GetStartedPopup buttonHighlight={highlight} buttonText={buttonText} buttonStyle={{ width: '100%', maxWidth: 246 }} />
        </div>
        <div className={styles.body}>
          <ReactMarkdown children={body} />
        </div>
      </div>
      <LinkButton className={styles.learnMore} onClick={onMoreClick}>
        Learn more
      </LinkButton>
    </div>
  );
};
