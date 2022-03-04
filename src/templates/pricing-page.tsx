import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { IPricingPage, PricingPageFrontMaster } from 'types/Pricing';
import { PlanComparison } from './PricingPage/PlanComparison';
import { Plans } from './PricingPage/Plans';

export const PricingPageTemplate: FC<PricingPageFrontMaster> = ({ plans, planComparison }) => {
  return (
    <>
      <Plans {...plans} />
      <PlanComparison {...planComparison} />
    </>
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
          decorate
          body {
            title
            description
            price
            highlight
            buttonText
            body
          }
        }
        planComparison {
          heading
          features {
            title
            content
          }
          table {
            title
            content
            price
            highlight
            buttonText
          }
        }
      }
    }
  }
`;
