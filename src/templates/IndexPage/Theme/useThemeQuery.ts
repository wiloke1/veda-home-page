import { graphql, useStaticQuery } from 'gatsby';

export const useThemeQuery = () => {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "theme" } } }
        limit: 4
        skip: 0
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
  `);
  const { edges } = data.allMarkdownRemark;

  return edges;
};
