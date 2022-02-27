import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { graphql } from 'gatsby';
import { FC, Fragment, ReactNode } from 'react';
import { HomePage, HomePageFrontMaster, SectionKeys } from 'types/Home';
import { Hero } from './IndexPage/Hero';
import { Supports } from './IndexPage/Supports';
import { Theme } from './IndexPage/Theme';

export const IndexPageTemplate: FC<HomePageFrontMaster> = ({ isNetlify, hero, features, themes, supports, sectionsSortable }) => {
  const contentMapping: Record<SectionKeys, ReactNode> = {
    hero: <Hero {...hero} />,
    features: (
      <Section>
        <Title title={features.heading} text={features.description} />
        {JSON.stringify(features)}
      </Section>
    ),
    themes: <Theme isNetlify={isNetlify} heading={themes.heading} description={themes.description} />,
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
          form {
            action
            placeholder
            buttonText
          }
        }
        features {
          heading
          description
          body {
            icon
            title
            description
          }
        }
        themes {
          heading
          description
        }
        supports {
          heading
          description
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
