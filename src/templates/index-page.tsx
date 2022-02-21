import Layout from 'components/Layout';
import Title from 'components/Title';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import { HomePage, HomePageData } from 'types/Home';
import { View } from 'wiloke-react-core';

export const IndexPageTemplate: FC<HomePageData> = ({ features, themes }) => {
  return (
    <>
      <View>
        <Title title={features.heading} text={features.description} />
        {JSON.stringify(features)}
      </View>
      <View>
        <Title title={themes.heading} text={themes.description} />
        {themes.body.map(item => {
          return (
            <View key={item.title}>
              {typeof item.image === 'string' ? <img src={item.image} /> : <GatsbyImage image={item.image.childImageSharp.gatsbyImageData} alt="" />}
              {item.title}
            </View>
          );
        })}
      </View>
    </>
  );
};

const IndexPage: FC<HomePage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate features={frontmatter.features} themes={frontmatter.themes} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
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
