import * as path from 'path';
import { CreatePagesArgs } from 'gatsby';
import _ from 'lodash';

interface Query {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          tags: string[];
          templateKey: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

const POST_PER_PAGE = 10;

export const createPages = async ({ actions, graphql }: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions;
  const result = await graphql<Query>(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);
  if (result.errors || !result.data) {
    console.error(result.errors);
    throw new Error('Unexpected error from graphql query during create pages');
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(edge => {
    const id = edge.node.id;
    createPage({
      path: edge.node.fields.slug,
      // @ts-ignore
      tags: edge.node.frontmatter.tags,
      component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // Tag pages:
  let tags: string[] = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.tsx`),
      context: {
        tag,
      },
    });
  });

  // Create Blog List Pages
  const blogPosts = posts.filter(item => item.node.frontmatter.templateKey === 'blog-post');
  const numPages = Math.ceil(blogPosts.length / POST_PER_PAGE);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: `/blog/${index + 1}`,
      component: path.resolve(`src/templates/blog-list.tsx`),
      context: {
        limit: POST_PER_PAGE,
        skip: index * POST_PER_PAGE,
        numPages,
        currentPage: index + 1,
        hasNext: index + 1 < numPages,
      },
    });
  });
};
