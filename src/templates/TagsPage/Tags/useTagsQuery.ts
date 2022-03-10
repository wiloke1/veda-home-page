import { graphql, useStaticQuery } from 'gatsby';

export const useTagsQuery = () => {
  const { tags } = useStaticQuery(graphql`
    query TagsQuery2 {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 10000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return tags;
};
