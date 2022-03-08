import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { BuilderPage } from 'types/Builder';
import { BuilderPageTemplate } from './BuilderPage';

const IndexPage: FC<BuilderPage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <Layout>{<BuilderPageTemplate {...frontmatter} />}</Layout>;
};

export default IndexPage;

export const pageQuery = graphql`
  query BuilderPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        sections {
          type
          heading
          description
          decorate
          enable
          backgroundColor
          backgroundImage {
            childImageSharp {
              gatsbyImageData(width: 1500, quality: 100, layout: CONSTRAINED)
            }
          }
          # Hero
          heroImage {
            childImageSharp {
              gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
            }
          }
          # Supports
          supportsContent {
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
          # Features
          featuresContent {
            image {
              childImageSharp {
                gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
              }
            }
            title
            description
          }
          # Zigzag
          zigzagContent {
            title
            description
            image
            reverse
          }
          # Plans
          plansContent {
            title
            description
            price
            highlight
            buttonText
            body
          }
          # Collapse
          collapseContent {
            title
            content
          }
          # Plan comparison
          planFeatures {
            title
            content
          }
          plansTable {
            title
            price
            highlight
            buttonText
            content
          }
          # Contact form
          contactFormContent {
            nameLabel
            emailLabel
            websiteLabel
            optionsLabel
            options {
              value
            }
            messageLabel
            buttonText
          }
        }
      }
    }
  }
`;
