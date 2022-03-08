import logo from 'img/logo.svg';
import classNames from 'classnames';
import { GetStartedPopup } from 'components/GetStartedPopup';
import { Link } from 'gatsby';
import { FC, useState } from 'react';
import { HeaderNavigationItem } from 'types/Navigation';
import { isBrowser } from 'utils/isBrowser';
import * as styles from './Header.module.scss';

export interface HeaderProps {
  navigation: HeaderNavigationItem[];
}

const getUrl = (url: string) => {
  return url.replace(/^\.\./g, '');
};

export const Header: FC<HeaderProps> = ({ navigation }) => {
  const [active, setActive] = useState(false);

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
            const url = getUrl(item.url);
            const active = isBrowser
              ? url === '/'
                ? window.location.pathname === url
                : new RegExp(`^/${url.replace(/^\//g, '').replace(/\/.*/g, '')}`, 'g').test(window.location.pathname)
              : false;
            return (
              <div
                className={classNames(
                  {
                    [styles.navItemActive]: active,
                    [styles.navItemHasSubMenu]: !!item.subMenu,
                  },
                  styles.navItem,
                )}
              >
                <Link key={item.label} to={url}>
                  {item.label}
                  {!!item.subMenu && <i className={classNames('far fa-angle-down', styles.arrow)} />}
                </Link>
                {!!item.subMenu && (
                  <div className={styles.subMenu}>
                    {item.subMenu.map(item => {
                      const url = getUrl(item.url);
                      return (
                        <div
                          className={classNames(
                            {
                              [styles.navItemActive]: active,
                            },
                            styles.subMenuItem,
                          )}
                        >
                          <Link key={item.label} to={url}>
                            {item.label}
                          </Link>
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
    </header>
  );
};
