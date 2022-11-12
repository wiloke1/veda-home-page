const { rtl, pfs, stylesMap } = require('mota-css');

const childrenStyles = () => {
  return ({ styles, addStyles }) => {
    addStyles(
      stylesMap(styles, (selector, css) => {
        const [property, value] = css;
        if (/\*\w*$/g.test(selector)) {
          const childTag = selector.replace(/.*\*/g, '');
          return {
            [`${selector.replace(/\*/g, '\\*')} ${childTag}`]: [property, value.replace(/\*\w*$/g, '')],
          };
        }
        return {
          [selector]: css,
        };
      }),
    );
  };
};

module.exports = {
  input: ['./src/**/*.tsx', './src/**/*.ts'],
  output: './src/styles/mota-css.scss',
  cache: true,
  plugins: [rtl(), pfs(), childrenStyles()],
  customValue(value) {
    if (value.includes('var(--')) {
      return value;
    }
    if (/color-\w*/g.test(value)) {
      const val = Array.from(new Set(value.match(/color(-\w*)*(\.\d*|)/g)));
      return val.reduce((str, val) => {
        if (/\.\d*/g.test(val)) {
          const alpha = val.replace(/.*(?=\.\d*)/g, '');
          return str.replaceAll(val, `rgba(var(--rgb-${val.replace(/\.\d*$/g, '')}), ${alpha})`).replace(/\)\.\d*/g, ')');
        }
        return str.replaceAll(val, `var(--${val})`);
      }, value);
    }
    if (/font-\w*/g.test(value)) {
      const val = value.match(/font(-\w*)*/g)?.[0];
      return value.replace(/font(-\w*)*/g, `var(--${val})`);
    }
    return value;
  },
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
};
