import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Section } from 'components/Section';
import { PostCard } from 'components/PostCard';
import { BlogList, Post } from 'types/Blog';
import { MarkdownRemarkEdges } from 'types/general';
import { Button } from 'components/Button';
import { Layout } from '../components/Layout';

const TagRoute: FC<BlogList> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const tag = pageContext.tag;
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;
  console.log(123, pageContext);

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
        <Helmet title={`${tag} | ${title}`} />
        <div className="container">
          <h3 style={{ marginBottom: 20 }}>{tagHeader}</h3>
          <Link to="/tags">
            <Button>Browse all tags</Button>
          </Link>
          <div className="row">{posts.map(renderPost)}</div>
        </div>
      </Section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
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
