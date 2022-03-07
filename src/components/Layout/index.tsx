import { Header } from 'components/Header';
import { withPrefix } from 'gatsby';
import { CSSProperties, FC } from 'react';
import { Helmet } from 'react-helmet';
import Sticky from 'wil-react-sticky';
import { Footer } from 'components/Footer';
import useSiteMetadata from './useSiteMetadata';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';

export interface LayoutProps {
  overflow?: CSSProperties['overflow'];
}

export const Layout: FC<LayoutProps> = ({ children, overflow = 'hidden' }) => {
  const { title, description } = useSiteMetadata();
  const navigation = useHeaderNavigationStatic();

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
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />

        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css" />
      </Helmet>
      <Sticky>
        <Header navigation={navigation} />
      </Sticky>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
