import { Layout } from 'components/Layout';
import { NotifyCard } from 'components/NotifyCard';
import { Pagination } from 'components/Pagination';
import { Section } from 'components/Section';
import { graphql, Link, navigate } from 'gatsby';
import { FC } from 'react';
import { MarkdownRemarkEdges } from 'types/general';
import { NotificationItem, NotificationList } from 'types/Notifications';

const NotificationsIndexPage: FC<NotificationList> = ({ data, pageContext }) => {
  const notifications = data.allMarkdownRemark.edges;

  const renderNotification = ({ node }: MarkdownRemarkEdges<NotificationItem>) => {
    return (
      <div key={node.id}>
        {node.frontmatter.href ? (
          <Link to={node.frontmatter.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <NotifyCard title={node.frontmatter.title} description={node.frontmatter.description} date={node.frontmatter.date} />
          </Link>
        ) : (
          <NotifyCard title={node.frontmatter.title} description={node.frontmatter.description} date={node.frontmatter.date} />
        )}
      </div>
    );
  };

  return (
    <Layout headerFooterDisabled>
      <Section backgroundColor="var(--color-gray1)" className="mih:100vh">
        <div className="container">
          <div className="maw:800px m:auto">{notifications.map(renderNotification)}</div>
        </div>
        {pageContext.numPages > 1 && (
          <div style={{ marginTop: 50 }}>
            <Pagination
              initialPage={pageContext.currentPage - 1}
              onPageChange={({ selected }) => {
                navigate(selected === 0 ? '/notifications' : `/notifications/${selected + 1}`);
              }}
              pageRangeDisplayed={5}
              pageCount={pageContext.numPages}
            />
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default NotificationsIndexPage;

export const pageQuery = graphql`
  query NotificationsQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "notification" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            href
          }
        }
      }
    }
  }
`;
