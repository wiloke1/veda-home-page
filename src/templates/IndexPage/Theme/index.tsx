import { Button } from 'components/Button';
import { Section } from 'components/Section';
import Title from 'components/Title';
import { Link } from 'gatsby';
import { FC } from 'react';
import { useThemeQuery } from './useThemeQuery';

export interface ThemeProps {
  heading: string;
  description: string;
}

export const Theme: FC<ThemeProps> = ({ heading, description }) => {
  const themes = useThemeQuery();

  return (
    <Section>
      <Title title={heading} text={description} />
      {JSON.stringify(themes)}
      <Link to="/themes">
        <Button>View All</Button>
      </Link>
    </Section>
  );
};
