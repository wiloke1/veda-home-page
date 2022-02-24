import logo from 'img/logo.svg';
import { FC } from 'react';
import { Link } from 'gatsby';
import { Button } from 'components/Button';
import * as styles from './Header.module.scss';
import { data } from './data';

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <Link to="/" title="Logo">
        <img src={logo} alt="Veda" style={{ width: '133px' }} />
      </Link>
      <div className={styles.right}>
        <nav className={styles.nav}>
          {data.map(item => {
            return (
              <Link key={item.name} to={item.path} className={styles.navItem}>
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Button>Get started</Button>
      </div>
    </header>
  );
};
