import { Image } from 'components/Image';
import { Tags } from 'components/Tags';
import { FC } from 'react';
import { PostDetail } from 'types/Blog';
import * as styles from './BlogDetailContent.module.scss';

export const BlogDetailContent: FC<PostDetail> = ({ html, frontmatter: { date, featuredimage, tags, title } }) => {
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
      </div>
    </div>
  );
};
