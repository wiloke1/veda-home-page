import { Search } from 'components/Search';
import { FC } from 'react';
import * as styles from './BlogSearch.module.scss';

export const BlogSearch: FC = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8">
            <h3>Blog</h3>
            <p>Get the knowledge you need to build a successful eCommerce store</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
            <Search templateKey="blog-post" />
          </div>
        </div>
      </div>
    </div>
  );
};
