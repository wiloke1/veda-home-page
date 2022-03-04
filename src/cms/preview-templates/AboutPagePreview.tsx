import { AboutPageTemplate } from 'templates/about-page';
import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const AboutPagePreview = ({ entry, widgetFor }: PreviewTemplateComponentProps) => {
  return (
    <App>
      <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body') as any} />
    </App>
  );
};

export default AboutPagePreview;
