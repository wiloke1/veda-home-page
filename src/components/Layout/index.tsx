import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderForBuilder } from 'components/Header/HeaderForBuilder';
import { CSSProperties, FC } from 'react';
import Sticky from 'wil-react-sticky';
import { useLocation } from '@reach/router';
import { Head } from './Head';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';

export interface LayoutProps {
  overflow?: CSSProperties['overflow'];
}

let _pathname = '';

export const Layout: FC<LayoutProps> = ({ children, overflow = 'hidden' }) => {
  const navigation = useHeaderNavigationStatic();
  const location = useLocation();
  const headerFooterDisabled = ['/notifications', '/pricing-for-veda-builder', '/install'].includes(location.pathname);

  if (!_pathname) {
    _pathname = location.pathname;
  }

  return (
    <div id="veda-wrapper" style={{ overflow }}>
      <Head />
      {!headerFooterDisabled && <div style={{ height: 5 }} />}
      <Sticky>
        {active => {
          if (headerFooterDisabled) {
            return <div />;
          }
          if (_pathname === '/notifications') {
            return <HeaderForBuilder pathname={_pathname} containerStyle={active ? { backgroundColor: 'var(--color-light)' } : {}} />;
          }
          return <Header navigation={navigation} containerStyle={active ? { backgroundColor: 'var(--color-light)' } : {}} />;
        }}
      </Sticky>
      <main>{children}</main>
      {!headerFooterDisabled && <Footer />}
    </div>
  );
};
