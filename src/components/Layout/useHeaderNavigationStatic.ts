import { graphql, useStaticQuery } from 'gatsby';
import { NavigationData } from 'types/Navigation';

export const useHeaderNavigationStatic = () => {
  const { markdownRemark } = useStaticQuery<NavigationData>(graphql`
    query HeaderNavigationQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "navigation" } }) {
        frontmatter {
          headerNavigation {
            label
            url
          }
        }
      }
    }
  `);

  return markdownRemark.frontmatter.headerNavigation;
};
