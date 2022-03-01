import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC, Fragment, ReactNode } from 'react';
import { HomePage, HomePageFrontMaster, SectionKeys } from 'types/Home';
import { Features } from './IndexPage/Features';
import { Hero } from './IndexPage/Hero';
import { Supports } from './IndexPage/Supports';
import { Theme } from './IndexPage/Theme';

export const IndexPageTemplate: FC<HomePageFrontMaster> = ({ isNetlify, hero, features, themes, supports, sectionsSortable }) => {
  const contentMapping: Record<SectionKeys, ReactNode> = {
    hero: <Hero {...hero} />,
    features: <Features {...features} />,
    themes: <Theme isNetlify={isNetlify} heading={themes.heading} description={themes.description} decorate={themes.decorate} />,
    supports: <Supports {...supports} />,
  };

  return (
    <>
      {sectionsSortable.map(item => {
        if (!item.enable) {
          return null;
        }
        return <Fragment key={item.key}>{contentMapping[item.key]}</Fragment>;
      })}
    </>
  );
};

const IndexPage: FC<HomePage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        sectionsSortable {
          key
          enable
        }
        hero {
          heading
          description
        }
        features {
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
          heading
          description
          decorate
        }
        supports {
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
      }
    }
  }
`;
