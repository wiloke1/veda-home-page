import { Image } from 'components/Image';
import { Layout } from 'components/Layout';
import Title from 'components/Title';
import { graphql } from 'gatsby';
import { FC, Fragment, ReactNode } from 'react';
import { HomePage, HomePageFrontMaster, SectionKeys } from 'types/Home';
import { Hero } from './IndexPage/Hero';

export const IndexPageTemplate: FC<HomePageFrontMaster> = ({ hero, features, themes, sectionsSortable }) => {
  const contentMapping: Record<SectionKeys, ReactNode> = {
    hero: <Hero {...hero} />,
    features: (
      <div>
        <Title title={features.heading} text={features.description} />
        {JSON.stringify(features)}
      </div>
    ),
    themes: (
      <div>
        <Title title={themes.heading} text={themes.description} />
        {themes.body.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item.image} alt="" />
              {item.title}
            </div>
          );
        })}
      </div>
    ),
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
          images {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
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
          body {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
          }
        }
      }
    }
  }
`;
