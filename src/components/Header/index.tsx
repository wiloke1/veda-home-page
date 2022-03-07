import logo from 'img/logo.svg';
import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Link } from 'gatsby';
import { FC, useState } from 'react';
import { isBrowser } from 'utils/isBrowser';
import * as styles from './Header.module.scss';
import { useHeaderNavigationStatic } from './useHeaderNavigationStatic';

/* It's a simple component that renders a header with a logo, a navigation and a button. */
export const Header: FC = () => {
  const [active, setActive] = useState(false);
  const navigation = useHeaderNavigationStatic();

  // console.log(navigation);

  return (
    <header className={styles.container}>
      <Link to="/" title="Logo">
        <img src={logo} alt="Veda" style={{ width: '133px' }} />
      </Link>
      <div className={styles.center}>
        <nav className={classNames(styles.nav, { [styles.navActive]: active })}>
          <div className={styles.close} onClick={() => setActive(false)}>
            <i className="fal fa-times" />
          </div>
          {navigation.map(item => {
            const url = item.url.replace(/^\.\./g, '');
            const active = isBrowser
              ? url === '/'
                ? window.location.pathname === url
                : new RegExp(`^/${url.replace(/^\//g, '').replace(/\/.*/g, '')}`, 'g').test(window.location.pathname)
              : false;
            return (
              <Link
                key={item.label}
                to={url}
                className={classNames(
                  {
                    [styles.navItemActive]: active,
                  },
                  styles.navItem,
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className={styles.getStartedInNav}>
            <GetStartedPopup buttonText="Get started" />
          </div>
        </nav>
      </div>
      <div className={styles.right}>
        <div className={styles.getStarted}>
          <GetStartedPopup buttonText="Get started" />
        </div>
        <div className={styles.hamburger} onClick={() => setActive(true)}>
          <div className={styles.hamburgerItem} />
        </div>
      </div>
    </header>
  );
};
