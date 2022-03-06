import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import { ZigzagCard } from 'components/ZigzagCard';
import { graphql } from 'gatsby';
import { FC, Fragment } from 'react';
import { BuilderPage, BuilderPageFrontMaster } from 'types/Builder';
import { Features } from './BuilderPage/Features';
import { Hero } from './BuilderPage/Hero';
import { Supports } from './BuilderPage/Supports';
import { Theme } from './BuilderPage/Theme';

export const IndexPageTemplate: FC<BuilderPageFrontMaster> = ({ sections, isNetlify }) => {
  return (
    <>
      {sections.map((section, index) => {
        return (
          <Fragment key={index}>
            {!!section.hero && !section.hero.disable && <Hero {...section.hero} />}
            {!!section.features && !section.features.disable && <Features {...section.features} />}
            {!!section.themes && !section.themes.disable && (
              <Theme
                isNetlify={isNetlify}
                heading={section.themes.heading}
                description={section.themes.description}
                decorate={section.themes.decorate}
              />
            )}
            {!!section.supports && !section.supports.disable && <Supports {...section.supports} />}
            {!!section.zigzag && !section.zigzag.disable && (
              <Section backgroundColor={section.zigzag.backgroundColor}>
                <ZigzagCard {...section.zigzag.body} />
              </Section>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

const IndexPage: FC<BuilderPage> = ({ data }) => {
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
            backgroundColor
            body {
              title
              description
              image
              reverse
            }
          }
        }
      }
    }
  }
`;
