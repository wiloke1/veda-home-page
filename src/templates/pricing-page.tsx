import { Layout } from 'components/Layout';
import { PlanCard } from 'components/PlanCard';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { IPricingPage, PricingPageFrontMaster } from 'types/Pricing';

export const PricingPageTemplate: FC<PricingPageFrontMaster> = ({ plans }) => {
  return (
    <Section>
      <div className="container">
        <Title title={plans.heading} text={plans.description} />
        <div className="row">
          {plans.body.map((item, index) => {
            return (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4">
                <PlanCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
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
                gatsbyImageData(width: 68, quality: 100, layout: CONSTRAINED, aspectRatio: 1)
              }
            }
            highlight
            buttonText
            body
          }
        }
      }
    }
  }
`;
