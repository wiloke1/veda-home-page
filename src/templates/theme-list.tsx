import { FC } from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components/Layout';
import { MarkdownRemarkEdges } from 'types/general';
import { ThemeItem, ThemeList } from 'types/Theme';
import { ThemeCard } from 'components/ThemeCard';
import { Section } from 'components/Section';

const ThemeListIndexPage: FC<ThemeList> = ({ data }) => {
  const themes = data.allMarkdownRemark.edges;

  const renderTheme = ({ node: theme }: MarkdownRemarkEdges<ThemeItem>) => {
    return (
      <div key={theme.id} className="col-xs-12 col-sm-4 col-md-3">
        <ThemeCard
          title={theme.frontmatter.title}
          category={theme.frontmatter.category}
          image={theme.frontmatter.image}
          previewHref={theme.frontmatter.previewHref}
        />
      </div>
    );
  };

  return (
    <Layout>
      <Section>
        <div className="container">
          <div className="row">{themes.map(renderTheme)}</div>
        </div>
      </Section>
    </Layout>
  );
};

export default ThemeListIndexPage;

export const pageQuery = graphql`
  query ThemeListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "theme" } } }
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
            category
            image {
              childImageSharp {
                gatsbyImageData(width: 300, quality: 100, layout: CONSTRAINED)
              }
            }
            previewHref
          }
        }
      }
    }
  }
`;
