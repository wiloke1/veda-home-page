import Layout from 'components/Layout';
import Title from 'components/Title';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import { HomePage, HomePageData } from 'types/Home';
import { View } from 'wiloke-react-core';

export const IndexPageTemplate: FC<HomePageData> = ({ features, themes }) => {
  // const heroImage = getImage(image) || image;

  return (
    <>
      <View>
        <Title title={features.heading} text={features.description} />
        {JSON.stringify(features)}
      </View>
      <View>
        <Title title={themes.heading} text={themes.description} />
        {themes.body.map(item => {
          const image = getImage(item.image) as IGatsbyImageData;
          return (
            <View key={item.title}>
              <GatsbyImage image={image} alt="" />
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
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
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
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
