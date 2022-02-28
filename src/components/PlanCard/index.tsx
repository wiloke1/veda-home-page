import classNames from 'classnames';
import { Button } from 'components/Button';
import { Image } from 'components/Image';
import { FC } from 'react';
import { Plans } from 'types/Pricing';
import * as styles from './PlanCard.module.scss';

export const PlanCard: FC<Plans> = ({ description, body, featuresTitle, highlight, image, price, title }) => {
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
        <Button>Get started</Button>
      </div>
      {!!featuresTitle && <h4 className={styles.featuresTitle}>{featuresTitle}</h4>}
      <div>
        {body}
        {/* {features.map(feature => {
          return (
            <div className={styles.featureItem} key={feature.text}>
              <i className={classNames('far fa-check', styles.icon)}></i>
              <span>{feature.text}</span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
