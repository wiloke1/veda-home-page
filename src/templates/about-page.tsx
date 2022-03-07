import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { BuilderPage } from 'types/Builder';
import { BuilderPageTemplate } from './BuilderPage';

const AboutPage: FC<BuilderPage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BuilderPageTemplate {...frontmatter} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        sections {
          hero {
            disable
            heading
            description
          }
          features {
            disable
            heading
            description
            decorate
            body {
              image {
                childImageSharp {
                  gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
                }
              }
              title
              description
            }
          }
          themes {
            disable
            heading
            description
            decorate
          }
          supports {
            disable
            heading
            description
            decorate
            body {
              image {
                childImageSharp {
                  gatsbyImageData(width: 180, quality: 100, layout: CONSTRAINED)
                }
              }
              title
              description
              buttonText
              link
            }
          }
          zigzag {
            disable
            body {
              title
              description
              image
              reverse
            }
            backgroundColor
          }
        }
      }
    }
  }
`;
