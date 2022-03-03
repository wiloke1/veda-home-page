import { Image } from 'components/Image';
import { Tags } from 'components/Tags';
import { FC } from 'react';
// @ts-ignore
import { FacebookProvider, Comments } from 'react-facebook';
import { PostDetail } from 'types/Blog';
import * as styles from './BlogDetailContent.module.scss';

const FACEBOOK_APP_ID = '927671281263475';

export const BlogDetailContent: FC<PostDetail & { origin?: string }> = ({
  html,
  frontmatter: { date, featuredimage, tags, title },
  fields: { slug },
  origin,
}) => {
  const _origin = origin?.includes('localhost') ? 'https://veda-builder.netlify.app' : origin;
  return (
    <div className={styles.container}>
      <Image src={featuredimage} alt={title} />
      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{date}</span>
        <div className={styles.content}>{typeof html === 'string' ? <div dangerouslySetInnerHTML={{ __html: html }} /> : html}</div>
        {tags && tags.length ? (
          <div className={styles.tags}>
            <h4 className={styles.tagTitle}>Tags</h4>
            <Tags tags={tags} />
          </div>
        ) : null}
        <div className={styles.facebookComment}>
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <Comments href={`${_origin}${slug}`} width={765} mobile />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
};
