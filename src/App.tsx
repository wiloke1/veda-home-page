import { CSSProperties, FC, ReactNode } from 'react';
import 'styles/styles.scss';
import { isBrowser } from 'utils/isBrowser';
import { pmChildren } from 'utils/postMessage';

if (isBrowser) {
  window.addEventListener('load', () => {
    const id = setTimeout(() => {
      pmChildren.emit('@landing/ready');
      clearTimeout(id);
    }, 200);
  });
}

const App: FC<{ element?: ReactNode; overflow?: CSSProperties['overflow'] }> = ({ overflow, element, children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <div style={{ overflow }}>{element ?? children}</div>;
};

export default App;
