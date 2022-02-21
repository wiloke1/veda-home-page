import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { HomePage, HomePageData } from 'types/Home';

export const IndexPageTemplate: FC<HomePageData> = ({ features, themes }) => {
  return (
    <>
      {JSON.stringify(features)}
      {JSON.stringify(themes)}
      {/* <View>
        <Title title={features.heading} text={features.description} />
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
      </View> */}
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
