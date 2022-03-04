import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { ContactPageTemplate } from 'templates/contact-page';
import { ContactPageFrontMaster } from 'types/Contact';

const ContactPagePreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS() as ContactPageFrontMaster;

  if (data) {
    return (
      <App>
        <ContactPageTemplate {...data} />
      </App>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ContactPagePreview;
