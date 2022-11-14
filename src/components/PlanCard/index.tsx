import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { LinkButton } from 'components/LinkButton';
import { PlanToggleType } from 'components/PlanToggle';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Plans } from 'types/Builder';
import * as styles from './PlanCard.module.scss';

export interface PlanCardProps extends Plans {
  onMoreClick?: () => void;
  planType: PlanToggleType;
}

export const PlanCard: FC<PlanCardProps> = ({
  description,
  body,
  buttonText,
  highlight,
  pricePerYear,
  pricePerMonth,
  title,
  onMoreClick,
  planType,
}) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.highlight]: highlight,
      })}
    >
      <div>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.price} dangerouslySetInnerHTML={{ __html: planType === 'monthly' ? pricePerMonth : pricePerYear }} />
        </div>
        <div>{description}</div>
        <div className={styles.divider} />
        <div className={styles.btn}>
          <GetStartedPopup
            type={planType}
            buttonSize="large"
            buttonHighlight={highlight}
            buttonText={buttonText}
            buttonStyle={{ width: '100%', maxWidth: 246 }}
          />
        </div>
        <div className={styles.body}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
      <LinkButton className={styles.learnMore} onClick={onMoreClick}>
        Learn more
      </LinkButton>
    </div>
  );
};
