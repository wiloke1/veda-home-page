import { graphql, useStaticQuery } from 'gatsby';
import { ThemeData } from 'types/Theme';

export const useThemeQuery = () => {
  const data = useStaticQuery<ThemeData>(graphql`
    query ThemeQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "theme" } } }
        limit: 8
        skip: 0
      ) {
        edges {
          node {
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
  `);
  const { edges } = data.allMarkdownRemark;

  return edges;
};
