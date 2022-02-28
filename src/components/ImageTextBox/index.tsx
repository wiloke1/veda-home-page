import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
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
      <LinkButton className={styles.button} onClick={onButtonClick}>
        {buttonText}
      </LinkButton>
    </div>
  );
};
