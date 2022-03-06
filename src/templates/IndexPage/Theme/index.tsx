import { NetlifyWarning } from 'components/NetlifyWarning';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionThemes } from 'types/Builder';
import { Content } from './Content';

export interface ThemeProps extends SectionThemes {
  isNetlify?: boolean;
}

export const Theme: FC<ThemeProps> = ({ heading, description, decorate, isNetlify = false }) => {
  return (
    <Section>
      <Title title={heading} text={description} decorate={decorate} />
      {isNetlify ? <NetlifyWarning pageName="theme" /> : <Content />}
    </Section>
  );
};
