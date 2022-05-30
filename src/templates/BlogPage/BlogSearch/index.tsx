import { Search } from 'components/Search';
import { FC } from 'react';
import bgSearch from './bg.jpg';

export const BlogSearch: FC = () => {
  return (
    <div className="pos:relative z:10 p:50px_0 bgc:color-gray2 bgz:cover bgp:center" style={{ backgroundImage: `url('${bgSearch}')` }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8">
            <h2 className="fz:pfs(24px,40px) c:color-gray9">Blog</h2>
            <p className="fz:16px c:color-gray7">Get the knowledge you need to build a successful eCommerce store</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
            <Search templateKey="blog-post" />
          </div>
        </div>
      </div>
    </div>
  );
};
