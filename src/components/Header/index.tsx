import logo from 'img/logo.svg';
import { FC } from 'react';
import { Link } from 'gatsby';
import { Button } from 'components/Button';
import classNames from 'classnames';
import * as styles from './Header.module.scss';
import { data } from './data';

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <Link to="/" title="Logo">
        <img src={logo} alt="Veda" style={{ width: '133px' }} />
      </Link>
      <div className={styles.center}>
        <nav className={styles.nav}>
          {data.map(item => {
            const active =
              item.path === '/'
                ? window.location.pathname === item.path
                : new RegExp(`^/${item.path.replace(/^\//g, '').replace(/\/.*/g, '')}`, 'g').test(window.location.pathname);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={classNames(
                  {
                    [styles.navItemActive]: active,
                  },
                  styles.navItem,
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className={styles.right}>
        <Button>Get started</Button>
      </div>
    </header>
  );
};
