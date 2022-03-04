import { GatsbyImage, Image } from 'components/Image';
import { LinkButton } from 'components/LinkButton';
import { FC } from 'react';
// @ts-ignore
import { CommentsCount, FacebookProvider } from 'react-facebook';
import { FACEBOOK_APP_ID } from 'utils/constants';
import { getOrigin } from 'utils/getOrigin';
import * as styles from './PostCard.module.scss';

export interface PostCardProps {
  image?: GatsbyImage;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export const PostCard: FC<PostCardProps> = ({ image, title, date, excerpt, slug }) => {
  const origin = getOrigin();

  return (
    <div className={styles.container}>
      {!!image && <Image src={image} alt={title} imgStyle={{ borderRadius: 6 }} />}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <i className="far fa-calendar-alt" />
          <p className={styles.date}>{date}</p>
        </div>
        •
        <div className={styles.metaItem}>
          <i className="far fa-comment-lines" />
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <CommentsCount href={`${origin}${slug}`} />
          </FacebookProvider>
        </div>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
      <LinkButton>Learn more</LinkButton>
    </div>
  );
};
