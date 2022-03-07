import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { IPricingPage, PricingPageFrontMaster } from 'types/Pricing';
import { Faqs } from './PricingPage/Faqs';
import { PlanComparison } from './PricingPage/PlanComparison';

export const PricingPageTemplate: FC<PricingPageFrontMaster> = ({ planComparison, faqs }) => {
  return (
    <>
      <div className="container">
        <div
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            borderRadius: 20,
            backgroundColor: '#ffd3d3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <PlanComparison {...planComparison} />
      <Faqs {...faqs} />
    </>
  );
};

const PricingPage: FC<IPricingPage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout overflow="visible">
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
        faqs {
          heading
          description
          decorate
          collapse {
            title
            content
          }
        }
      }
    }
  }
`;
