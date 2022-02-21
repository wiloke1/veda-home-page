// @ts-nocheck
import PropTypes from 'prop-types';
import { AboutPageTemplate } from 'templates/about-page';
import App from 'App';

const AboutPagePreview = ({ entry, widgetFor }) => {
  return (
    <App>
      <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
    </App>
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
