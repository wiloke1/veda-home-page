import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { GatsbyImage, Image } from 'components/Image';
import { Title } from 'components/Title';
import { FC } from 'react';
import * as styles from './ZigzagCard.module.scss';

export interface ZigzagCardProps {
  title: string;
  description: string;
  image?: GatsbyImage;
  reverse?: boolean;
}

export const ZigzagCard: FC<ZigzagCardProps> = ({ title, description, image, reverse = false }) => {
  return (
    <div className={styles.container}>
      <div className="container-2">
        <div className={classNames('row', styles.row, { [styles.rowReverse]: reverse })}>
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">{!!image && <Image src={image} alt={title} />}</div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <Title title={title} align="left" />
            <div className={styles.description}>{description}</div>
            <GetStartedPopup buttonText="Get started" />
          </div>
        </div>
      </div>
    </div>
  );
};
