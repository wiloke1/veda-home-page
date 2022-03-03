// @ts-nocheck
import { Section } from 'components/Section';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from '../components/Layout';

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content }) => {
  return (
    <Section>
      <div className="container">
        <div style={{ maxWidth: 600, margin: 'auto' }}>
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
          {typeof content === 'string' ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}
        </div>
      </div>
    </Section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
