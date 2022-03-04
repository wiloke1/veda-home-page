import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { graphql } from 'gatsby';
import { FC } from 'react';
import { ContactPageFrontMaster, IContactPage } from 'types/Contact';
import { ContactForm } from './ContactPage/ContactForm';

export const ContactPageTemplate: FC<ContactPageFrontMaster> = ({ heading, description, decorate, form }) => {
  return (
    <Section backgroundColor="var(--color-gray1)">
      <div className="container">
        <Title title={heading} text={description} decorate={decorate} />
        <ContactForm {...form} />
      </div>
    </Section>
  );
};

const ContactPage: FC<IContactPage> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate {...frontmatter} />
    </Layout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        heading
        description
        decorate
        form {
          nameLabel
          emailLabel
          websiteLabel
          optionsLabel
          options {
            value
          }
          messageLabel
          buttonText
        }
      }
    }
  }
`;
