import { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from 'components/Layout';
import { BlogList, Post } from 'types/Blog';
import { MarkdownRemarkEdges } from 'types/general';

const BlogListIndexPage: FC<BlogList> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  const renderPost = ({ node: post }: MarkdownRemarkEdges<Post>) => {
    return (
      <div key={post.id}>
        <h3>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <p>{post.frontmatter.date}</p>
        <p>{post.excerpt}</p>
      </div>
    );
  };

  return <Layout>{posts.map(renderPost)}</Layout>;
};

export default BlogListIndexPage;

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
