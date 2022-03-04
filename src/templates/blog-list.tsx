import { Layout } from 'components/Layout';
import { Pagination } from 'components/Pagination';
import { PostCard } from 'components/PostCard';
import { Section } from 'components/Section';
import { graphql, Link, navigate } from 'gatsby';
import { FC } from 'react';
import { BlogList, Post } from 'types/Blog';
import { MarkdownRemarkEdges } from 'types/general';
import { BlogSearch } from './BlogPage/BlogSearch';

const BlogListIndexPage: FC<BlogList> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const renderPost = ({ node: post }: MarkdownRemarkEdges<Post>) => {
    return (
      <div key={post.id} className="col-xs-12 col-md-6 col-lg-4">
        <Link to={post.fields.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
          <PostCard
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            image={post.frontmatter.featuredimage}
            excerpt={post.excerpt}
            slug={post.fields.slug}
          />
        </Link>
      </div>
    );
  };

  return (
    <Layout>
      <BlogSearch />
      <Section style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="row">{posts.map(renderPost)}</div>
          {pageContext.numPages > 1 && (
            <div style={{ marginTop: 50 }}>
              <Pagination
                initialPage={pageContext.currentPage - 1}
                onPageChange={({ selected }) => {
                  navigate(selected === 0 ? '/blog' : `/blog/${selected + 1}`);
                }}
                pageRangeDisplayed={5}
                pageCount={pageContext.numPages}
              />
            </div>
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
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
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
