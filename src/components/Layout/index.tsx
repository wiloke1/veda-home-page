import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderForBuilder } from 'components/Header/HeaderForBuilder';
import { CSSProperties, FC } from 'react';
import Sticky from 'wil-react-sticky';
import { useLocation } from '@reach/router';
import { isBrowser } from 'utils/isBrowser';
import { Head } from './Head';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';

export interface LayoutProps {
  overflow?: CSSProperties['overflow'];
}

let _forBuilder = false;
let _pathname = '';
let _loaded = false;

if (isBrowser && !_loaded) {
  window.addEventListener('load', () => {
    window.postMessage({ type: 'loaded' }, '*');
    _loaded = true;
  });
}

export const Layout: FC<LayoutProps> = ({ children, overflow = 'hidden' }) => {
  const navigation = useHeaderNavigationStatic();
  const location = useLocation();

  if (!_forBuilder && location?.search) {
    _forBuilder = location.search.includes('forbuilder=1');
  }

  if (!_pathname) {
    _pathname = location.pathname;
  }

  return (
    <div id="veda-wrapper" style={{ overflow }}>
      <Head />
      <div style={{ height: 5 }} />
      <Sticky>
        {active => {
          if (_forBuilder) {
            if (/\/(notifications|pricing)/g.test(location.pathname)) {
              return <div />;
            }
            return <HeaderForBuilder pathname={_pathname} containerStyle={active ? { backgroundColor: 'var(--color-light)', height: 70 } : {}} />;
          }
          return <Header navigation={navigation} containerStyle={active ? { backgroundColor: 'var(--color-light)', height: 70 } : {}} />;
        }}
      </Sticky>
      <main>{children}</main>
      {!_forBuilder && <Footer />}
    </div>
  );
};
