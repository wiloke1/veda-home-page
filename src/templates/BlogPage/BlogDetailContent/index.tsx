import classNames from 'classnames';
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
    <div className="maw:1200px m:80px_auto_100px">
      {!!featuredimage && <Image src={featuredimage} alt={title} />}
      <div className="maw:765px m:auto">
        <h1 className="fz:pfs(30px,40px) mt:30px">{title}</h1>
        <span className="fz:14px ff:font-secondary">{date}</span>
        <div ref={contentRef} className={classNames(styles.content, 'mt:20px fz:17px c:color-gray8')}>
          {typeof html === 'string' ? <div dangerouslySetInnerHTML={{ __html: html }} /> : html}
        </div>
        {tags && tags.length ? (
          <div className="mt:40px">
            <h4 className="mb:10px">Tags</h4>
            <Tags tags={tags} />
          </div>
        ) : null}
        <div className="mt:30px">
          <FacebookProvider appId={FACEBOOK_APP_ID}>
            <Comments href={`${origin}${slug}`} width={765} mobile />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
};
