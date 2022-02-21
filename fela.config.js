const embedded = require('fela-plugin-embedded').default;
const kebabCase = require('fela-plugin-kebab-case').default;
const multipleSelectors = require('fela-plugin-multiple-selectors').default;
const felaPlugin = require('wiloke-react-core/dist/utils/felaPlugin').default;

module.exports = {
  plugins: [kebabCase(), embedded(), multipleSelectors(), felaPlugin({ pixelToRem: false, rootFontSizePercent: -1, removeHoverOnMobile: true })],
  enhancers: [],
};
