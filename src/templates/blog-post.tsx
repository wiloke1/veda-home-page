import { graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { BlogDetail, PostDetail } from 'types/Blog';
import { Layout } from '../components/Layout';
import { BlogDetailContent } from './BlogPage/BlogDetailContent';

export const BlogPostTemplate: FC<PostDetail & { origin: string }> = props => {
  const {
    frontmatter: { title, description },
  } = props;
  return (
    <article>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${title}`}</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <BlogDetailContent {...props} />
    </article>
  );
};

const BlogPost: FC<BlogDetail> = ({ data, location, pageResources, serverData }) => {
  const { markdownRemark: post } = data;

  console.log(pageResources, serverData);

  return (
    <Layout>
      <BlogPostTemplate {...post} origin={location.origin} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 100, layout: CONSTRAINED)
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
