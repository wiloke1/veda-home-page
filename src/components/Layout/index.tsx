import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderForBuilder } from 'components/Header/HeaderForBuilder';
import { CSSProperties, FC } from 'react';
import Sticky from 'wil-react-sticky';
import { useLocation } from '@reach/router';
import { useQueryParams } from 'hooks/useQueryParams';
import { Head } from './Head';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';

export interface LayoutProps {
  overflow?: CSSProperties['overflow'];
}

let _forBuilder = false;
let _pathname = '';

export const Layout: FC<LayoutProps> = ({ children, overflow = 'hidden' }) => {
  const navigation = useHeaderNavigationStatic();
  const location = useLocation();
  const queryParams = useQueryParams();

  if (!_forBuilder) {
    _forBuilder = queryParams('forbuilder') === '1';
  }

  if (!_pathname) {
    _pathname = location.pathname;
  }

  return (
    <div id="veda-wrapper" style={{ overflow }}>
      <Head />
      {!_forBuilder && <div style={{ height: 5 }} />}
      <Sticky>
        {active => {
          if (_forBuilder) {
            if (/\/(notifications|pricing|install)/g.test(location.pathname)) {
              return <div />;
            }
            return <HeaderForBuilder pathname={_pathname} containerStyle={active ? { backgroundColor: 'var(--color-light)' } : {}} />;
          }
          return <Header navigation={navigation} containerStyle={active ? { backgroundColor: 'var(--color-light)' } : {}} />;
        }}
      </Sticky>
      <main>{children}</main>
      {!_forBuilder && <Footer />}
    </div>
  );
};
