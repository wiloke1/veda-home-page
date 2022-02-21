const embedded = require('fela-plugin-embedded');
const kebabCase = require('fela-plugin-kebab-case');
const multipleSelectors = require('fela-plugin-multiple-selectors');
const felaPlugin = require('wiloke-react-core/dist/utils/felaPlugin').default;

module.exports = {
  plugins: [kebabCase(), embedded(), multipleSelectors(), felaPlugin({ pixelToRem: false, rootFontSizePercent: -1, removeHoverOnMobile: true })],
  enhancers: [],
};
