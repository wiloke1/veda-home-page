/* eslint-disable */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// eslint-disable-next-line
export const ThemeTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {/* {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div> */}
    </section>
  );
};

const Theme = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      test
    </Layout>
  );
};

export default Theme;

export const pageQuery = graphql`
  query ThemeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 100, layout: CONSTRAINED)
          }
        }
        previewHref
      }
    }
  }
`;
