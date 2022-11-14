import { Link } from 'gatsby';
import { CSSProperties, FC } from 'react';

export interface HeaderForBuilderProps {
  containerStyle?: CSSProperties;
  pathname: string;
}

export const HeaderForBuilder: FC<HeaderForBuilderProps> = ({ containerStyle, pathname }) => {
  return (
    <header className="header-for-builder pos:relative z:999 trs:0.3s" style={containerStyle}>
      <div className="container">
        <Link to={pathname} className="d:flex ai:center h:70px fz:16px cur:pointer c:color-gray9 c:color-primary|h td:none trs:0.3s">
          <i className="far fa-arrow-left c:inherit" />
          <div className="ml:10px fw:600 ff:font-secondary">
            Back To{' '}
            {pathname
              .replace(/\//g, '')
              .replace(/-/g, ' ')
              .replace(/^\w/g, value => value.toUpperCase())}
          </div>
        </Link>
      </div>
    </header>
  );
};
