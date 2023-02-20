import { withPrefix } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import useSiteMetadata from './useSiteMetadata';

export const Head: FC = () => {
  const { title, description } = useSiteMetadata();
  const location = useLocation();
  const chatEnabled = !['/notifications', '/pricing-for-veda-builder'].includes(location.pathname);

  return (
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
      <script type="text/javascript">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WG1X3313ZB');`}
      </script>
      {chatEnabled && (
        <script type="text/javascript">{`
        window.$crisp=[];window.CRISP_WEBSITE_ID="92a4593d-e4db-40bd-b5cf-474d9d99e996";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}</script>
      )}
    </Helmet>
  );
};
