import { NetlifyWarning } from 'components/NetlifyWarning';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { FC } from 'react';
import { SectionThemes } from 'types/Builder';
import { builderMode } from 'utils/builderMode';
import { Content } from './Content';

export interface ThemeProps extends SectionThemes {}

export const Theme: FC<ThemeProps> = ({ heading, description, decorate, backgroundImage, backgroundColor }) => {
  return (
    <Section backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <Title title={heading} text={description} decorate={decorate} />
      {builderMode.get() ? <NetlifyWarning pageName="theme" /> : <Content />}
    </Section>
  );
};
