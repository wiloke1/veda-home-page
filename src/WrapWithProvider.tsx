import { FC, ReactNode } from 'react';
import styleBase from 'styles/base';
import * as styles from 'styles/global';
import { useStyleSheet, View } from 'wiloke-react-core';

const _CSSGlobal: FC = ({ children }) => {
  const { renderer } = useStyleSheet();

  renderer.renderStatic(styleBase);

  return <View css={styles.cssGlobalWithTheme}>{children}</View>;
};

const WrapWithProvider: FC<{ element?: ReactNode }> = ({ element, children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <div>{element ?? children}</div>;
  // return (
  //   <ThemeProvider themeOverrides={{ ...themeOverrides, direction: 'ltr' }}>
  //     <CSSGlobal>{element ?? children}</CSSGlobal>
  //   </ThemeProvider>
  // );
};

export default WrapWithProvider;
