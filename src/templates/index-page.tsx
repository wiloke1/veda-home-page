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

// 103ac214-6e57-5572-afb9-06c37839bd88
export const pageQuery = graphql`
  query BuilderPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        sections {
          type
          heading
          description
          decorate
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
        }
      }
    }
  }
`;

// frontmatter {
//     sections {
//       hero {
//         disable
//         heading
//         description
//       }
//       features {
//         disable
//         heading
//         description
//         decorate
//         body {
//           image {
//             childImageSharp {
//               gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
//             }
//           }
//           title
//           description
//         }
//       }
//       themes {
//         disable
//         heading
//         description
//         decorate
//       }
//       supports {
//         disable
//         heading
//         description
//         decorate
//         body {
//           image {
//             childImageSharp {
//               gatsbyImageData(width: 180, quality: 100, layout: CONSTRAINED)
//             }
//           }
//           title
//           description
//           buttonText
//           link
//         }
//       }
//       zigzag {
//         disable
//         body {
//           title
//           description
//           image
//           reverse
//         }
//         backgroundColor
//       }
//     }
//   }
