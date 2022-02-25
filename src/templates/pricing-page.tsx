import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { IPricingPage, PricingPageFrontMaster } from 'types/Pricing';

export const PricingPageTemplate: FC<PricingPageFrontMaster> = ({ plans }) => {
  return (
    <Section>
      <Title subTitle={plans.subHeading} title={plans.heading} text={plans.description} />
      {JSON.stringify(plans.body)}
    </Section>
  );
};

const PricingPage: FC<IPricingPage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PricingPageTemplate {...frontmatter} />
    </Layout>
  );
};

export default PricingPage;

export const pageQuery = graphql`
  query PricingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "pricing-page" } }) {
      frontmatter {
        plans {
          heading
          description
          body {
            title
            description
            price
            image {
              childImageSharp {
                gatsbyImageData(width: 100, quality: 100, layout: CONSTRAINED)
              }
            }
            highlight
            features {
              text
            }
          }
        }
      }
    }
  }
`;
