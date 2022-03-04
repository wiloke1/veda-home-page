import { Image } from 'components/Image';
import { Tags } from 'components/Tags';
import { FC, useRef } from 'react';
// @ts-ignore
import { Comments, FacebookProvider } from 'react-facebook';
import { PostDetail } from 'types/Blog';
import { FACEBOOK_APP_ID } from 'utils/constants';
import { getOrigin } from 'utils/getOrigin';
import * as styles from './BlogDetailContent.module.scss';
import { useHandleInternalLink } from './useHandleInternalLink';

export const BlogDetailContent: FC<PostDetail> = ({ html, frontmatter: { date, featuredimage, tags, title }, fields: { slug } }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const origin = getOrigin();
  useHandleInternalLink(contentRef);

  return (
    <div className={styles.container}>
      {!!featuredimage && <Image src={featuredimage} alt={title} />}
      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{date}</span>
        <div ref={contentRef} className={styles.content}>
          {typeof html === 'string' ? <div dangerouslySetInnerHTML={{ __html: html }} /> : html}
        </div>
        {tags && tags.length ? (
          <div className={styles.tags}>
            <h4 className={styles.tagTitle}>Tags</h4>
            <Tags tags={tags} />
          </div>
        ) : null}
        <div className={styles.facebookComment}>
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <Comments href={`${origin}${slug}`} width={765} mobile />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
};
