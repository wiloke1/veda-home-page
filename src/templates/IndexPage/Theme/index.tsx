import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { ThemeCard } from 'components/ThemeCard';
import { Title } from 'components/Title';
import { Link } from 'gatsby';
import { FC } from 'react';
import { useThemeQuery } from './useThemeQuery';

export interface ThemeProps {
  subHeading?: string;
  heading: string;
  description: string;
}

export const Theme: FC<ThemeProps> = ({ subHeading, heading, description }) => {
  const themes = useThemeQuery();

  return (
    <Section>
      <Title subTitle={subHeading} title={heading} text={description} />
      <div className="container">
        <div className="row">
          {themes.map(({ node: theme }) => {
            return (
              <div key={theme.id} className="col-xs-12 col-sm-4 col-md-3">
                <ThemeCard title={theme.frontmatter.title} category={theme.frontmatter.category} image={theme.frontmatter.image} />
              </div>
            );
          })}
        </div>
      </div>
      {themes.length > 4 && (
        <Link to="/themes">
          <Button>View All</Button>
        </Link>
      )}
    </Section>
  );
};
