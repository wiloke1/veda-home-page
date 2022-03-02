import { FC } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { Layout } from 'components/Layout';
import { BlogList, Post } from 'types/Blog';
import { MarkdownRemarkEdges } from 'types/general';
import { Pagination } from 'components/Pagination';
import { Section } from 'components/Section';
import { PostCard } from 'components/PostCard';

const BlogListIndexPage: FC<BlogList> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const renderPost = ({ node: post }: MarkdownRemarkEdges<Post>) => {
    return (
      <div key={post.id} className="col-xs-12 col-md-6 col-lg-4">
        <Link to={post.fields.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
          <PostCard title={post.frontmatter.title} date={post.frontmatter.date} image={post.frontmatter.featuredimage} excerpt={post.excerpt} />
        </Link>
      </div>
    );
  };

  return (
    <Layout>
      <Section>
        <div className="container">
          <div className="row">{posts.map(renderPost)}</div>
          {pageContext.numPages > 1 && (
            <Pagination
              initialPage={pageContext.currentPage - 1}
              onPageChange={({ selected }) => {
                navigate(selected === 0 ? '/blog' : `/blog/${selected + 1}`);
              }}
              pageRangeDisplayed={5}
              pageCount={pageContext.numPages}
            />
          )}
        </div>
      </Section>
    </Layout>
  );
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
          excerpt(pruneLength: 200)
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
                gatsbyImageData(width: 450, quality: 100, layout: CONSTRAINED, aspectRatio: 1.5)
              }
            }
          }
        }
      }
    }
  }
`;
