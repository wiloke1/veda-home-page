import classNames from 'classnames';
import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
import { CSSProperties, FC } from 'react';
import * as styles from './ImageTextBox.module.scss';

export interface ImageTextBoxProps {
  image?: GatsbyImage;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  type?: 'default' | 'boxed';
  containerStyle?: CSSProperties;
}

export const ImageTextBox: FC<ImageTextBoxProps> = ({ image, title, description, buttonText, onButtonClick, type = 'default', containerStyle }) => {
  return (
    <div className={classNames(styles.container, { [styles.boxed]: type === 'boxed' })} style={containerStyle}>
      {!!image && <Image src={image} alt={title} className={classNames(styles.image, { [styles.imageBoxed]: type === 'boxed' })} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {!!buttonText && (
        <LinkButton className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </LinkButton>
      )}
    </div>
  );
};
