import { graphql, useStaticQuery } from 'gatsby';
import { NavigationData } from 'types/Navigation';

export const useLoginFormStatic = () => {
  const { markdownRemark } = useStaticQuery<NavigationData>(graphql`
    query LoginFormQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "login" } }) {
        frontmatter {
          login {
            action
            method
            inputName
            inputHiddenAction
            placeholder
            buttonText
          }
        }
      }
    }
  `);

  return markdownRemark.frontmatter.login;
};
