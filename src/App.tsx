import { FC, ReactNode } from 'react';

const App: FC<{ element?: ReactNode }> = ({ element, children }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <div>{element ?? children}</div>;
};

export default App;
