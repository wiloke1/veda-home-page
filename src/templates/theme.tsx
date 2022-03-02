import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

const Theme = () => {
  return <Layout>Theme</Layout>;
};

export default Theme;

export const pageQuery = graphql`
  query ThemeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
`;
