import classNames from 'classnames';
import { Button } from 'components/Button';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { LinkButton } from 'components/LinkButton';
import { PlanToggleType } from 'components/PlanToggle';
import { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { createGlobalState } from 'react-use';
import { Plans } from 'types/Builder';
import { pmChildren } from 'utils/postMessage';
import * as styles from './PlanCard.module.scss';

export interface PlanCardProps extends Plans {
  onMoreClick?: () => void;
  planType: PlanToggleType;
}

const useIdLoading = createGlobalState('');

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
  const [idLoading, setIdLoading] = useIdLoading();
  const [currentPlan, setCurrentPlan] = useState('');

  useEffect(() => {
    const off1 = pmChildren.on('@landing/plan/success', () => {
      setIdLoading('');
    });
    const off2 = pmChildren.on('@landing/plan/failure', () => {
      setIdLoading('');
    });
    const off3 = pmChildren.on('@landing/currentPlan', ({ plan }) => {
      setCurrentPlan(plan);
    });
    return () => {
      off1();
      off2();
      off3();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {currentPlan === handle && (
            <div className="pos:absolute t:0 r:0 w:40px h:40px bgc:color-secondary c:color-light bdrs:50% d:flex ai:center jc:center fz:18px">
              <i className="far fa-check" />
            </div>
          )}
        </div>
        <div>{description}</div>
        <div className={styles.divider} />
        <div className={styles.btn}>
          {currentPlan === handle ? (
            <Button size="large" style={{ width: '100%', maxWidth: 246 }} backgroundColor="var(--color-gray2)" color="var(--color-gray9)">
              Current Plan
            </Button>
          ) : (
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
          )}
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
