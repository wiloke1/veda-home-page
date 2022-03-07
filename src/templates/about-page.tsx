import { Layout } from 'components/Layout';
import { FC } from 'react';
import { BuilderPage } from 'types/Builder';

const AboutPage: FC<BuilderPage> = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  console.log(data);

  return <Layout>{/* <BuilderPageTemplate {...frontmatter} /> */}</Layout>;
};

export default AboutPage;

// export const pageQuery = graphql`
//   query AboutPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
//     }
//   }
// `;
