import { Button } from 'components/Button';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { GatsbyImage, Image } from 'components/Image';
import { FC } from 'react';
import * as styles from './ThemeCard.module.scss';

export interface ThemeCardProps {
  title: string;
  image: GatsbyImage;
  category: string;
  previewHref?: string;
}

export const ThemeCard: FC<ThemeCardProps> = ({ title, image, category, previewHref }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt={title} />
        <div className={styles.buttonGroup}>
          <GetStartedPopup buttonText="Install" buttonBackground="var(--color-secondary)" buttonStyle={{ minWidth: 150, marginBottom: 10 }} />
          <Button href={previewHref} target="blank" style={{ minWidth: 150 }}>
            Preview
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  );
};
