import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import { TagsGrid } from 'components/TagsGrid';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { ITagsPage } from 'types/Tags';

const TagsPage: FC<ITagsPage> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Section backgroundColor="var(--color-gray1)">
      <Helmet title={`Tags | ${title}`} />
      <div className="container">
        <h3 style={{ marginBottom: 20 }}>Tags</h3>
        <TagsGrid data={group} />
      </div>
    </Section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
