// @ts-nocheck
import PropTypes from 'prop-types';
import { AboutPageTemplate } from 'templates/about-page';
import WrapWithProvider from 'WrapWithProvider';

const AboutPagePreview = ({ entry, widgetFor }) => {
  return (
    <WrapWithProvider>
      <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
    </WrapWithProvider>
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
