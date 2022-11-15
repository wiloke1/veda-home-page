import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { LinkButton } from 'components/LinkButton';
import { PlanToggleType } from 'components/PlanToggle';
import { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Plans } from 'types/Builder';
import { pmChildren } from 'utils/postMessage';
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
  handle,
}) => {
  const [idLoading, setIdLoading] = useState('');

  useEffect(() => {
    const off1 = pmChildren.on('@landing/plan/success', () => {
      setIdLoading('');
    });
    const off2 = pmChildren.on('@landing/plan/failure', () => {
      setIdLoading('');
    });
    return () => {
      off1();
      off2();
    };
  }, []);

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
            buttonSize="large"
            buttonHighlight={highlight}
            buttonText={buttonText}
            buttonStyle={{ width: '100%', maxWidth: 246 }}
            isLoading={idLoading === handle}
            onClickForBuilder={() => {
              if (!idLoading) {
                pmChildren.emit('@landing/plan/request', {
                  handle,
                  type: planType,
                });
                setIdLoading(handle);
              }
            }}
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
