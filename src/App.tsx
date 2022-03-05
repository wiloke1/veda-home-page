import { CSSProperties, FC, ReactNode } from 'react';
import 'styles/styles.scss';

const App: FC<{ element?: ReactNode; overflow?: CSSProperties['overflow'] }> = ({ overflow, element, children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <div style={{ overflow }}>{element ?? children}</div>;
};

export default App;
