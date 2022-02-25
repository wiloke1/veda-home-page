import { GatsbyImage, Image } from 'components/Image';
import { FC } from 'react';
import * as styles from './ThemeCard.module.scss';

export interface ThemeCardProps {
  title: string;
  image: GatsbyImage;
  category: string;
}

export const ThemeCard: FC<ThemeCardProps> = ({ title, image, category }) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  );
};
