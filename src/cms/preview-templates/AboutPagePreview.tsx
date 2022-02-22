import { AboutPageTemplate } from 'templates/about-page';
import App from 'App';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const AboutPagePreview = ({ entry, widgetFor }: PreviewTemplateComponentProps) => {
  return (
    <App>
      {/* @ts-ignore */}
      <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
    </App>
  );
};

export default AboutPagePreview;
