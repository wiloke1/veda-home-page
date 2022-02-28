import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { Button } from 'components/Button';
import { Image } from 'components/Image';
import { FC } from 'react';
import { Plans } from 'types/Pricing';
import { LinkButton } from 'components/LinkButton';
import * as styles from './PlanCard.module.scss';

export interface PlanCardProps extends Plans {
  onMoreClick?: () => void;
}

export const PlanCard: FC<PlanCardProps> = ({ description, body, buttonText, highlight, image, price, title, onMoreClick }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.highlight]: highlight,
      })}
    >
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt="" imgStyle={{ borderRadius: 10 }} />
        </div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.price} dangerouslySetInnerHTML={{ __html: price }} />
        </div>
      </div>
      <div>{description}</div>
      <div className={styles.divider} />
      <div className={styles.btn}>
        <Button size="large" border={!highlight} style={{ width: '100%', maxWidth: 246 }}>
          {buttonText}
        </Button>
      </div>
      <div className={styles.body}>
        <ReactMarkdown children={body} />
      </div>
      <LinkButton className={styles.learnMore} onClick={onMoreClick}>
        Learn more
      </LinkButton>
    </div>
  );
};
