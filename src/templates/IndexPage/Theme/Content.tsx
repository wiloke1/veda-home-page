import { Button } from 'components/Button';
import { ThemeCard } from 'components/ThemeCard';
import { Link } from 'gatsby';
import { FC } from 'react';
import { useThemeQuery } from './useThemeQuery';

export interface ContentProps {}

export const Content: FC<ContentProps> = () => {
  const themes = useThemeQuery();

  return (
    <div className="container">
      <div className="row">
        {themes.map(({ node: theme }) => {
          return (
            <div key={theme.id} className="col-xs-12 col-sm-4 col-md-3">
              <ThemeCard
                title={theme.frontmatter.title}
                category={theme.frontmatter.category}
                image={theme.frontmatter.image}
                previewHref={theme.frontmatter.previewHref}
              />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <Link to="/themes">
          <Button>View All</Button>
        </Link>
      </div>
    </div>
  );
};
