import { themeOverrides } from 'themeOverrides';
import { ThemeProvider, useStyleSheet, View } from 'wiloke-react-core';
import styleBase from 'styles/base';
import { FC, ReactNode } from 'react';
import * as styles from 'styles/global';

const CSSGlobal: FC = ({ children }) => {
  const { renderer } = useStyleSheet();

  renderer.renderStatic(styleBase);

  return <View css={styles.cssGlobalWithTheme}>{children}</View>;
};

const WrapWithProvider: FC<{ element?: ReactNode }> = ({ element, children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <ThemeProvider themeOverrides={{ ...themeOverrides, direction: 'ltr' }}>
      <CSSGlobal>{element ?? children}</CSSGlobal>
    </ThemeProvider>
  );
};

export default WrapWithProvider;
