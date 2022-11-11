import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

const Notification = () => {
  return <Layout>Notification</Layout>;
};

export default Notification;

export const pageQuery = graphql`
  query NotificationByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        templateKey
        date(formatString: "MMMM DD, YYYY")
        href
      }
    }
  }
`;
