import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import { FC, Fragment } from 'react';
import { BuilderPage, BuilderPageFrontMaster } from 'types/Builder';
import { Features } from './IndexPage/Features';
import { Hero } from './IndexPage/Hero';
import { Supports } from './IndexPage/Supports';
import { Theme } from './IndexPage/Theme';

export const IndexPageTemplate: FC<BuilderPageFrontMaster> = ({ sections, isNetlify }) => {
  return (
    <>
      {sections.map((section, index) => {
        return (
          <Fragment key={index}>
            {!!section.hero && !section.hero.enable && <Hero {...section.hero} />}
            {!!section.features && !section.features.enable && <Features {...section.features} />}
            {!!section.themes && !section.themes.enable && (
              <Theme
                isNetlify={isNetlify}
                heading={section.themes.heading}
                description={section.themes.description}
                decorate={section.themes.decorate}
              />
            )}
            {!!section.supports && !section.supports.enable && <Supports {...section.supports} />}
          </Fragment>
        );
      })}
    </>
  );

  // const contentMapping: Record<SectionKeys, ReactNode> = {
  //   hero: <Hero {...hero} />,
  //   features: <Features {...features} />,
  //   themes: (
  //     <>
  //       <Theme isNetlify={isNetlify} heading={themes.heading} description={themes.description} decorate={themes.decorate} />
  //       <Section>
  //         <ZigzagCard
  //           reverse
  //           title="Drag, drop, done"
  //           description="Create pixel-perfect designs for every purpose with more than 80 elements+ and hundreds of pre-made blocks and templates"
  //           image="https://ucarecdn.com/2e2454cb-a08c-4ed1-8d89-4949c7908c52/-/format/auto/-/preview/960x960/-/quality/lighter/drag.png"
  //         />
  //       </Section>
  //       <Section backgroundColor="#fbedff">
  //         <ZigzagCard
  //           title="Turn browsers to buyers"
  //           description="Make your offers irresistible with promotions, upsell & cross-sell techniques, cart modifications, and alerts"
  //           image="https://ucarecdn.com/39504b18-0c7b-4005-9aad-f1dd0fdb2578/-/format/auto/-/preview/1024x1024/-/quality/lighter/turn.png"
  //         />
  //       </Section>
  //       <Section>
  //         <ZigzagCard
  //           reverse
  //           title="Integrate with your favs"
  //           description="Find yours, and find more with our list of 30+ top Shopify apps, seamlessly integrated to best display on your gem-pages"
  //           image="https://ucarecdn.com/7b0fdee1-1ac7-407e-9dc0-659118e5670c/-/format/auto/-/preview/1024x1024/-/quality/lighter/integrate.png"
  //         />
  //       </Section>
  //     </>
  //   ),
  //   supports: <Supports {...supports} />,
  // };

  // return (
  //   <>
  //     {sectionsSortable.map(item => {
  //       if (!item.enable) {
  //         return null;
  //       }
  //       return <Fragment key={item.key}>{contentMapping[item.key]}</Fragment>;
  //     })}
  //   </>
  // );
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
  }
`;
