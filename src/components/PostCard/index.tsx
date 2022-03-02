import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
import { FC } from 'react';
import * as styles from './PostCard.module.scss';

export interface PostCardProps {
  image?: GatsbyImage;
  title: string;
  date: string;
  excerpt: string;
}

export const PostCard: FC<PostCardProps> = ({ image, title, date, excerpt }) => {
  return (
    <div className={styles.container}>
      {!!image && <Image src={image} alt={title} imgStyle={{ borderRadius: 6 }} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.excerpt}>{excerpt}</p>
      <LinkButton>Learn more</LinkButton>
    </div>
  );
};
