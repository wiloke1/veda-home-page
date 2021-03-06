import { graphql, useStaticQuery } from 'gatsby';
import { NavigationData } from 'types/Navigation';

export const useHeaderNavigationStatic = () => {
  const { markdownRemark } = useStaticQuery<NavigationData>(graphql`
    query HeaderNavigationQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "headerNavigation" } }) {
        frontmatter {
          headerNavigation {
            label
            url
            subMenu {
              label
              url
            }
          }
        }
      }
    }
  `);

  return markdownRemark.frontmatter.headerNavigation;
};
