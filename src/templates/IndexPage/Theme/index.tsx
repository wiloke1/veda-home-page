import { Section } from 'components/Section';
import Title from 'components/Title';
import { FC } from 'react';
import { useThemeQuery } from './useThemeQuery';

export interface ThemeProps {
  heading: string;
  description: string;
}

export const Theme: FC<ThemeProps> = ({ heading, description }) => {
  const themes = useThemeQuery();

  console.log(123, themes);

  return (
    <Section>
      <Title title={heading} text={description} />
      {JSON.stringify(themes)}
    </Section>
  );
};
