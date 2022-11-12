import logo from 'img/logo.svg';
import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Link } from 'gatsby';
import { CSSProperties, FC, useState } from 'react';
import { HeaderNavigationItem } from 'types/Navigation';
import { isBrowser } from 'utils/isBrowser';
import * as styles from './Header.module.scss';

export interface HeaderProps {
  navigation: HeaderNavigationItem[];
  containerStyle?: CSSProperties;
}

const getUrl = (url: string) => {
  return url.replace(/^\.\./g, '');
};

const isActive = (url: string) => {
  const active = isBrowser
    ? url === '/'
      ? window.location.pathname === url
      : new RegExp(`^/${url.replace(/^\//g, '').replace(/\/.*/g, '')}`, 'g').test(window.location.pathname)
    : false;
  return active;
};

export const Header: FC<HeaderProps> = ({ navigation, containerStyle }) => {
  const [active, setActive] = useState(false);

  return (
    <header className="pos:relative z:999 trs:0.3s" style={containerStyle}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" title="Logo">
            <img src={logo} alt="Veda" style={{ height: 44 }} />
          </Link>
          <div className={styles.center}>
            <nav className={classNames(styles.nav, { [styles.navActive]: active })}>
              <div className={styles.close} onClick={() => setActive(false)}>
                <i className="fal fa-times" />
              </div>
              {navigation.map(item => {
                const url = getUrl(item.url);
                const active = isActive(url);
                return (
                  <div
                    key={item.label}
                    className={classNames(
                      {
                        [styles.navItemActive]: active,
                        [styles.navItemHasSubMenu]: !!item.subMenu,
                      },
                      styles.navItem,
                    )}
                  >
                    <Link to={url}>
                      {item.label}
                      {!!item.subMenu && <i className={classNames('far fa-angle-down', styles.arrow)} />}
                    </Link>
                    {!!item.subMenu && (
                      <div className={styles.subMenu}>
                        {item.subMenu.map(item => {
                          const url = getUrl(item.url);
                          const active = isActive(url);
                          return (
                            <div
                              key={item.label}
                              className={classNames(
                                {
                                  [styles.navItemActive]: active,
                                },
                                styles.subMenuItem,
                              )}
                            >
                              <Link to={url}>{item.label}</Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
        </div>
      </div>
    </header>
  );
};
