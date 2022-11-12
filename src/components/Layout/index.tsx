import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderForBuilder } from 'components/Header/HeaderForBuilder';
import { withPrefix } from 'gatsby';
import { CSSProperties, FC } from 'react';
import { Helmet } from 'react-helmet';
import Sticky from 'wil-react-sticky';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';
import useSiteMetadata from './useSiteMetadata';

export interface LayoutProps {
  overflow?: CSSProperties['overflow'];
  headerFooterDisabled?: boolean;
}

let _headerFooterDisabled = false;

export const Layout: FC<LayoutProps> = ({ children, overflow = 'hidden', headerFooterDisabled = false }) => {
  const { title, description } = useSiteMetadata();
  const navigation = useHeaderNavigationStatic();
  if (!_headerFooterDisabled) {
    _headerFooterDisabled = headerFooterDisabled;
  }

  return (
    <div id="veda-wrapper" style={{ overflow }}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#2C36DC" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.png`} />

        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css" />

        {`<!-- Global site tag (gtag.js) - Google Analytics -->`}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WG1X3313ZB"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WG1X3313ZB');`}
        </script>
      </Helmet>
      <div style={{ height: 5 }} />
      <Sticky>
        {active => {
          if (_headerFooterDisabled) {
            return <HeaderForBuilder containerStyle={active ? { backgroundColor: 'var(--color-light)', height: 70 } : {}} />;
          }
          return <Header navigation={navigation} containerStyle={active ? { backgroundColor: 'var(--color-light)', height: 70 } : {}} />;
        }}
      </Sticky>
      <main>{children}</main>
      {!_headerFooterDisabled && <Footer />}
    </div>
  );
};
