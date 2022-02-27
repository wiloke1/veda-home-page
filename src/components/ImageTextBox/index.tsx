import { GatsbyImage, Image } from 'components/Image';
import { FC } from 'react';
import * as styles from './ImageTextBox.module.scss';

export interface ImageTextBoxProps {
  image: GatsbyImage;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const ImageTextBox: FC<ImageTextBoxProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.button} onClick={onButtonClick}>
        {buttonText}
        <span className={styles.icon}>
          <i className="far fa-arrow-right"></i>
        </span>
      </span>
    </div>
  );
};
